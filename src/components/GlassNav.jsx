import { useEffect, useState } from 'react';
import styles from './GlassNav.module.css';

const links = [
  ['#about', 'About'],
  ['#projects', 'Projects'],
  ['#journey', 'Story'],
  ['#credentials', 'Certs'],
  ['#contact', 'Contact'],
];

export default function GlassNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('about');

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-36% 0px -56% 0px' });

    ['about', 'projects', 'journey', 'toolkit', 'credentials', 'contact'].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`${styles.shell} ${visible ? styles.visible : ''}`} aria-hidden={!visible}>
      <a className={styles.brand} href="#hero"><span>Kyann Tagle</span><i aria-hidden="true">KT</i></a>
      <nav aria-label="Primary navigation">
        {links.map(([href, label]) => (
          <a className={active === href.slice(1) ? styles.active : ''} href={href} key={href} aria-current={active === href.slice(1) ? 'location' : undefined}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
