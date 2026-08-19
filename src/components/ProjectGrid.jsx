import Glyph from './Glyph';
import { showcaseProjects } from '../content/showcaseProjects';
import { projectPageHref, projectReelItems } from '../content/allProjects';
import styles from './ProjectGrid.module.css';

function ProjectArtwork({ project, compact = false }) {
  if (project.image) {
    return <img className={styles.projectImage} src={project.image} alt={`${project.title} interface`} loading="lazy" decoding="async" />;
  }

  return (
    <div className={`${styles.artwork} ${styles[project.visual]} ${compact ? styles.compact : ''}`} role="img" aria-label={`${project.title} interface preview placeholder`}>
      <div className={styles.appBar}>
        <span><i /><i /><i /></span>
        <small>{project.title}</small>
        <b>{project.type}</b>
      </div>
      <div className={styles.artBody}>
        <div className={styles.artSidebar}><i /><i /><i /><i /></div>
        <div className={styles.artContent}>
          <div className={styles.artHeadline}><span /><span /></div>
          <div className={styles.artCards}><i /><i /><i /></div>
          <div className={styles.artRows}><span /><span /><span /><span /></div>
        </div>
      </div>
      <strong className={styles.artMark}>{project.id === 'twinup' ? '2 + 2' : project.id === 'vera' ? '✓' : project.id === 'metro' ? 'MNL' : project.title.slice(0, 2)}</strong>
    </div>
  );
}

function ScreenshotReel() {
  const reelItems = [...projectReelItems, ...projectReelItems];
  return (
    <div className={styles.reel} aria-hidden="true">
      <div className={styles.reelTrack}>
        {reelItems.map((item, index) => (
          <div className={styles.reelFrame} data-fit={item.fit} key={`${item.id}-${index}`}>
            {item.fit === 'contain' && <img className={styles.reelBackdrop} src={item.image} alt="" loading="lazy" decoding="async" />}
            <img className={styles.reelImage} src={item.image} alt="" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  return (
    <section id="projects" className={styles.projectsSection} aria-labelledby="projects-title">
      <ScreenshotReel />

      <div className="container section-padding">
        <header className={styles.header}>
          <div>
            <span className="section-kicker"><span>02</span><span>Selected work</span></span>
            <h2 id="projects-title" className="section-title">Ideas, now working.</h2>
          </div>
          <a className={styles.allProjects} href="/projects/">All projects <Glyph name="arrowRight" size={16} /></a>
        </header>

        <div className={styles.grid}>
          {showcaseProjects.map((project) => {
            const hasWebsite = project.href?.startsWith('http');
            const detailHref = projectPageHref(project.detailId);

            return (
              <article className={styles.projectCard} key={project.id}>
                <div className={styles.media}>
                  <ProjectArtwork project={project} />
                  <div className={styles.projectActions}>
                    {hasWebsite && (
                      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} website`} title="Visit website">
                        <Glyph name="arrowUpRight" size={19} />
                      </a>
                    )}
                    <a className={styles.viewProject} href={detailHref} aria-label={`View ${project.title} project`} title="View project">
                      <Glyph name="arrowRight" size={19} />
                    </a>
                  </div>
                </div>
                <div className={styles.meta}>
                  <div><a href={detailHref}><h3>{project.title}</h3></a><p>{project.description}</p></div>
                  <time dateTime={project.year}>{project.year}</time>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
