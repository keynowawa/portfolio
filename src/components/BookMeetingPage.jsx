import { useEffect } from 'react';
import { profile } from '../content/portfolio';
import Glyph from './Glyph';
import styles from './BookMeetingPage.module.css';

function loadCalEmbed() {
  ((C, A, L) => {
    const queue = (api, args) => api.q.push(args);
    const documentRef = C.document;
    C.Cal = C.Cal || function calLoader() {
      const cal = C.Cal;
      const args = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const script = documentRef.head.appendChild(documentRef.createElement('script'));
        script.src = A;
        script.async = true;
        cal.loaded = true;
      }
      if (args[0] === L) {
        const api = function namespacedCal() { queue(api, arguments); };
        const namespace = args[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          queue(cal.ns[namespace], args);
          queue(cal, ['initNamespace', namespace]);
        } else {
          queue(cal, args);
        }
        return;
      }
      queue(cal, args);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  window.Cal('init', '30min', { origin: 'https://app.cal.com' });
  window.Cal.config = window.Cal.config || {};
  window.Cal.config.forwardQueryParams = true;
  window.Cal.ns['30min']('inline', {
    elementOrSelector: '#my-cal-inline-30min',
    config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
    calLink: 'keyno/30min',
  });
  window.Cal.ns['30min']('ui', { hideEventTypeDetails: true, layout: 'month_view' });
}

export default function BookMeetingPage() {
  useEffect(() => {
    document.documentElement.dataset.theme = 'light';
    loadCalEmbed();
  }, []);

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Meeting page navigation">
        <a className={styles.brand} href="/">Kyann Tagle</a>
        <a className={styles.back} href="/#contact"><span aria-hidden="true">←</span> Back to portfolio</a>
      </nav>

      <section className={styles.layout} aria-labelledby="meeting-title">
        <div className={styles.intro}>
          <span className={styles.eyebrow}>30 minutes / Google Meet</span>
          <h1 id="meeting-title">Let’s talk<br /><span>it through.</span></h1>
          <p>Pick a time that works for you. We can talk about a role, a project, or an idea you are still figuring out.</p>
          <div className={styles.details}>
            <span><Glyph name="calendar" size={17} /> 30-minute conversation</span>
            <a href={`mailto:${profile.email}`}><Glyph name="mail" size={17} /> Prefer email?</a>
          </div>
        </div>

        <div className={styles.calendarShell}>
          <div className={styles.calendar} id="my-cal-inline-30min" />
        </div>
      </section>
    </main>
  );
}
