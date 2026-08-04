import { experiments, projects } from '../content/portfolio';
import Glyph from './Glyph';
import styles from './ProjectGrid.module.css';

function ProjectVisual({ type, accent }) {
  if (type === 'schedule') {
    return (
      <div className={`${styles.visualShell} ${styles.scheduleVisual}`} style={{ '--project-accent': accent }} aria-hidden="true">
        <div className={styles.visualTop}><span>ANOSKED / WEEK 31</span><i>LOCAL</i></div>
        <div className={styles.weekDays}><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div>
        <div className={styles.scheduleGrid}>
          <b className={styles.classOne}>CS 321<small>08:00</small></b>
          <b className={styles.classTwo}>DATA<small>10:00</small></b>
          <b className={styles.classThree}>LAB<small>13:00</small></b>
        </div>
        <div className={styles.visualFoot}><span>OFFLINE READY</span><span>EXPORT .ICS</span></div>
      </div>
    );
  }

  if (type === 'verification') {
    return (
      <div className={`${styles.visualShell} ${styles.verifyVisual}`} style={{ '--project-accent': accent }} aria-hidden="true">
        <div className={styles.visualTop}><span>VERA / PROOF CONSOLE</span><i>VALID</i></div>
        <div className={styles.proofCore}>
          <div className={styles.proofRing}><strong>✓</strong><span>PURCHASE VERIFIED</span></div>
          <div className={styles.proofReadout}><span>PERSONAL DATA</span><b>NOT DISCLOSED</b><span>REVIEW</span><b>VERIFIED</b></div>
        </div>
        <div className={styles.visualFoot}><span>PRIVACY PROOF</span><span>CHROME MV3</span></div>
      </div>
    );
  }

  return (
    <div className={`${styles.visualShell} ${styles.posVisual}`} style={{ '--project-accent': accent }} aria-hidden="true">
      <div className={styles.visualTop}><span>DOUBLETIME / POS—02</span><i>SYNCED</i></div>
      <div className={styles.posGrid}>
        <div className={styles.menuItems}><span>BEST SELLERS</span><b>Double Burger<small>₱189</small></b><b>Loaded Fries<small>₱129</small></b></div>
        <div className={styles.orderTicket}><span>ORDER #00428</span><p>2 × Double Burger</p><p>1 × Loaded Fries</p><div><small>TOTAL</small><strong>₱507</strong></div></div>
      </div>
      <div className={styles.visualFoot}><span>REALTIME</span><span>OFFLINE QUEUE</span></div>
    </div>
  );
}

export default function ProjectGrid() {
  return (
    <section id="projects" className={`${styles.projectsSection} container section-padding`} aria-labelledby="projects-title">
      <div className={styles.header}>
        <div>
          <span className="section-kicker">02 / STUFF I’VE BUILT</span>
          <h2 id="projects-title" className="section-title">Pick something<br />that looks fun.</h2>
        </div>
        <p>You can get the idea in a few seconds. If one catches your eye, open the notes and nerd out with me.</p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.id}>
            <ProjectVisual type={project.visual} accent={project.accent} />
            <div className={styles.cardBody}>
              <div className={styles.projectIndex}><span>{project.number}</span><span>{project.eyebrow}</span></div>
              <h3>{project.title}</h3>
              <p className={styles.role}>{project.role}</p>
              <p className={styles.proof}>{project.proof}</p>
              <ul className={styles.stack} aria-label={`${project.title} technologies`}>
                {project.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>

              <div className={styles.links}>
                <a href={project.demo} target="_blank" rel="noreferrer">Open <Glyph name="arrowUpRight" size={16} /></a>
                <a href={project.source} target="_blank" rel="noreferrer">Source <Glyph name="code" size={16} /></a>
              </div>

              <details className={styles.caseDetails}>
                <summary>okay, give me the nerdy details <span>+</span></summary>
                <dl>
                  <div><dt>PROBLEM</dt><dd>{project.problem}</dd></div>
                  <div><dt>RESPONSE</dt><dd>{project.solution}</dd></div>
                </dl>
              </details>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.experiments}>
        <div><span className="mono-label">SIDE QUESTS / 03</span><h3>Things I made because they sounded fun.</h3></div>
        <div className={styles.experimentList}>
          {experiments.map((experiment, index) => (
            <a href={experiment.href} target="_blank" rel="noreferrer" key={experiment.title}>
              <span>0{index + 1}</span><strong>{experiment.title}</strong><small>{experiment.stack.join(' · ')}</small><Glyph name="arrowUpRight" size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
