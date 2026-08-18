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

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(() => window.location.hash === '#all-projects');
  const finishLoading = useCallback(() => setShowLoader(false), []);

  useEffect(() => {
    document.documentElement.dataset.theme = 'light';

    const handleHashChange = () => setShowAllProjects(window.location.hash === '#all-projects');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (showAllProjects) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [showAllProjects]);

  if (showAllProjects) {
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
