import Glyph from './Glyph';
import profilePortrait from '../assets/profile.png';
import { usePortfolioContent } from '../context/usePortfolioContent';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  const { content } = usePortfolioContent();
  const { profile, about } = content.site;
  return (
    <section id="about" className={`${styles.aboutSection} container section-padding`} aria-labelledby="about-title">
      <div className={styles.headingBlock}>
        <span className="section-kicker"><span>01</span><span>{about.kicker}</span></span>
        <h2 id="about-title" className="section-title">{about.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h2>
      </div>

      <div className={styles.editorialGrid}>
        <article className={styles.profileModule} aria-label="Kyann Tagle profile">
          <div className={styles.portraitStage}>
            <img src={profilePortrait} alt={`Portrait of ${profile.fullName}`} />
          </div>

          <div className={styles.profileDetails}>
            <div className={styles.profileSummary}>
              <p>{about.cardSummary}</p>
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
          <p className={styles.lede}>{about.body}</p>
          <dl className={styles.evidence} aria-label="Selected facts">
            {about.kpis.map((kpi) => <div key={kpi.label}><dt>{kpi.value}</dt><dd>{kpi.label}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
}
