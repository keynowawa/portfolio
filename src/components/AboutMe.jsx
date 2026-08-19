import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import profilePortrait from '../assets/profile.png';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section id="about" className={`${styles.aboutSection} container section-padding`} aria-labelledby="about-title">
      <div className={styles.headingBlock}>
        <span className="section-kicker"><span>01</span><span>A little more</span></span>
        <h2 id="about-title" className="section-title">Curious by default.<br />Builder by habit.</h2>
      </div>

      <div className={styles.editorialGrid}>
        <article className={styles.profileModule} aria-label="Kyann Tagle profile">
          <div className={styles.portraitStage}>
            <img src={profilePortrait} alt={`Portrait of ${profile.fullName}`} />
          </div>

          <div className={styles.profileDetails}>
            <div className={styles.profileSummary}>
              <p>Quiet at first. Curious always. Serious about finishing what I start.</p>
            </div>

            <div className={styles.profileMeta} aria-label="Profile details">
              <span>{profile.location}</span>
              <span>Adamson University</span>
            </div>

            <div className={styles.profileActions}>
              <a className={styles.resumeAction} href={profile.resumeUrl} target="_blank" rel="noreferrer"><Glyph name="resume" size={16} /> Resume</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Glyph name="github" size={16} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Glyph name="linkedin" size={16} /> LinkedIn</a>
            </div>
          </div>
        </article>

        <div className={styles.story}>
          <p className={styles.lede}>I’m Kyann, a fourth-year Computer Science student from Manila and Cavite. I listen before I jump in, learn fastest by making things, and tend to stay with a problem until it works. I’m looking for an internship or junior role where I can take ownership, keep learning, and help a thoughtful team ship useful work.</p>
          <dl className={styles.evidence} aria-label="Selected facts">
            <div><dt>900+</dt><dd>community members reached</dd></div>
            <div><dt>20</dt><dd>certificates earned</dd></div>
            <div><dt>12+</dt><dd>projects built</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
