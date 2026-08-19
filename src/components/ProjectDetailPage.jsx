import Glyph from './Glyph';
import MasterFooter from './MasterFooter';
import ProjectVisual from './ProjectVisual';
import { allProjects, findProject, projectPageHref } from '../content/allProjects';
import styles from './ProjectDetailPage.module.css';

export default function ProjectDetailPage({ slug }) {
  const project = findProject(slug);

  if (!project) {
    return (
      <main className={styles.notFound}>
        <span>404 / PROJECT NOT FOUND</span>
        <h1>That build is not in the folder.</h1>
        <a href="/projects/">Browse all projects <Glyph name="arrowRight" size={17} /></a>
      </main>
    );
  }

  const currentIndex = allProjects.findIndex((item) => item.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const gallery = project.gallery || [];

  return (
    <>
      <main id="page-top" className={styles.page}>
        <header className={styles.topbar}>
          <a className={styles.brand} href="/">Kyann Tagle</a>
          <div className={styles.topActions}>
            <a className={styles.meeting} href="/book-a-meeting/">Meet</a>
            <a className={styles.back} href="/projects/"><span aria-hidden="true">←</span> All projects</a>
          </div>
        </header>

        <article className={styles.caseStudy}>
          <header className={styles.hero}>
            <div className={styles.eyebrow}><span>{project.category}</span><span>{project.year}</span></div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <div className={styles.heroMeta}>
              <dl>
                <div><dt>Role</dt><dd>{project.role}</dd></div>
                <div><dt>Type</dt><dd>{project.type}</dd></div>
              </dl>
              <div className={styles.heroActions}>
                {project.website && <a className={styles.primaryAction} href={project.website} {...(project.website.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>Visit website <Glyph name="arrowUpRight" size={17} /></a>}
                {project.source && <a href={project.source} target="_blank" rel="noreferrer">View source <Glyph name="github" size={17} /></a>}
              </div>
            </div>
          </header>

          <div className={styles.heroVisual}><ProjectVisual project={project} /></div>

          <section className={styles.story} aria-label="Project case study">
            <article><span>01 / Problem</span><h2>What needed fixing</h2><p>{project.problem}</p></article>
            <article><span>02 / Build</span><h2>What I made</h2><p>{project.build}</p></article>
            <article><span>03 / Result</span><h2>Where it landed</h2><p>{project.outcome}</p></article>
          </section>

          <section className={styles.stack} aria-labelledby="project-stack-title">
            <span>Under the hood</span>
            <h2 id="project-stack-title">Built with</h2>
            <ul>{project.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </section>

          <section className={styles.gallery} aria-labelledby="project-gallery-title">
            <header><div><span>Product gallery</span><h2 id="project-gallery-title">A closer look.</h2></div><p>{gallery.length ? `${gallery.length} project views` : 'Images will be added here as the project archive is prepared.'}</p></header>
            <div className={styles.galleryGrid} data-count={gallery.length || 2}>
              {gallery.length ? gallery.map((item, index) => (
                <figure key={item.image}>
                  <img src={item.image} alt={`${project.title}: ${item.caption}`} loading="lazy" decoding="async" />
                  <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{item.caption}</figcaption>
                </figure>
              )) : [1, 2].map((index) => (
                <figure className={styles.galleryPlaceholder} key={index}>
                  <ProjectVisual project={{ ...project, thumbnail: null }} />
                  <figcaption><span>0{index}</span>Project image placeholder</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <a className={styles.nextProject} href={projectPageHref(nextProject.id)}>
            <span>Next project</span><strong>{nextProject.title}</strong><Glyph name="arrowRight" size={24} />
          </a>
        </article>
      </main>
      <MasterFooter />
    </>
  );
}
