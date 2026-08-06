import { useState } from 'react';
import { projectCollections, projects } from '../content/portfolio';
import Glyph from './Glyph';
import styles from './ProjectGrid.module.css';

function ProjectVisual({ project, mediaItem }) {
  if (mediaItem?.image) {
    return (
      <div className={`${styles.visualShell} ${styles.imageVisual}`} style={{ '--project-accent': project.accent }}>
        <img src={mediaItem.image} alt={`${project.title}: ${mediaItem.label}`} />
      </div>
    );
  }

  if (project.visual === 'schedule') {
    return (
      <div className={`${styles.visualShell} ${styles.scheduleVisual}`} style={{ '--project-accent': project.accent }} aria-label="Stylized AnoSked interface placeholder" role="img">
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

  if (project.visual === 'verification') {
    return (
      <div className={`${styles.visualShell} ${styles.verifyVisual}`} style={{ '--project-accent': project.accent }} aria-label="Stylized VERA verification interface placeholder" role="img">
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
    <div className={`${styles.visualShell} ${styles.posVisual}`} style={{ '--project-accent': project.accent }} aria-label="Stylized DoubleTime point-of-sale interface placeholder" role="img">
      <div className={styles.visualTop}><span>DOUBLETIME / MATCHA POS</span><i>SYNCED</i></div>
      <div className={styles.posGrid}>
        <div className={styles.menuItems}><span>ORDER CHANNELS</span><b>Online<small>08</small></b><b>Direct<small>04</small></b></div>
        <div className={styles.orderTicket}><span>ORDER #00428</span><p>Matcha order</p><p>Add-ons recorded</p><div><small>STATUS</small><strong>PAID</strong></div></div>
      </div>
      <div className={styles.visualFoot}><span>ORDER TRACKING</span><span>EXPORT .XLSX</span></div>
    </div>
  );
}

function ArchiveProjectCard({ item, index }) {
  const fallbackMedia = [
    { label: 'System view', image: null },
    { label: 'Detail view', image: null },
  ];
  const media = item.media?.length ? item.media : fallbackMedia;
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const activeMedia = media[activeMediaIndex];

  const moveMedia = (direction) => {
    setActiveMediaIndex((current) => (current + direction + media.length) % media.length);
  };

  return (
    <article className={styles.archiveItem}>
      <div className={styles.archiveMedia}>
        {activeMedia.image ? (
          <img src={activeMedia.image} alt={`${item.title}: ${activeMedia.label}`} />
        ) : (
          <div className={styles.archivePlaceholder} role="img" aria-label={`${item.title} image placeholder for ${activeMedia.label}`}>
            <span>PROJECT FRAME / {String(index + 1).padStart(2, '0')}</span>
            <strong>{item.title}</strong>
            <small>{activeMedia.label}</small>
          </div>
        )}
        <div className={styles.archiveMediaControls}>
          <button type="button" onClick={() => moveMedia(-1)} aria-label={`Previous ${item.title} image`}>‹</button>
          <span>{String(activeMediaIndex + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => moveMedia(1)} aria-label={`Next ${item.title} image`}>›</button>
        </div>
      </div>
      <header><strong>{item.title}</strong><small>{item.status}</small></header>
      <div className={styles.archiveItemBody}>
        <p>{item.description}</p>
        <ul aria-label={`${item.title} technologies`}>
          {item.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {item.href && <a href={item.href} target="_blank" rel="noreferrer">{item.linkLabel} <Glyph name="arrowUpRight" size={15} /></a>}
      </div>
    </article>
  );
}

export default function ProjectGrid() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];
  const activeMedia = activeProject.media[activeMediaIndex];

  const chooseProject = (index) => {
    setActiveProjectIndex(index);
    setActiveMediaIndex(0);
  };

  const moveFeaturedMedia = (direction) => {
    setActiveMediaIndex((current) => (current + direction + activeProject.media.length) % activeProject.media.length);
  };

  return (
    <section id="projects" className={`${styles.projectsSection} container section-padding`} aria-labelledby="projects-title">
      <div className={styles.header}>
        <div>
          <span className="section-kicker"><span>02</span><span>Selected work</span></span>
          <h2 id="projects-title" className="section-title">Things I’ve actually built.</h2>
        </div>
        <p>Some solved a problem I kept running into. Others started as weird ideas I wanted to test. VERA is the one I’m proudest of.</p>
      </div>

      <nav className={styles.projectChapters} aria-label="Choose a featured project">
        {projects.map((project, index) => (
          <button
            aria-pressed={index === activeProjectIndex}
            className={index === activeProjectIndex ? styles.activeProject : ''}
            key={project.id}
            onClick={() => chooseProject(index)}
            type="button"
          >
            <span>{project.number}</span>
            <span><strong>{project.title}</strong><small>{project.eyebrow}</small></span>
          </button>
        ))}
      </nav>

      <article className={styles.projectShowcase} key={activeProject.id}>
        <div className={styles.featuredMedia}>
          <ProjectVisual project={activeProject} mediaItem={activeMedia} />
          <div className={styles.mediaCaption}><span>{activeMedia.label}</span><span>{String(activeMediaIndex + 1).padStart(2, '0')} / {String(activeProject.media.length).padStart(2, '0')}</span></div>
          <div className={styles.featuredMediaControls}>
            <button type="button" onClick={() => moveFeaturedMedia(-1)} aria-label={`Previous ${activeProject.title} image`}>‹</button>
            <button type="button" onClick={() => moveFeaturedMedia(1)} aria-label={`Next ${activeProject.title} image`}>›</button>
          </div>
        </div>

        <div className={styles.projectBrief}>
          <div className={styles.projectIdentity}>
            <span>{activeProject.number} / {activeProject.eyebrow}</span>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.role}</p>
          </div>
          <div className={styles.projectSummary}>
            <p>{activeProject.proof}</p>
            <ul className={styles.outputs} aria-label={`${activeProject.title} deliverables`}>
              {activeProject.outputs.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <ul className={styles.stack} aria-label={`${activeProject.title} technologies`}>
              {activeProject.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className={styles.projectActions}>
            <a href={activeProject.demo} target="_blank" rel="noreferrer">{activeProject.demoLabel} <Glyph name="arrowUpRight" size={16} /></a>
            <a href={activeProject.source} target="_blank" rel="noreferrer">Source <Glyph name="code" size={16} /></a>
          </div>
          <details className={styles.caseDetails}>
            <summary>okay, give me the nerdy details <span>+</span></summary>
            <dl>
              <div><dt>PROBLEM</dt><dd>{activeProject.problem}</dd></div>
              <div><dt>RESPONSE</dt><dd>{activeProject.solution}</dd></div>
            </dl>
          </details>
        </div>
      </article>

      <div className={styles.archive}>
        <div className={styles.archiveHeader}>
          <div>
            <span className="section-kicker"><span>02.1</span><span>More from the build folder</span></span>
            <h3>Not everything fits in three cards.</h3>
          </div>
          <p>Research, client work, games, data, and the early projects that taught me the hard way. Open anything that sounds interesting.</p>
        </div>

        <div className={styles.collectionGrid}>
          {projectCollections.map((collection, collectionIndex) => (
            <details className={styles.collection} key={collection.id}>
              <summary>
                <span className={styles.collectionNumber}>0{collectionIndex + 1}</span>
                <span className={styles.collectionName}><strong>{collection.label}</strong><small>{collection.summary}</small></span>
                <span className={styles.collectionCount}>{String(collection.items.length).padStart(2, '0')} projects</span>
                <i aria-hidden="true">+</i>
              </summary>
              <div className={styles.collectionItems}>
                {collection.items.map((item, itemIndex) => <ArchiveProjectCard item={item} index={itemIndex} key={item.title} />)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
