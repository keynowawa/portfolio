import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import profilePortrait from '../assets/profile.png';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section id="about" className={`${styles.aboutSection} container section-padding`} aria-labelledby="about-title">
      <div className={styles.headingBlock}>
        <span className="section-kicker"><span>01</span><span>A little more</span></span>
        <h2 id="about-title" className="section-title">I’m Kyann. I learn best by making things work.</h2>
      </div>

      <div className={styles.editorialGrid}>
        <article className={styles.profileModule} aria-label="Kyann Tagle profile">
          <div className={styles.portraitStage}>
            <img src={profilePortrait} alt={`Portrait of ${profile.fullName}`} />
          </div>

          <div className={styles.profileDetails}>
            <div className={styles.profileSummary}>
              <p>{profile.role}</p>
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
          <p className={styles.lede}>I’m a Computer Science student from Manila and Cavite who enjoys the moment when a messy idea finally starts making sense.</p>
          <p>If I don’t understand something, I keep pulling at the thread until I do. I read, ask questions, break things, and rebuild them. That curiosity keeps taking me toward full-stack development, data, privacy, and interfaces that don’t make people work harder than they need to.</p>
          <p>It has also turned into real products: AnoSked simplifies class planning, VERA explores more private ways to trust online reviews, and DoubleTime keeps storefront and POS orders working together. Each one taught me something different about turning a problem into a system someone else can actually use.</p>
          <p>Code isn’t the whole story. I’ve led programs for 100+ students and managed organization budgets where every peso had to be explained. Those experiences taught me to listen first, communicate clearly, and stay useful when the plan changes.</p>
        </div>
      </div>
    </section>
  );
}
