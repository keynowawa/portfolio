import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section id="about" className={`${styles.aboutSection} container section-padding`} aria-labelledby="about-title">
      <div className={styles.headingBlock}>
        <span className="section-kicker">01 / A LITTLE MORE</span>
        <h2 id="about-title" className="section-title">I can’t leave a clunky<br />process alone.</h2>
      </div>

      <div className={styles.editorialGrid}>
        <article className={styles.profileModule} aria-label="Kyann Tagle profile">
          <div className={styles.portraitFrame} aria-label="Portrait placeholder">
            <span>KT</span>
            <small>PORTRAIT / COMING SOON</small>
          </div>

          <div className={styles.profileHeading}>
            <div><h3>{profile.fullName}</h3><p>{profile.role}</p></div>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer"><Glyph name="download" size={16} /> Resume</a>
          </div>

          <dl className={styles.profileFacts}>
            <div><dt>BASED IN</dt><dd>{profile.location}</dd></div>
            <div><dt>STUDYING</dt><dd>{profile.education}</dd></div>
            <div><dt>OPEN TO</dt><dd>{profile.status.replace('Open to ', '')}</dd></div>
          </dl>

          <div className={styles.profileLinks}>
            <a href={profile.github} target="_blank" rel="noreferrer"><Glyph name="code" size={17} />GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Glyph name="briefcase" size={17} />LinkedIn</a>
            <a href={`mailto:${profile.email}`}><Glyph name="mail" size={17} />Email</a>
          </div>
        </article>

        <div className={styles.story}>
          <p className={styles.lede}>If something feels unnecessarily difficult, my first instinct is usually: “I could build a better version of this.”</p>
          <p>That instinct became a student planner that keeps data local, a food business system that works across devices, and a review tool built around privacy. I’m studying Computer Science at Adamson University, but most of my learning happens while I’m trying to make an idea actually work.</p>
          <p>I also like the people side of building. I’ve led programs for 100+ students, managed organization finances, and worked with teams under real deadlines. Turns out good software and good teamwork have the same starting point: listen first.</p>
          <div className={styles.principles}><span>make it useful</span><span>ask why</span><span>finish the thing</span></div>
        </div>
      </div>
    </section>
  );
}
