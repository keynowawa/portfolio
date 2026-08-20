import Glyph from './Glyph';
import { usePortfolioContent } from '../context/usePortfolioContent';
import styles from './ContactLetsBuild.module.css';

export default function ContactLetsBuild() {
  const { content } = usePortfolioContent();
  const { profile, contact } = content.site;
  return (
    <section id="contact" className={`${styles.contactSection} container section-padding`} aria-labelledby="contact-title">
      <div className={styles.contactStage}>
        <div className={styles.availability}>
          <strong>{contact.availability}</strong>
          <span>{contact.locationLine}</span>
        </div>

        <div className={styles.contactLayout}>
          <header className={styles.pitch}>
            <span className="section-kicker"><span>06</span><span>Contact</span></span>
            <h2 id="contact-title">{contact.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h2>
            <p>{contact.body}</p>
          </header>

          <div className={styles.actionPanel}>
            <a className={styles.resumeFeature} href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <span className={styles.resumeIcon}><Glyph name="resume" size={22} /></span>
              <span className={styles.resumeCopy}><small>Resume / PDF</small><strong>Open my resume</strong><em>View, print, or download it from your browser.</em></span>
              <Glyph className={styles.resumeArrow} name="arrowUpRight" size={20} />
            </a>

            <div className={styles.routeList}>
              <a href={`mailto:${profile.email}`}>
                <span className={styles.routeIcon}><Glyph name="mail" size={20} /></span>
                <span><small>Email</small><strong>{profile.email}</strong></span>
                <Glyph name="arrowUpRight" size={18} />
              </a>
              <a href="/book-a-meeting/">
                <span className={styles.routeIcon}><Glyph name="calendar" size={20} /></span>
                <span><small>30-minute conversation</small><strong>Pick a time that works</strong></span>
                <Glyph name="arrowRight" size={18} />
              </a>
            </div>

            <div className={styles.socialRow}>
              <nav aria-label="Social links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Glyph name="linkedin" size={17} /> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Glyph name="github" size={17} /> GitHub</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
