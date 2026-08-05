import { useEffect, useState } from 'react';
import styles from './HeroTerminal.module.css';

const comments = [
  "// hello world — I'm Kyann.",
  '// Computer Science student at Adamson University.',
  '// I build full-stack systems around real problems.',
  '// Curious about data, cryptography, and human-centered products.',
];

export default function HeroTerminal() {
  const [commentIndex, setCommentIndex] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setCommentText(comments[0]);
      return undefined;
    }

    const message = comments[commentIndex];
    let delay = deleting ? 46 : 38;
    if (!deleting && commentText === message) delay = 2600;
    if (deleting && commentText === '') delay = 420;

    const timer = window.setTimeout(() => {
      if (!deleting && commentText === message) {
        setDeleting(true);
        return;
      }
      if (deleting && commentText === '') {
        setDeleting(false);
        setCommentIndex((current) => (current + 1) % comments.length);
        return;
      }
      setCommentText(message.slice(0, commentText.length + (deleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [commentIndex, commentText, deleting]);

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.terminal}>
        <nav className={styles.terminalNav} aria-label="Portfolio navigation">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#journey">Story</a>
          <a href="#toolkit">Stack</a>
          <a href="#credentials">Certs</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.terminalMain}>
          <h1 id="hero-title">Kyann Tagle</h1>
          <p className={styles.role}>Data Science, Cryptography, Full Stack Developer</p>

          <div className={styles.commentTerminal} aria-hidden="true">
            <span className={styles.commentPrompt} aria-hidden="true">&gt;</span>
            <code>{commentText}</code>
            <i className={styles.commentCursor} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
