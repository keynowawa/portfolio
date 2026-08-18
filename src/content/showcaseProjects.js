import veraThumbnail from '../assets/projects/vera.webp';
import doubleTimeThumbnail from '../assets/projects/doubletime.webp';
import anoSkedThumbnail from '../assets/projects/anosked.webp';
import twinUpThumbnail from '../assets/projects/twinup.webp';
import jpvThumbnail from '../assets/projects/jpv.webp';
import metroMayhemThumbnail from '../assets/projects/metro-mayhem.webp';

export const showcaseProjects = [
  {
    id: 'vera', detailId: 'vera', title: 'VERA', year: '2026', type: 'Privacy technology', visual: 'privacy',
    description: 'A browser extension that verifies purchase-backed reviews without exposing the buyer’s personal data.',
    href: 'https://chromewebstore.google.com/detail/aggmkpdjbemhoaaehdahcejmmomkleeo',
    image: veraThumbnail,
  },
  {
    id: 'doubletime', detailId: 'doubletime-pos', title: 'DoubleTime POS', year: '2026', type: 'Business system', visual: 'pos',
    description: 'A cross-device POS for a home-based matcha bar, built to track orders and export clean sales records.',
    href: 'https://doubletime-five.vercel.app',
    image: doubleTimeThumbnail,
  },
  {
    id: 'anosked', detailId: 'anosked', title: 'AnoSked', year: '2026', type: 'Student productivity', visual: 'schedule',
    description: 'A local-first planner that turns a pasted school-portal schedule into a calendar and task system.',
    href: 'https://anosked.vercel.app',
    image: anoSkedThumbnail,
  },
  {
    id: 'twinup', detailId: 'twinup', title: 'TwinUp', year: '2026', type: 'Mobile game', visual: 'game',
    description: 'A mobile merge puzzle where matching tiles chain together, pop the board, and save your best run locally.',
    href: 'https://twinup.vercel.app',
    image: twinUpThumbnail,
  },
  {
    id: 'jpv', detailId: 'jpv-motorcycles', title: 'JPV Motorcycles', year: '2025', type: 'Client website', visual: 'rental',
    description: 'A live company website that helps customers understand and book JPV’s motorcycle rentals.',
    href: 'http://jpv.unaux.com/',
    image: jpvThumbnail,
  },
  {
    id: 'metro', detailId: 'metro-mayhem', title: 'Metro Mayhem', year: '2025', type: 'Unity game', visual: 'metro',
    description: 'A satirical parkour rage game about the inconsistencies and frustrations of Philippine public systems.',
    href: '#all-projects',
    image: metroMayhemThumbnail,
  },
];
