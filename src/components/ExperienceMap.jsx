import { useEffect, useRef, useState } from 'react';
import { buildLog } from '../content/portfolio';
import styles from './ExperienceMap.module.css';

export default function ExperienceMap() {
  const sectionRef = useRef(null);
  const stopRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleStops, setVisibleStops] = useState(() => new Set());

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleStops(new Set(buildLog.map((_, index) => index)));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number(entry.target.dataset.stop);
        setVisibleStops((current) => {
          if (current.has(index)) return current;
          const next = new Set(current);
          next.add(index);
          return next;
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -12% 0px' });

    stopRefs.current.forEach((stop) => stop && observer.observe(stop));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="journey" className={`${styles.journey} container section-padding`} aria-labelledby="journey-title">
      <div className={styles.header}>
        <div>
          <span className="section-kicker"><span>03</span><span>So far</span></span>
          <h2 id="journey-title" className="section-title">How I got here.</h2>
        </div>
        <p>A quick trip through the things I built, the teams I helped, and what I’m still figuring out.</p>
      </div>

      <div className={`${styles.route} ${isVisible ? styles.routeVisible : ''}`}>
        <div className={styles.routeLine} aria-hidden="true"><i /></div>
        <ol>
          {buildLog.map((entry, index) => (
            <li
              className={visibleStops.has(index) ? styles.stopVisible : ''}
              data-stop={index}
              key={`${entry.year}-${entry.title}`}
              ref={(node) => { stopRefs.current[index] = node; }}
            >
              <div className={styles.stop} aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <article>
                <div><time>{entry.year}</time><span>{entry.type}</span></div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
