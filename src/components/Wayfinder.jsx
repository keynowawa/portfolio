import { useEffect, useState } from 'react';
import styles from './Wayfinder.module.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'journey', label: 'Story' },
  { id: 'toolkit', label: 'Stack' },
  { id: 'credentials', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export default function Wayfinder() {
  const [activeSection, setActiveSection] = useState('about');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.65);
    const observer = new IntersectionObserver((entries) => {
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
    };
  }, []);

  return (
    <nav className={`${styles.wayfinder} ${visible ? styles.visible : ''}`} aria-label="Page sections">
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`} aria-current={activeSection === section.id ? 'location' : undefined}>
          <span>{section.label}</span><i />
        </a>
      ))}
    </nav>
  );
}
