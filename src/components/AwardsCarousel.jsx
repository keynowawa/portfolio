import { useMemo, useState } from 'react';
import { credentials, profile } from '../content/portfolio';
import Glyph from './Glyph';
import styles from './AwardsCarousel.module.css';

function issuerCode(issuer) {
  return issuer.split(/\s|·/).filter(Boolean).slice(0, 2).map((word) => word[0]).join('');
}

function CertificateVisual({ credential }) {
  if (credential.image) {
    return <img src={credential.image} alt={`${credential.title} certificate`} loading="lazy" />;
  }

  return (
    <div className={styles.certificatePlaceholder} aria-label="Certificate image placeholder">
      <div className={styles.seal}>{issuerCode(credential.issuer)}</div>
      <span>CERTIFICATE OF COMPLETION</span>
      <strong>{credential.title}</strong>
      <small>{credential.issuer}</small>
    </div>
  );
}

export default function AwardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = credentials[activeIndex];
  const move = (direction) => setActiveIndex((current) => (current + direction + credentials.length) % credentials.length);
  const visible = useMemo(() => [-2, -1, 0, 1, 2].map((offset) => ({
    offset,
    index: (activeIndex + offset + credentials.length) % credentials.length,
  })), [activeIndex]);

  return (
    <section id="credentials" className={`${styles.credentialsSection} section-padding`} aria-labelledby="credentials-title">
      <div className={`${styles.header} container`}>
        <div>
          <span className="section-kicker">05 / CREDENTIALS</span>
          <h2 id="credentials-title" className="section-title">The certificate wall.</h2>
        </div>
        <p>Real certificates will appear here as a focused gallery—not a document archive. Move through the collection, then open LinkedIn when you need verification.</p>
      </div>

      <div className={styles.coverFlow} aria-label="Certificate gallery">
        <div className={styles.stage}>
          {visible.map(({ index, offset }) => {
            const credential = credentials[index];
            const distance = Math.abs(offset);
            return (
              <button
                className={`${styles.coverCard} ${offset === 0 ? styles.activeCard : ''}`}
                style={{ '--offset': offset, '--distance': distance, zIndex: 10 - distance }}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={offset === 0 ? `${credential.title}, selected` : `View ${credential.title}`}
                aria-pressed={offset === 0}
                key={`${credential.issuer}-${credential.title}`}
              >
                <CertificateVisual credential={credential} />
              </button>
            );
          })}
        </div>

        <div className={`${styles.galleryMeta} container`}>
          <button type="button" onClick={() => move(-1)} aria-label="Previous certificate">←</button>
          <div className={styles.activeCopy}>
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(credentials.length).padStart(2, '0')} · {active.category}</span>
            <h3>{active.title}</h3>
            <p>{active.issuer} · {active.issued || 'Completed'}</p>
          </div>
          <button type="button" onClick={() => move(1)} aria-label="Next certificate">→</button>
        </div>

        <div className={`${styles.progress} container`} aria-label={`Certificate ${activeIndex + 1} of ${credentials.length}`}>
          {credentials.map((credential, index) => (
            <button className={index === activeIndex ? styles.activeDot : ''} type="button" onClick={() => setActiveIndex(index)} aria-label={`View ${credential.title}`} key={`${credential.title}-dot`} />
          ))}
        </div>

        <a className={styles.verifyLink} href={profile.linkedin} target="_blank" rel="noreferrer">Verify credentials on LinkedIn <Glyph name="arrowUpRight" size={15} /></a>
      </div>
    </section>
  );
}
