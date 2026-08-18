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
              <p>Computer Science student building for the web, data, and privacy.</p>
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
          <p className={styles.lede}>I’m Kyann, a fourth-year Computer Science student from Manila and Cavite. I build full-stack products, small games, and privacy-focused experiments because making something real is how I understand it best. I’m happiest turning a rough idea into an interface people can use, whether that means designing the flow, wiring the data, or staying with the bug until it finally gives up.</p>
          <p className={styles.note}>Currently exploring zero-knowledge proofs, cybersecurity, and data science.</p>
        </div>
      </div>
    </section>
  );
}
