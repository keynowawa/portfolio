import { profile } from '../content/portfolio';
import Glyph from './Glyph';
import styles from './MasterFooter.module.css';

const index = [
  ['01', 'About', '#about'],
  ['02', 'Selected work', '#projects'],
  ['03', 'Build log', '#journey'],
  ['04', 'Toolkit', '#toolkit'],
  ['05', 'Credentials', '#credentials'],
];

export default function MasterFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.signature}>
          <span className={styles.mark}>KT</span>
          <div>
            <strong>{profile.fullName}</strong>
            <span>Product-minded developer · Manila</span>
          </div>
        </div>

        <nav className={styles.index} aria-label="Footer index">
          {index.map(([number, label, href]) => (
            <a key={href} href={href}>
              <span>{number}</span>{label}
            </a>
          ))}
        </nav>

        <div className={styles.external}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Glyph name="arrowUpRight" size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Glyph name="arrowUpRight" size={15} />
          </a>
          <a href={`mailto:${profile.email}`}>Email <Glyph name="arrowUpRight" size={15} /></a>
        </div>

        <div className={styles.closing}>
          <span>© 2026 Kyann Tagle</span>
          <span>Built in Manila · Version 2026.08</span>
          <a href="#hero">Return to entry point ↑</a>
        </div>
      </div>
    </footer>
  );
}
