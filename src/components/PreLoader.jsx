import { useEffect, useState } from 'react';
import styles from './PreLoader.module.css';

const bootLines = [
  '[00:00.114] boot::kyann.tagle — profile ready',
  '[00:00.328] launch::portfolio — welcome',
];

export default function PreLoader({ onComplete }) {
  const [phase, setPhase] = useState('typing');
  const [text, setText] = useState('');

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.history.scrollRestoration = previousRestoration;
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      onComplete();
      return undefined;
    }

    const fullText = bootLines.join('\n');
    let character = 0;
    let exitTimer;
    const typingTimer = window.setInterval(() => {
      character += 3;
      setText(fullText.slice(0, character));
      if (character >= fullText.length) {
        window.clearInterval(typingTimer);
        exitTimer = window.setTimeout(() => setPhase('exit'), 240);
      }
    }, 18);

    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(exitTimer);
    };
  }, [onComplete]);

  useEffect(() => {
    if (phase !== 'exit') return undefined;
    const completeTimer = window.setTimeout(onComplete, 220);
    return () => window.clearTimeout(completeTimer);
  }, [onComplete, phase]);

  useEffect(() => {
    const skip = () => onComplete();
    window.addEventListener('click', skip, { once: true });
    window.addEventListener('touchstart', skip, { once: true, passive: true });
    window.addEventListener('wheel', skip, { once: true, passive: true });
    window.addEventListener('keydown', skip, { once: true });
    return () => {
      window.removeEventListener('click', skip);
      window.removeEventListener('touchstart', skip);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('keydown', skip);
    };
  }, [onComplete]);

  return (
    <div className={`${styles.loader} ${phase === 'exit' ? styles.exit : ''}`} role="status" aria-label="Loading Kyann Tagle's portfolio">
      <div className={styles.window}>
        <pre>{text}<i aria-hidden="true" /></pre>
      </div>
      <span className={styles.skip}>click, tap, or scroll to skip</span>
    </div>
  );
}
