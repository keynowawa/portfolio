import Glyph from './Glyph';
import { usePortfolioContent } from '../context/usePortfolioContent';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { content } = usePortfolioContent();
  const reviews = content.reviews.items;
  return (
    <section id="reviews" className={`${styles.reviewsSection} container section-padding`} aria-labelledby="reviews-title">
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Reviews</span>
          <h2 id="reviews-title" className="section-title">What people say.</h2>
        </div>
      </header>

      <div className={styles.reviewGrid}>
        {reviews.map((review, index) => (
          <article className={styles.reviewCard} key={review.id || review.label}>
            <div className={styles.cardTop}>
              <span>{String(index + 1).padStart(2, '0')} / {review.label}</span>
              <span>{review.status || 'Published'}</span>
            </div>
            <blockquote>“{review.quote}”</blockquote>
            <footer>
              <div className={styles.avatar} aria-hidden="true">{review.image ? <img src={review.image} alt="" /> : String(index + 1).padStart(2, '0')}</div>
              <div><strong>{review.person}</strong><span>{review.role}</span></div>
            </footer>
            {review.profileUrl && <a className={styles.profileLink} href={review.profileUrl} target="_blank" rel="noreferrer" aria-label={`Open profile for ${review.person}`} title="Open reviewer profile">
              <Glyph name="arrowUpRight" size={19} />
            </a>}
          </article>
        ))}
      </div>
    </section>
  );
}
