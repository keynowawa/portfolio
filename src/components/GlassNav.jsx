import { useEffect, useState } from 'react';
import styles from './GlassNav.module.css';

const links = [
  ['#about', 'About'],
  ['#projects', 'Projects'],
  ['#journey', 'Work'],
  ['#contact', 'Contact'],
];

export default function GlassNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > Math.max(360, window.innerHeight * 0.7));
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className={`${styles.shell} ${visible ? styles.visible : ''}`} aria-hidden={!visible}>
      <a className={styles.brand} href="#hero">Kyann Tagle</a>
      <nav aria-label="Primary navigation">
        {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
      </nav>
    </header>
  );
}
