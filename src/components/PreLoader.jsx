import { useEffect, useState } from 'react';
import styles from './PreLoader.module.css';

const bootLines = [
  '[00:00:00.114] boot::portfolio_kernel — runtime modules verified ........ OK',
  '[00:00:00.328] load::kyann_tagle.profile — identity graph mounted ...... OK',
  '[00:00:00.641] index::projects + story + credentials — records ready ... OK',
  '[00:00:00.902] render::interface — handing control to portfolio .... READY',
];

const streamLines = [
  '0x7F11  compile profile.graph',
  '0x91A4  resolve project.index',
  '0x0C27  hydrate story.timeline',
  '0xE318  mount interaction.layer',
  '0x4B02  connect human.context',
  '0x2026  launch portfolio',
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
    let streamTimer;
    const typingTimer = window.setInterval(() => {
      character += 2;
      setText(fullText.slice(0, character));
      if (character >= fullText.length) {
        window.clearInterval(typingTimer);
        streamTimer = window.setTimeout(() => setPhase('stream'), 90);
      }
    }, 16);

    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(streamTimer);
    };
  }, [onComplete]);

  useEffect(() => {
    if (phase !== 'stream') return undefined;
    const exitTimer = window.setTimeout(() => setPhase('exit'), 720);
    return () => window.clearTimeout(exitTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'exit') return undefined;
    const completeTimer = window.setTimeout(onComplete, 260);
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
        {phase === 'typing' ? (
          <pre>{text}<i aria-hidden="true" /></pre>
        ) : (
          <div className={styles.stream} aria-hidden="true">
            {[...streamLines, ...streamLines, ...streamLines].map((line, index) => <code key={`${line}-${index}`}>{line}</code>)}
          </div>
        )}
      </div>
      <span className={styles.skip}>click, tap, or scroll to skip</span>
    </div>
  );
}
