import { useCallback, useEffect, useState } from 'react';
import PreLoader from './components/PreLoader';
import HeroTerminal from './components/HeroTerminal';
import AboutMe from './components/AboutMe';
import ProjectGrid from './components/ProjectGrid';
import ExperienceMap from './components/ExperienceMap';
import PhysicsStack from './components/PhysicsStack';
import AwardsCarousel from './components/AwardsCarousel';
import ContactLetsBuild from './components/ContactLetsBuild';
import MasterFooter from './components/MasterFooter';
import Wayfinder from './components/Wayfinder';
import GlassNav from './components/GlassNav';
import AllProjectsPage from './components/AllProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [locationKey, setLocationKey] = useState(() => `${window.location.pathname}${window.location.search}${window.location.hash}`);
  const finishLoading = useCallback(() => setShowLoader(false), []);

  useEffect(() => {
    document.documentElement.dataset.theme = 'light';

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
      {showLoader && <PreLoader onComplete={finishLoading} />}
      <a className="skip-link" href="#main-content">Skip to content</a>
      <GlassNav />
      <Wayfinder />
      <main id="main-content">
        <HeroTerminal />
        <AboutMe />
        <ProjectGrid />
        <ExperienceMap />
        <PhysicsStack />
        <AwardsCarousel />
        <ContactLetsBuild />
      </main>
      <MasterFooter />
    </>
  );
}

export default App;
