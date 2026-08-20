import { usePortfolioContent } from '../context/usePortfolioContent';
import styles from './PhysicsStack.module.css';

const techLogos = {
  JavaScript: ['javascript', 'F7DF1E'],
  TypeScript: ['typescript', '3178C6'],
  React: ['react', '61DAFB'],
  'Next.js': ['nextdotjs', '111111'],
  'HTML / CSS': ['html5', 'E34F26'],
  Vite: ['vite', '646CFF'],
  Supabase: ['supabase', '3FCF8E'],
  PostgreSQL: ['postgresql', '4169E1'],
  Python: ['python', '3776AB'],
  'C#': ['dotnet', '512BD4'],
  Java: ['openjdk', '111111'],
  'Swift / AppKit': ['swift', 'F05138'],
  Unity: ['unity', '111111'],
  Assembly: ['assemblyscript', '007AAC'],
  'Power BI': ['powerbi', 'F2C811'],
  RapidMiner: ['codepen', '788896'],
  Tailwind: ['tailwindcss', '06B6D4'],
  'Drizzle ORM': ['drizzle', 'C5F74F'],
  'Browser Extensions': ['googlechrome', '4285F4'],
  'Offline-first PWAs': ['pwa', '5A0FC8'],
  'Data Analytics': ['googleanalytics', 'E37400'],
  Cybersecurity: ['securityscorecard', '00BFA5'],
  'Agile / Scrum': ['jira', '0052CC'],
  'Product Management': ['linear', '5E6AD2'],
  'Applied Privacy': ['proton', '6D4AFF'],
  'Zero-knowledge Proofs': ['keybase', '33A0FF'],
  'Data Science': ['jupyter', 'F37626'],
  'Cloud Deployment': ['cloudflare', 'F38020'],
};

function TechItem({ item, hidden = false }) {
  const [slug, color] = techLogos[item] || ['codepen', 'AAB2C0'];
  return (
    <span aria-hidden={hidden || undefined}>
      <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" width="18" height="18" loading="lazy" />
      {item}
    </span>
  );
}

export default function PhysicsStack() {
  const { content } = usePortfolioContent();
  const toolkit = content.toolkit.items;
  return (
    <section id="toolkit" className={styles.toolkitSection} aria-labelledby="toolkit-title">
      <div className="container section-padding">
        <div className={styles.header}>
          <div>
            <span className="section-kicker"><span>04</span><span>Toolkit</span></span>
            <h2 id="toolkit-title" className="section-title">Tools I actually use.</h2>
          </div>
        </div>

        <div className={styles.toolkitRows}>
          {toolkit.map((group) => (
            <article key={group.label}>
              <header><h3>{group.title}</h3></header>
              <div className={styles.ticker}>
                <div className={styles.tickerTrack}>
                  {group.items.map((item) => <TechItem item={item} key={item} />)}
                  {group.items.map((item) => <TechItem item={item} hidden key={`${item}-copy`} />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
