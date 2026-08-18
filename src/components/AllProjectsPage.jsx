import Glyph from './Glyph';
import { projectCollections } from '../content/portfolio';
import { showcaseProjects } from '../content/showcaseProjects';
import styles from './AllProjectsPage.module.css';

export default function AllProjectsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <a className={styles.brand} href="#projects">Kyann Tagle</a>
        <a className={styles.back} href="#projects"><span aria-hidden="true">←</span> Back to portfolio</a>
      </header>

      <div className={styles.wrap}>
        <header className={styles.hero}>
          <span>THE BUILD FOLDER</span>
          <h1>All projects.<br /><em>Including the weird ones.</em></h1>
          <p>Products, client work, research, games, and the early builds that taught me what not to do twice.</p>
        </header>

        <section className={styles.selected} aria-labelledby="selected-projects-title">
          <h2 id="selected-projects-title">Selected</h2>
          <div className={styles.selectedGrid}>
            {showcaseProjects.map((project) => (
              <a href={project.id === 'metro' ? '#game-shelf-title' : project.href} key={project.id} {...(project.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
                <span>{project.type}</span><strong>{project.title}</strong><time>{project.year}</time>
              </a>
            ))}
          </div>
        </section>

        {projectCollections.map((collection, index) => (
          <section className={styles.collection} key={collection.id} aria-labelledby={`${collection.id}-title`}>
            <div className={styles.collectionTitle}>
              <span>0{index + 1}</span>
              <div><h2 id={`${collection.id}-title`}>{collection.label}</h2><p>{collection.summary}</p></div>
            </div>
            <div className={styles.projectList}>
              {collection.items.map((item) => {
                const Wrapper = item.href ? 'a' : 'article';
                return (
                  <Wrapper className={styles.project} key={item.title} {...(item.href ? { href: item.href, target: '_blank', rel: 'noreferrer' } : {})}>
                    <div><span>{item.status}</span><h3>{item.title}</h3><p>{item.description}</p></div>
                    <ul>{item.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul>
                    {item.href && <Glyph name="arrowUpRight" size={18} />}
                  </Wrapper>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
