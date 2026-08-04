import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import styles from './ContactLetsBuild.module.css';

export default function ContactLetsBuild() {
  return (
    <section id="contact" className={`${styles.contactSection} container section-padding`} aria-labelledby="contact-title">
      <div className={styles.console}>
        <div className={styles.consoleTop}>
          <span>MY INBOX / OPEN</span>
          <span>YES, I ACTUALLY REPLY</span>
        </div>

        <div className={styles.contactGrid}>
          <div>
            <span className="section-kicker">06 / SAY HI</span>
            <h2 id="contact-title">Want to make<br />something cool<span>?</span></h2>
          </div>

          <div className={styles.invitation}>
            <p>Internship, project, weird idea, or just a good conversation—I’m always up for hearing what you’re working on.</p>
            <a className={styles.emailLink} href={`mailto:${profile.email}`}>
              <span>{profile.email}</span><Glyph name="arrowUpRight" size={24} />
            </a>
          </div>
        </div>

        <nav className={styles.contactNav} aria-label="Contact links">
          <a href={`mailto:${profile.email}`}><Glyph name="mail" /><span>Email</span><small>Direct message</small></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Glyph name="briefcase" /><span>LinkedIn</span><small>Professional profile</small></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Glyph name="code" /><span>GitHub</span><small>Public work</small></a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer"><Glyph name="download" /><span>CV</span><small>Download PDF</small></a>
        </nav>
      </div>
    </section>
  );
}
