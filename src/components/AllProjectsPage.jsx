import { useMemo, useState } from 'react';
import Glyph from './Glyph';
import MasterFooter from './MasterFooter';
import ProjectVisual from './ProjectVisual';
import { projectPageHref } from '../content/allProjects';
import { usePortfolioContent } from '../context/usePortfolioContent';
import styles from './AllProjectsPage.module.css';

export default function AllProjectsPage() {
  const { content } = usePortfolioContent();
  const allProjects = content.projects.items;
  const projectCategories = content.projects.categories?.length
    ? content.projects.categories
    : ['All', ...new Set(allProjects.map((project) => project.category))];
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [openActions, setOpenActions] = useState(null);

  const filteredProjects = useMemo(() => {
    const search = query.trim().toLowerCase();
    return allProjects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const searchable = `${project.title} ${project.type} ${project.category} ${project.description} ${project.stack.join(' ')}`.toLowerCase();
      return matchesCategory && (!search || searchable.includes(search));
    });
  }, [allProjects, category, query]);

  return (
    <>
      <main id="page-top" className={styles.page}>
        <header className={styles.topbar}>
          <a className={styles.brand} href="/">Kyann Tagle</a>
          <div className={styles.topActions}>
            <a className={styles.meeting} href="/book-a-meeting/">Meet</a>
            <a className={styles.back} href="/#projects"><span aria-hidden="true">←</span> Portfolio</a>
          </div>
        </header>

        <div className={styles.wrap}>
          <header className={styles.hero}>
            <span>THE BUILD FOLDER</span>
            <h1>All projects.<br /><em>Even the strange ones.</em></h1>
            <p>Products, client work, research, games, and the early builds that taught me what not to do twice.</p>
          </header>

          <section className={styles.browser} aria-labelledby="projects-browser-title">
            <div className={styles.browserHeading}>
              <div><span>Case studies</span><h2 id="projects-browser-title">Featured projects</h2></div>
              <p>Showing {filteredProjects.length} of {allProjects.length} projects</p>
            </div>

            <div className={styles.controls}>
              <label className={styles.search}>
                <span className="sr-only">Search projects</span>
                <Glyph name="searchPrompt" size={18} />
                <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search by title, category, or keyword" />
              </label>

              <div className={styles.filters} aria-label="Filter by category">
                {projectCategories.map((item) => (
                  <button className={category === item ? styles.activeFilter : ''} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} key={item}>{item}</button>
                ))}
              </div>
            </div>

            {filteredProjects.length ? (
              <div className={styles.grid}>
                {filteredProjects.map((project) => (
                  <article className={styles.projectCard} key={project.id}>
                    <div
                      className={`${styles.media} ${openActions === project.id ? styles.actionsOpen : ''}`}
                      onClick={(event) => {
                        if (event.target.closest('a, button')) return;
                        setOpenActions((current) => current === project.id ? null : project.id);
                      }}
                    >
                      <ProjectVisual project={project} />
                      <button
                        className={styles.actionReveal}
                        type="button"
                        aria-label={`Show links for ${project.title}`}
                        aria-expanded={openActions === project.id}
                        aria-controls={`${project.id}-quick-links`}
                        onClick={(event) => {
                          event.stopPropagation();
                          setOpenActions((current) => current === project.id ? null : project.id);
                        }}
                      />
                      <div className={styles.actions} id={`${project.id}-quick-links`}>
                        {project.website && (
                          <a href={project.website} {...(project.website.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} aria-label={`Visit ${project.title} website`} title="Visit website"><Glyph name="arrowUpRight" size={19} /></a>
                        )}
                        <a className={styles.openProject} href={projectPageHref(project.id)} aria-label={`View ${project.title} project`} title="View project"><Glyph name="arrowRight" size={19} /></a>
                      </div>
                    </div>
                    <div className={styles.meta}>
                      <div>
                        <span>{project.type}</span>
                        <a href={projectPageHref(project.id)}><h3>{project.title}</h3></a>
                        <p>{project.description}</p>
                      </div>
                      <time dateTime={project.year}>{project.year}</time>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.empty}><strong>No project found.</strong><p>Try a broader keyword or another category.</p></div>
            )}
          </section>
        </div>
      </main>
      <MasterFooter />
    </>
  );
}
