import Glyph from './Glyph';
import { profile } from '../content/portfolio';
import styles from './Reviews.module.css';

const placeholders = [
  {
    label: 'Client review',
    quote: 'A client note will live here once I have permission to share it publicly.',
    person: 'Reviewer name',
    role: 'Client / organization',
  },
  {
    label: 'Team review',
    quote: 'A teammate’s perspective will go here, linked directly to their public profile.',
    person: 'Reviewer name',
    role: 'Teammate / organization',
  },
  {
    label: 'Collaborator review',
    quote: 'A collaborator’s honest take will appear here after they approve the final wording.',
    person: 'Reviewer name',
    role: 'Collaborator / project',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className={`${styles.reviewsSection} container section-padding`} aria-labelledby="reviews-title">
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Reviews</span>
          <h2 id="reviews-title" className="section-title">What people say.</h2>
        </div>
      </header>

      <div className={styles.reviewGrid}>
        {placeholders.map((review, index) => (
          <article className={styles.reviewCard} key={review.label}>
            <div className={styles.cardTop}>
              <span>{String(index + 1).padStart(2, '0')} / {review.label}</span>
              <span>Pending</span>
            </div>
            <blockquote>“{review.quote}”</blockquote>
            <footer>
              <div className={styles.avatar} aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
              <div><strong>{review.person}</strong><span>{review.role}</span></div>
            </footer>
            <a className={styles.profileLink} href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={`Open placeholder profile for ${review.label}`} title="Profile link placeholder">
              <Glyph name="arrowUpRight" size={19} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
