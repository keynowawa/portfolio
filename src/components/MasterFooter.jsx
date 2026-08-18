import { profile } from '../content/portfolio';
import Glyph from './Glyph';
import profilePortrait from '../assets/profile.png';
import styles from './MasterFooter.module.css';

const index = [
  ['01', 'About', '#about'],
  ['02', 'Projects', '#projects'],
  ['03', 'Experience', '#journey'],
  ['04', 'Stack', '#toolkit'],
  ['05', 'Credentials', '#credentials'],
];

export default function MasterFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.signature}>
          <span className={styles.portrait}>
            <img src={profilePortrait} alt="" />
          </span>
          <div className={styles.identity}>
            <strong>{profile.fullName}</strong>
            <span>Full-stack developer</span>
            <small>Manila &amp; Cavite, Philippines</small>
          </div>
        </div>

        <nav className={styles.index} aria-label="Footer index">
          {index.map(([number, label, href]) => (
            <a key={href} href={href}>
              <span className={styles.indexNumber}>{number}</span>
              <span className={styles.indexLabel}>{label}</span>
            </a>
          ))}
        </nav>

        <div className={styles.external}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Glyph name="github" size={18} /><span>GitHub</span><Glyph name="arrowUpRight" size={14} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Glyph name="linkedin" size={18} /><span>LinkedIn</span><Glyph name="arrowUpRight" size={14} />
          </a>
          <a href={`mailto:${profile.email}`}><Glyph name="mail" size={18} /><span>Email</span><Glyph name="arrowUpRight" size={14} /></a>
        </div>

        <div className={styles.closing}>
          <span>© 2026 Jel Kyann J. Tagle</span>
          <span>Manila &amp; Cavite, Philippines</span>
          <a href="#hero">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
