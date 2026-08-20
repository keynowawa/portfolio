import { useEffect, useRef, useState } from 'react';
import { usePortfolioContent } from '../context/usePortfolioContent';
import Glyph from './Glyph';
import styles from './ExperienceMap.module.css';

function CarouselControls({ label, onMove }) {
  return (
    <div className={styles.controls} aria-label={label}>
      <button type="button" onClick={() => onMove(-1)} aria-label={`Previous ${label.toLowerCase()}`}><Glyph className={styles.previousIcon} name="arrowRight" size={17} /></button>
      <button type="button" onClick={() => onMove(1)} aria-label={`Next ${label.toLowerCase()}`}><Glyph name="arrowRight" size={17} /></button>
    </div>
  );
}

function GalleryVisual({ item, index }) {
  if (item.image) return <img src={item.image} alt={`${item.organization} experience`} loading="lazy" />;

  return (
    <div className={`${styles.galleryVisual} ${styles[item.id]}`} role="img" aria-label={`${item.organization} photo slot`}>
      <span>FIELD NOTE / {String(index + 1).padStart(2, '0')}</span>
      <strong>{item.mark}</strong>
      <small>{item.caption}</small>
    </div>
  );
}

export default function ExperienceMap() {
  const { content } = usePortfolioContent();
  const buildLog = content.journey.items;
  const experienceGallery = content.journey.gallery;
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const galleryRef = useRef(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const dragRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const pause = () => {
    pausedRef.current = true;
    window.clearTimeout(resumeTimerRef.current);
  };

  const resumeAfter = (delay = 1800) => {
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => { pausedRef.current = false; }, delay);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.16 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frame;
    let previousTime;

    const move = (time) => {
      const track = timelineRef.current;
      if (track && previousTime && !pausedRef.current && document.visibilityState === 'visible') {
        const delta = Math.min(time - previousTime, 32);
        const speed = window.innerWidth <= 700 ? 0.068 : 0.05;
        track.scrollLeft += delta * speed;
        const loopPoint = track.scrollWidth / 2;
        if (track.scrollLeft >= loopPoint) track.scrollLeft -= loopPoint;
      }
      previousTime = time;
      frame = window.requestAnimationFrame(move);
    };

    frame = window.requestAnimationFrame(move);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const moveTimeline = (direction) => {
    const track = timelineRef.current;
    if (!track) return;
    pause();
    track.scrollBy({ left: direction * Math.min(track.clientWidth * .78, 500), behavior: 'smooth' });
    resumeAfter(900);
  };

  const moveGallery = (direction) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    if (direction > 0 && gallery.scrollLeft >= maxScroll - 12) {
      gallery.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    if (direction < 0 && gallery.scrollLeft <= 12) {
      gallery.scrollTo({ left: maxScroll, behavior: 'smooth' });
      return;
    }
    gallery.scrollBy({ left: direction * Math.min(gallery.clientWidth * .82, 440), behavior: 'smooth' });
  };

  const handlePointerDown = (event) => {
    pause();
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    const track = timelineRef.current;
    if (!track) return;
    dragRef.current = { pointerId: event.pointerId, startX: event.clientX, startScroll: track.scrollLeft };
    track.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    const track = timelineRef.current;
    if (!drag || !track || drag.pointerId !== event.pointerId) return;
    track.scrollLeft = drag.startScroll - (event.clientX - drag.startX);
  };

  const handlePointerEnd = (event) => {
    const track = timelineRef.current;
    if (dragRef.current?.pointerId === event.pointerId && track?.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    dragRef.current = null;
    setDragging(false);
    resumeAfter(0);
  };

  const loopEntries = [...buildLog, ...buildLog];

  return (
    <section ref={sectionRef} id="journey" className={`${styles.journey} section-padding`} aria-labelledby="journey-title">
      <div className={`${styles.header} container`}>
        <div>
          <span className="section-kicker"><span>03</span><span>So far</span></span>
          <h2 id="journey-title" className="section-title">How I got here.</h2>
        </div>
        <CarouselControls label="Experience timeline" onMove={moveTimeline} />
      </div>

      <div
        ref={timelineRef}
        className={`${styles.timelineViewport} ${entered ? styles.entered : ''} ${dragging ? styles.dragging : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onFocusCapture={() => {
          if (window.matchMedia('(hover: none), (pointer: coarse)').matches) resumeAfter(0);
          else pause();
        }}
        onBlurCapture={() => resumeAfter(900)}
        onTouchEnd={() => resumeAfter(0)}
        aria-label="Career and leadership timeline. Scroll horizontally or use the previous and next buttons."
      >
        <ol className={styles.timelineTrack}>
          {loopEntries.map((entry, index) => {
            const duplicate = index >= buildLog.length;
            return (
              <li style={{ '--entry-index': index % buildLog.length }} aria-hidden={duplicate || undefined} key={`${entry.period}-${entry.title}-${index}`}>
                <article tabIndex={duplicate ? -1 : 0}>
                  <div className={styles.cardTop}><time>{entry.period}</time><span>{entry.type}</span></div>
                  <h3>{entry.title}</h3>
                  <p className={styles.organization}>{entry.organization}</p>
                  <strong className={styles.result}>{entry.result}</strong>
                  <ul>{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>

      <div className={`${styles.gallerySection} container`}>
        <header>
          <div><span>OFF THE SCREEN</span><h3>Experience gallery</h3></div>
          <CarouselControls label="Experience gallery" onMove={moveGallery} />
        </header>
        <div className={styles.galleryViewport} ref={galleryRef}>
          <div className={styles.galleryTrack}>
            {experienceGallery.map((item, index) => (
              <article className={styles.galleryCard} key={item.id}>
                <div className={styles.galleryMedia}><GalleryVisual item={item} index={index} /></div>
                <div className={styles.galleryCopy}>
                  <div><time>{item.period}</time>{item.href && <a href={item.href} target="_blank" rel="noreferrer">{item.linkLabel} <Glyph name="arrowUpRight" size={14} /></a>}</div>
                  <h4>{item.organization}</h4>
                  <p>{item.role}</p>
                  <small>{item.location}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
