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

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const finishLoading = useCallback(() => setShowLoader(false), []);

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
  }, []);

  return (
    <>
      {showLoader && <PreLoader onComplete={finishLoading} />}
      <a className="skip-link" href="#main-content">Skip to content</a>
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
