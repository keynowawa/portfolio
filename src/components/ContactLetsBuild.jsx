import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import styles from './ContactLetsBuild.module.css';

export default function ContactLetsBuild() {
  return (
    <section id="contact" className={`${styles.contactSection} container section-padding`} aria-labelledby="contact-title">
      <div className={styles.contactStage}>
        <div className={styles.availability}>
          <span>Open to internships, freelance projects, and collaborations</span>
          <span>Based in the Philippines · available worldwide</span>
        </div>

        <div className={styles.heading}>
          <div>
            <span className="section-kicker"><span>06</span><span>Contact</span></span>
            <h2 id="contact-title">Tell me what you’re<br /><span>trying to make.</span></h2>
          </div>
          <div className={styles.intro}>
            <p>A role, a product, a collaboration, or even a half-formed idea. Send me the context and I’ll get back to you myself.</p>
            <a className={styles.resumeLink} href={profile.resumeUrl} download="FINAL-TAGLE-RESUME-2026.pdf"><Glyph name="download" size={16} /> Download my resume <small>PDF</small></a>
          </div>
        </div>

        <div className={styles.contactGrid}>
          <a className={`${styles.contactCard} ${styles.emailCard}`} href={`mailto:${profile.email}`}>
            <span className={styles.cardNumber}>01 / Email</span>
            <span className={styles.cardIcon}><Glyph name="mail" size={21} /></span>
            <div><h3>Send the first message.</h3><p>{profile.email}</p></div>
            <Glyph className={styles.arrow} name="arrowUpRight" size={18} />
          </a>

          <a className={styles.contactCard} href="/book-a-meeting/">
            <span className={styles.cardNumber}>02 / Conversation</span>
            <span className={styles.cardIcon}><Glyph name="calendar" size={21} /></span>
            <div><h3>Skip the back-and-forth.</h3><p>Pick a time for a focused 30-minute call.</p></div>
            <Glyph className={styles.arrow} name="arrowRight" size={18} />
          </a>

          <div className={`${styles.contactCard} ${styles.socialCard}`}>
            <span className={styles.cardNumber}>03 / Elsewhere</span>
            <div className={styles.socialHeading}><h3>See what I’m up to.</h3><p>Code, work, and whatever I’m learning next.</p></div>
            <nav aria-label="Social links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Glyph name="linkedin" size={18} /> LinkedIn <Glyph name="arrowUpRight" size={14} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Glyph name="github" size={18} /> GitHub <Glyph name="arrowUpRight" size={14} /></a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
