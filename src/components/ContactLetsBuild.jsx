import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import styles from './ContactLetsBuild.module.css';

export default function ContactLetsBuild() {
  return (
    <section id="contact" className={`${styles.contactSection} container section-padding`} aria-labelledby="contact-title">
      <div className={styles.contactWindow}>
        <div className={styles.windowBody}>
          <div className={styles.intro}>
            <span className="section-kicker"><span>06</span><span>Say hi</span></span>
            <h2 id="contact-title">Got an idea?<br /><span>Tell me about it.</span></h2>
            <p>Internship, side project, weird idea, or a problem that needs untangling. Send it over. I read everything myself.</p>
          </div>

          <div className={styles.actions}>
            <a className={styles.resumeDownload} href={profile.resumeUrl} download="Jel-Kyann-Tagle-Resume.pdf">
              <span className={styles.actionIcon}><Glyph name="download" size={18} /></span>
              <span className={styles.actionCopy}><strong>Download resume</strong><small>PDF file</small></span>
            </a>

            <a className={styles.emailAction} href={`mailto:${profile.email}`}>
              <span className={styles.actionIcon}><Glyph name="mail" size={18} /></span>
              <span className={styles.actionCopy}><small>Start a conversation</small><strong>{profile.email}</strong></span>
            </a>
          </div>
        </div>

        <nav className={styles.channels} aria-label="More ways to connect">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className={styles.channelIcon}><Glyph name="linkedin" /></span>
            <span><strong>LinkedIn</strong><small>Let’s connect</small></span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <span className={styles.channelIcon}><Glyph name="github" /></span>
            <span><strong>GitHub</strong><small>@{profile.handle}</small></span>
          </a>
        </nav>

      </div>
    </section>
  );
}
