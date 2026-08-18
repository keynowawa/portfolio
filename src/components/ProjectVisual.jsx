import styles from './ProjectVisual.module.css';

export default function ProjectVisual({ project, className = '' }) {
  if (project.thumbnail) {
    return <img className={`${styles.image} ${className}`} src={project.thumbnail} alt={`${project.title} project preview`} loading="lazy" decoding="async" />;
  }

  return (
    <div className={`${styles.placeholder} ${className}`} data-category={project.category} role="img" aria-label={`${project.title} preview coming soon`}>
      <div className={styles.windowBar}><span><i /><i /><i /></span><small>{project.id}.project</small></div>
      <div className={styles.placeholderBody}>
        <span>{project.category}</span>
        <strong>{project.title}</strong>
        <small>Project media coming soon</small>
      </div>
    </div>
  );
}
