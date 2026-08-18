import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import styles from './ContactLetsBuild.module.css';

export default function ContactLetsBuild() {
  return (
    <section id="contact" className={`${styles.contactSection} container section-padding`} aria-labelledby="contact-title">
      <div className={styles.availability}>
        <span><i aria-hidden="true" /> Available for internships, freelance work, and collaborations</span>
        <span>Philippines / working worldwide</span>
      </div>

      <div className={styles.heading}>
        <div>
          <span className="section-kicker"><span>06</span><span>Contact</span></span>
          <h2 id="contact-title">Let’s build<br /><span>something worth using.</span></h2>
        </div>
        <div className={styles.intro}>
          <p>Have a product idea, a role I might fit, or a problem that needs a fresh set of eyes? Tell me where you want to go.</p>
          <a className={styles.resumeLink} href={profile.resumeUrl} download="FINAL-TAGLE-RESUME-2026.pdf"><Glyph name="download" size={16} /> Download resume <small>PDF</small></a>
        </div>
      </div>

      <div className={styles.contactGrid}>
        <a className={`${styles.contactCard} ${styles.emailCard}`} href={`mailto:${profile.email}`}>
          <span className={styles.cardNumber}>01 / Email</span>
          <span className={styles.cardIcon}><Glyph name="mail" size={21} /></span>
          <div><h3>Start with an email.</h3><p>{profile.email}</p></div>
          <Glyph className={styles.arrow} name="arrowUpRight" size={18} />
        </a>

        <a className={styles.contactCard} href="/book-a-meeting/">
          <span className={styles.cardNumber}>02 / Conversation</span>
          <span className={styles.cardIcon}><Glyph name="calendar" size={21} /></span>
          <div><h3>Book a focused call.</h3><p>Choose a time and let’s talk through it.</p></div>
          <Glyph className={styles.arrow} name="arrowRight" size={18} />
        </a>

        <div className={`${styles.contactCard} ${styles.socialCard}`}>
          <span className={styles.cardNumber}>03 / Socials</span>
          <div className={styles.socialHeading}><h3>Stay connected.</h3><p>Code, work, and the occasional update.</p></div>
          <nav aria-label="Social links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Glyph name="linkedin" size={18} /> LinkedIn <Glyph name="arrowUpRight" size={14} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Glyph name="github" size={18} /> GitHub <Glyph name="arrowUpRight" size={14} /></a>
          </nav>
        </div>
      </div>
    </section>
  );
}
