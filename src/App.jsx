import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import HeroTerminal from './components/HeroTerminal';
import AboutMe from './components/AboutMe';
import ProjectGrid from './components/ProjectGrid';
import ExperienceMap from './components/ExperienceMap';
import Reviews from './components/Reviews';
import PhysicsStack from './components/PhysicsStack';
import AwardsCarousel from './components/AwardsCarousel';
import ContactLetsBuild from './components/ContactLetsBuild';
import MasterFooter from './components/MasterFooter';
import Wayfinder from './components/Wayfinder';
import GlassNav from './components/GlassNav';
import AllProjectsPage from './components/AllProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import StudioPage from './components/StudioPage';

function App() {
  const [locationKey, setLocationKey] = useState(() => `${window.location.pathname}${window.location.search}${window.location.hash}`);

  useEffect(() => {
    document.documentElement.dataset.theme = 'light';

    const initialSection = window.location.hash.slice(1);
    if (initialSection && initialSection !== 'all-projects') {
      window.requestAnimationFrame(() => {
        document.getElementById(initialSection)?.scrollIntoView({ block: 'start', behavior: 'auto' });
      });
    }

    const handleLocationChange = () => setLocationKey(`${window.location.pathname}${window.location.search}${window.location.hash}`);
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (window.location.pathname.startsWith('/projects') || window.location.hash === '#all-projects') window.scrollTo({ top: 0, behavior: 'instant' });
  }, [locationKey]);

  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
  if (normalizedPath === '/studio') {
    return <StudioPage />;
  }

  const projectMatch = normalizedPath.match(/^\/projects\/([^/]+)$/);
  const selectedProject = new URLSearchParams(window.location.search).get('project');

  if (normalizedPath === '/projects' && selectedProject) {
    return <ProjectDetailPage slug={selectedProject} />;
  }

  if (projectMatch) {
    return <ProjectDetailPage slug={decodeURIComponent(projectMatch[1])} />;
  }

  if (normalizedPath === '/projects' || window.location.hash === '#all-projects') {
    return <AllProjectsPage />;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <GlassNav />
      <Wayfinder />
      <main id="main-content">
        <HeroTerminal />
        <AboutMe />
        <ProjectGrid />
        <ExperienceMap />
        <Reviews />
        <PhysicsStack />
        <AwardsCarousel />
        <ContactLetsBuild />
      </main>
      <MasterFooter />
      <Analytics />
    </>
  );
}

export default App;
