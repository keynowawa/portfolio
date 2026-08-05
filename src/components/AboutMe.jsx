import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import profilePortrait from '../assets/profile.png';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section id="about" className={`${styles.aboutSection} container section-padding`} aria-labelledby="about-title">
      <div className={styles.headingBlock}>
        <span className="section-kicker">01 / A LITTLE MORE</span>
        <h2 id="about-title" className="section-title">It usually starts with:<br />“Why is this so annoying?”</h2>
      </div>

      <div className={styles.editorialGrid}>
        <article className={styles.profileModule} aria-label="Kyann Tagle profile">
          <div className={styles.portraitStage}>
            <img src={profilePortrait} alt={`Portrait of ${profile.fullName}`} />
          </div>

          <div className={styles.profileDetails}>
            <div className={styles.profileSummary}>
              <p>{profile.role}</p>
              <span>Usually somewhere between a messy problem, too many tabs, and a working prototype.</span>
            </div>

            <div className={styles.profileMeta} aria-label="Profile details">
              <span>{profile.location}</span>
              <span>BS Computer Science · Adamson University</span>
            </div>

            <div className={styles.profileActions}>
              <a className={styles.resumeAction} href={profile.resumeUrl} target="_blank" rel="noreferrer"><Glyph name="download" size={16} /> Résumé</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Glyph name="code" size={16} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Glyph name="briefcase" size={16} /> LinkedIn</a>
            </div>
          </div>
        </article>

        <div className={styles.story}>
          <p className={styles.lede}>Hi, I’m Kyann. I turn “there has to be a better way” into working software.</p>
          <p>I’m drawn to the space where data, privacy, and everyday usability meet. That curiosity has led me to build a local-first class planner, a privacy-aware verification tool, and a POS system designed to keep working across multiple devices—not just polished demos, but tools shaped around how people actually use them.</p>
          <p>I study Computer Science at Adamson University, but code is only half of how I work. Leading programs for 100+ students, managing organization finances, and building with teams under real deadlines taught me to ask good questions, stay calm when plans change, and understand the person on the other side before deciding what to make.</p>
        </div>
      </div>
    </section>
  );
}
