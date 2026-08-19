import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Wayfinder.module.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Story' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'toolkit', label: 'Stack' },
  { id: 'credentials', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export default function Wayfinder() {
  const [activeSection, setActiveSection] = useState('about');
  const [visible, setVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [betweenSections, setBetweenSections] = useState(false);
  const [morphing, setMorphing] = useState(false);
  const navRef = useRef(null);
  const draggingRef = useRef(false);
  const pointerIdRef = useRef(null);
  const dragStartRef = useRef(0);
  const didDragRef = useRef(false);
  const lastScrubRef = useRef(-1);
  const pendingSectionRef = useRef(null);
  const dragCentersRef = useRef([]);
  const navigationTargetRef = useRef(null);
  const navigationTimerRef = useRef(null);
  const previousActiveRef = useRef(activeSection);
  const activeIndex = Math.max(0, sections.findIndex(({ id }) => id === activeSection));
  const beforeSections = sections.slice(0, activeIndex);
  const afterSections = sections.slice(activeIndex + 1);
  const segmentHeight = (count) => (count > 0 ? 44 + (count - 1) * 28 : 0);
  const beforeHeight = segmentHeight(beforeSections.length);
  const afterHeight = segmentHeight(afterSections.length);
  const circleTop = beforeHeight > 0 ? beforeHeight + 8 : 0;
  const afterTop = circleTop + 44 + (afterHeight > 0 ? 8 : 0);
  const railHeight = afterHeight > 0 ? afterTop + afterHeight : circleTop + 44;

  useLayoutEffect(() => {
    if (previousActiveRef.current === activeSection) return undefined;
    previousActiveRef.current = activeSection;
    setMorphing(true);
    const timer = window.setTimeout(() => setMorphing(false), 560);
    return () => window.clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    const onScroll = () => {
      const isVisible = window.scrollY > window.innerHeight * 0.65;
      setVisible(isVisible);

      if (!isVisible) {
        setBetweenSections(false);
        return;
      }

      const viewportAnchor = window.scrollY + window.innerHeight * 0.42;
      const nearestBoundary = sections.reduce((nearest, { id }) => {
        const section = document.getElementById(id);
        return section ? Math.min(nearest, Math.abs(section.offsetTop - viewportAnchor)) : nearest;
      }, Number.POSITIVE_INFINITY);
      setBetweenSections(nearestBoundary < Math.min(110, window.innerHeight * 0.16));
    };
    const observer = new IntersectionObserver((entries) => {
      if (navigationTargetRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -55% 0px' });

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(navigationTimerRef.current);
    };
  }, []);

  const scrubTo = (clientY) => {
    const nav = navRef.current;
    if (!nav) return;
    const liveCandidates = sections.map(({ id }) => {
      const target = id === activeSection
        ? nav.querySelector(`.${styles.activeBubble}`)
        : nav.querySelector(`a[data-section="${id}"]`);
      if (!target) return null;
      const rect = target.getBoundingClientRect();
      return { id, center: rect.top + rect.height / 2 };
    }).filter(Boolean);
    const candidates = dragCentersRef.current.length > 0 ? dragCentersRef.current : liveCandidates;
    const nearest = candidates.reduce((best, candidate) => {
      const distance = Math.abs(clientY - candidate.center);
      return distance < best.distance ? { distance, id: candidate.id } : best;
    }, { distance: Number.POSITIVE_INFINITY, id: null }).id;

    if (!nearest || nearest === lastScrubRef.current) return;
    lastScrubRef.current = nearest;
    const section = sections.find(({ id }) => id === nearest);
    if (!section) return;
    setActiveSection(section.id);
    pendingSectionRef.current = section.id;
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    dragStartRef.current = event.clientY;
    pointerIdRef.current = event.pointerId;
    didDragRef.current = false;
    lastScrubRef.current = -1;
    pendingSectionRef.current = null;
    dragCentersRef.current = sections.map(({ id }) => {
      const target = id === activeSection
        ? event.currentTarget.querySelector(`.${styles.activeBubble}`)
        : event.currentTarget.querySelector(`a[data-section="${id}"]`);
      if (!target) return null;
      const rect = target.getBoundingClientRect();
      return { id, center: rect.top + rect.height / 2 };
    }).filter(Boolean);
    setPressing(true);
    if (event.target instanceof Element && event.target.closest(`.${styles.activeBubble}`)) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event) => {
    if (pointerIdRef.current !== event.pointerId) return;
    if (!didDragRef.current && Math.abs(event.clientY - dragStartRef.current) > 7) {
      didDragRef.current = true;
      draggingRef.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    if (draggingRef.current) scrubTo(event.clientY);
  };

  const stopDragging = (event) => {
    if (pointerIdRef.current !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (draggingRef.current) scrubTo(event.clientY);
    if (draggingRef.current && pendingSectionRef.current) {
      const destination = document.getElementById(pendingSectionRef.current);
      navigationTargetRef.current = pendingSectionRef.current;
      if (destination) window.scrollTo({ top: destination.offsetTop, behavior: 'instant' });
      window.history.replaceState(null, '', `#${pendingSectionRef.current}`);
      window.clearTimeout(navigationTimerRef.current);
      navigationTimerRef.current = window.setTimeout(() => {
        navigationTargetRef.current = null;
      }, 180);
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    }
    draggingRef.current = false;
    pointerIdRef.current = null;
    setDragging(false);
    setPressing(false);
    dragCentersRef.current = [];
    window.setTimeout(() => { didDragRef.current = false; }, 0);
  };

  const handlePointerLeave = (event) => {
    const ownsPointer = pointerIdRef.current !== null && event.currentTarget.hasPointerCapture(pointerIdRef.current);
    if (!draggingRef.current && !ownsPointer) setPressing(false);
  };

  const handleLinkClick = (event, id) => {
    if (didDragRef.current) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    navigationTargetRef.current = id;
    window.clearTimeout(navigationTimerRef.current);
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', `#${id}`);
    navigationTimerRef.current = window.setTimeout(() => {
      navigationTargetRef.current = null;
    }, 1300);
  };

  return (
    <nav
      ref={navRef}
      className={`${styles.wayfinder} ${visible ? styles.visible : ''} ${betweenSections ? styles.between : ''} ${morphing ? styles.morphing : ''} ${pressing ? styles.pressing : ''} ${dragging ? styles.dragging : ''}`}
      style={{
        '--rail-height': `${railHeight}px`,
        '--circle-top': `${circleTop}px`,
        '--before-height': `${beforeHeight}px`,
        '--after-top': `${afterTop}px`,
        '--after-height': `${afterHeight}px`,
      }}
      data-edge={activeIndex === 0 ? 'first' : activeIndex === sections.length - 1 ? 'last' : undefined}
      aria-label={`Page sections. Current section: ${sections[activeIndex].label}. Drag to move through the portfolio.`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onPointerLeave={handlePointerLeave}
    >
      <b
        className={styles.activeBubble}
        aria-hidden="true"
      />
      <b className={`${styles.liquidBridge} ${styles.bridgeBefore}`} aria-hidden="true" />
      <b className={`${styles.liquidBridge} ${styles.bridgeAfter}`} aria-hidden="true" />
      <div className={`${styles.railSegment} ${styles.railBefore}`} aria-hidden={beforeSections.length === 0 || undefined}>
        {beforeSections.map((section) => (
          <a key={section.id} data-section={section.id} href={`#${section.id}`} onClick={(event) => handleLinkClick(event, section.id)}>
            <span>{section.label}</span><i />
          </a>
        ))}
      </div>
      <div className={`${styles.railSegment} ${styles.railAfter}`} aria-hidden={afterSections.length === 0 || undefined}>
        {afterSections.map((section) => (
          <a key={section.id} data-section={section.id} href={`#${section.id}`} onClick={(event) => handleLinkClick(event, section.id)}>
            <span>{section.label}</span><i />
          </a>
        ))}
      </div>
    </nav>
  );
}
