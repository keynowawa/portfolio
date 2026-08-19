import { showcaseProjects } from './showcaseProjects';
import veraOne from '../assets/project-gallery/vera-1.webp';
import veraTwo from '../assets/project-gallery/vera-2.webp';
import doubleTimeOne from '../assets/project-gallery/doubletime-1.webp';
import doubleTimeTwo from '../assets/project-gallery/doubletime-2.webp';
import anoSkedOne from '../assets/project-gallery/anosked-1.webp';
import anoSkedTwo from '../assets/project-gallery/anosked-2.webp';
import twinUpOne from '../assets/project-gallery/twinup-1.webp';
import twinUpTwo from '../assets/project-gallery/twinup-2.webp';
import jpvOne from '../assets/project-gallery/jpv-1.webp';
import jpvTwo from '../assets/project-gallery/jpv-2.webp';
import metroOne from '../assets/project-gallery/metro-1.webp';
import metroTwo from '../assets/project-gallery/metro-2.webp';

const featured = Object.fromEntries(showcaseProjects.map((project) => [project.id, project]));

export const projectCategories = ['All', 'Products + web', 'Research + data', 'Games', 'Experiments'];

export const allProjects = [
  {
    id: 'vera', title: 'VERA', year: '2026', category: 'Products + web', type: 'Privacy technology',
    description: 'Purchase-backed review verification without exposing a buyer’s personal data.',
    role: 'Product management and full-stack development',
    problem: 'Marketplaces need a credible way to distinguish genuine buyers from fabricated reviews without collecting more identity data than necessary.',
    build: 'We built a Chrome extension, a public landing page, and a demo commerce flow that issues and verifies purchase-backed credentials locally.',
    outcome: 'Published on the Chrome Web Store and validated under 10, 50, and 100-request loads with zero failures.',
    stack: ['Chrome MV3', 'Node.js', 'WebAssembly', 'BBS+', 'MongoDB'],
    website: featured.vera.href,
    source: 'https://github.com/keynowawa/vera-landing-page',
    thumbnail: featured.vera.image,
    gallery: [{ image: veraOne, caption: 'VERA Vault interface' }, { image: veraTwo, caption: 'Credential and verification workflow' }],
  },
  {
    id: 'doubletime-pos', title: 'DoubleTime POS', year: '2026', category: 'Products + web', type: 'Business system',
    description: 'An offline-capable POS that keeps a home-based matcha bar’s orders and reports in one place.',
    role: 'Product manager and full-stack developer',
    problem: 'Six disconnected daily processes made orders difficult to track and reconciliation unnecessarily manual.',
    build: 'I translated the bar’s existing workflow into inventory, order, approval, dashboard, sync, and Excel/CSV reporting tools.',
    outcome: 'One system now supports daily operations across desktop and mobile, with local continuity when the connection drops.',
    stack: ['TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'PWA'],
    website: featured.doubletime.href,
    source: 'https://github.com/keynowawa/doubletime',
    thumbnail: featured.doubletime.image,
    gallery: [{ image: doubleTimeOne, caption: 'POS ordering workspace' }, { image: doubleTimeTwo, caption: 'Operations and reporting view' }],
  },
  {
    id: 'anosked', title: 'AnoSked', year: '2026', category: 'Products + web', type: 'Student productivity',
    description: 'A local-first planner that turns a portal schedule into something students can actually use.',
    role: 'Creator and full-stack developer',
    problem: 'School portals display schedules, but they do little to help students plan classes, tasks, and recurring commitments.',
    build: 'AnoSked parses pasted or captured schedule data, connects tasks to subjects, works offline, and exports calendars and phone wallpapers.',
    outcome: 'A fast setup flow turns static enrollment data into an everyday academic planner without requiring an account.',
    stack: ['Next.js', 'TypeScript', 'Tesseract.js', 'PWA'],
    website: featured.anosked.href,
    source: 'https://github.com/keynowawa/AnoSked',
    thumbnail: featured.anosked.image,
    gallery: [{ image: anoSkedOne, caption: 'Daily schedule view' }, { image: anoSkedTwo, caption: 'Classes and task planning' }],
  },
  {
    id: 'twinup', title: 'TwinUp', year: '2026', category: 'Games', type: 'Mobile puzzle game',
    description: 'A fast merge puzzle with chained scoring, touch controls, and local best runs.',
    role: 'Game designer and developer',
    problem: 'The goal was to make a small browser game feel replayable and responsive without accounts or a heavy setup.',
    build: 'I designed the merge rules, chained score system, touch interactions, audio feedback, installable PWA behavior, and local scoring.',
    outcome: 'A compact, installable game that works across phones and desktop browsers.',
    stack: ['JavaScript', 'HTML', 'CSS', 'PWA'],
    website: featured.twinup.href,
    thumbnail: featured.twinup.image,
    gallery: [{ image: twinUpOne, caption: 'TwinUp start screen' }, { image: twinUpTwo, caption: 'Merge board and scoring' }],
  },
  {
    id: 'jpv-motorcycles', title: 'JPV Motorcycles', year: '2025', category: 'Products + web', type: 'Client platform',
    description: 'A live rental platform that brings discovery, applications, and status tracking into one customer flow.',
    role: 'Product and web developer',
    problem: 'Rental discovery, document verification, interviews, and application updates were fragmented across separate touchpoints.',
    build: 'The multi-page platform centralizes vehicle discovery, document submission, scheduling, account recovery, and application status.',
    outcome: 'Delivered and launched for a real motorcycle rental company.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Client delivery'],
    website: featured.jpv.href,
    thumbnail: featured.jpv.image,
    gallery: [{ image: jpvOne, caption: 'Motorcycle discovery experience' }, { image: jpvTwo, caption: 'Rental application workflow' }],
  },
  {
    id: 'metro-mayhem', title: 'Metro Mayhem', year: '2025', category: 'Games', type: 'Unity rage-platformer',
    description: 'A satirical parkour game about broken systems and Philippine public frustration.',
    role: 'Game designer and Unity developer',
    problem: 'I wanted to turn frustration with inconsistent public systems and abuse of power into something playable rather than a lecture.',
    build: 'Escalating parkour, deliberately unfair systems, and issue-driven environments make the player feel the friction the story is criticizing.',
    outcome: 'A playable Unity prototype that uses rage-game mechanics as social commentary.',
    stack: ['Unity', 'C#', 'Game design', 'Narrative systems'],
    thumbnail: featured.metro.image,
    gallery: [{ image: metroOne, caption: 'Metro Mayhem environment' }, { image: metroTwo, caption: 'Platforming and obstacle design' }],
  },
  {
    id: 'philsys-private-credentials', title: 'Privacy-Preserving PhilSys Credentials', year: '2026', category: 'Research + data', type: 'Applied cryptography research',
    description: 'A selective-disclosure framework for proving identity attributes without exposing raw demographic data.',
    role: 'Applied cryptography researcher',
    problem: 'Traditional digital identity checks often disclose an entire credential when a verifier only needs one fact, such as an age threshold.',
    build: 'The study combines verifiable credentials, BBS+ signatures, Circom, Groth16, and SnarkJS in a 360-trial evaluation without live identity data.',
    outcome: 'Defined regression-ready latency, throughput, memory, and disclosure KPIs for privacy-preserving PhilSys verification.',
    stack: ['JSON-LD', 'Circom', 'Groth16', 'SnarkJS', 'BBS+'],
  },
  {
    id: 'misinformation-simulation', title: 'Misinformation Simulation', year: '2026', category: 'Research + data', type: 'Computational systems',
    description: 'A 300-agent simulation measuring how a small bot population changes misinformation spread.',
    role: 'Computational systems researcher',
    problem: 'The research asked how much influence a small coordinated bot population can retain even after corrections enter the network.',
    build: 'I simulated 300 agents and compared peak spread, correction behavior, and residual misinformation across bot-share conditions.',
    outcome: 'A 5% bot population drove 55–70% peak and 10–15% residual misinformation despite corrections.',
    stack: ['Python', 'Agent simulation', 'Data analysis'],
  },
  {
    id: 'dpwh-network-profile', title: 'DPWH Network Infrastructure Profile', year: '2026', category: 'Research + data', type: 'Network analysis',
    description: 'An infrastructure audit connecting workstation demand to capacity, VLAN, and virtualization decisions.',
    role: 'Network analyst',
    problem: 'A 20 Mbps uplink was supporting a large office without a clear picture of demand, segmentation, and infrastructure bottlenecks.',
    build: 'I mapped 300 workstations, three servers, seven switches, and the uplink while documenting priority capacity and architecture gaps.',
    outcome: 'Produced a grounded upgrade profile for bandwidth, VLAN segmentation, and virtualization planning.',
    stack: ['VLAN', 'TCP/IP', 'Network analysis'],
  },
  {
    id: 'power-bi-dashboards', title: 'Power BI Dashboards', year: '2025', category: 'Research + data', type: 'Data visualization',
    description: 'Interactive dashboards that turn raw datasets into readable patterns and decisions.',
    role: 'Data analyst',
    problem: 'Dense datasets are difficult to act on when the important comparisons are hidden in rows and columns.',
    build: 'I modeled, filtered, and visualized datasets around the questions a viewer needs to answer first.',
    outcome: 'Dashboard images and individual case notes will be added when the source files are portfolio-ready.',
    stack: ['Power BI', 'Data visualization', 'Data modeling'],
  },
  {
    id: 'rapidminer-data-cleaning', title: 'RapidMiner Data Cleaning Studies', year: '2025', category: 'Research + data', type: 'Data preparation',
    description: 'Cleaning and transformation workflows that prepare imperfect datasets for useful analysis.',
    role: 'Data analyst',
    problem: 'Raw datasets often contain inconsistent formats, missing values, and fields that cannot be analyzed reliably as-is.',
    build: 'I created repeatable RapidMiner processes for cleaning, transforming, and validating data before analysis.',
    outcome: 'Prepared cleaner datasets and documented the decisions behind each transformation.',
    stack: ['RapidMiner', 'Data cleaning', 'Data preparation'],
  },
  {
    id: 'doubletime-website', title: 'DoubleTime Website', year: '2026', category: 'Products + web', type: 'Small-business storefront',
    description: 'The customer-facing home of a small matcha bar, designed alongside its internal POS.',
    role: 'Product and web developer',
    problem: 'The business needed a clear customer channel that matched the product and stayed usable across phones and desktop.',
    build: 'I designed and deployed a responsive brand, menu, and ordering-facing experience connected to the same product thinking as the POS.',
    outcome: 'A deployed customer touchpoint for the growing home-based business.',
    stack: ['TypeScript', 'Vite', 'Responsive design'],
    website: 'https://doubletime-five.vercel.app',
  },
  {
    id: 'portfolio', title: 'This Portfolio', year: '2026', category: 'Products + web', type: 'Interactive portfolio',
    description: 'A terminal-inspired portfolio built to tell my story without making visitors work for it.',
    role: 'Designer and developer',
    problem: 'A conventional portfolio felt too generic, but too much interaction made the content harder to understand.',
    build: 'I combined a conversational terminal, quiet motion, case-study navigation, and responsive HCI decisions in one evolving system.',
    outcome: 'A personal site that stays expressive while keeping projects, experience, and contact routes easy to reach.',
    stack: ['React', 'Vite', 'Interaction design'],
    website: '/',
    source: 'https://github.com/keynowawa/portfolio',
  },
  {
    id: 'red-shift', title: 'Red Shift', year: '2025', category: 'Games', type: 'Narrative Unity game',
    description: 'A story-driven game exploring red-tagging in the Philippines through player choices.',
    role: 'Game designer and Unity developer',
    problem: 'Red-tagging is often discussed abstractly, leaving the human pressure and consequences difficult to feel.',
    build: 'The player moves through a branching story where ordinary choices shape risk, perception, and consequences.',
    outcome: 'A playable narrative prototype built around a difficult Philippine social issue.',
    stack: ['Unity', 'C#', 'Interactive storytelling'],
  },
  {
    id: 'coin-clicker', title: 'Coin Clicker', year: '2025', category: 'Games', type: 'Political game prototype',
    description: 'A timed clicking game where policy decisions change the peso score after every round.',
    role: 'Game designer and developer',
    problem: 'The challenge was to mix a simple arcade loop with questions about laws, tradeoffs, and national outcomes.',
    build: 'Players earn points under a timer, answer policy questions between rounds, and see randomized gains or losses based on each decision.',
    outcome: 'A small but replayable experiment in connecting game feedback to civic choices.',
    stack: ['Game systems', 'Scoring logic', 'Interaction design'],
  },
  {
    id: 'crazy-little-game-called-love', title: 'Crazy Little Game Called Love', year: '2025', category: 'Games', type: 'Endless runner',
    description: 'An endless chase where the person ahead always gets faster.',
    role: 'Game designer and Unity developer',
    problem: 'I wanted a very simple mechanic to say something recognizable about unreciprocated effort.',
    build: 'The player clears obstacles and increases their score while chasing someone they can never actually catch.',
    outcome: 'A deliberately unfair endless game whose mechanic is also its story.',
    stack: ['Unity', 'C#', 'Endless runner'],
  },
  {
    id: 'tetris-but-harder', title: 'Tetris, But Harder', year: '2025', category: 'Games', type: 'Browser game experiment',
    description: 'Tetris rebuilt with time pressure, limited visibility, shifting colors, and reversed controls.',
    role: 'Game developer',
    problem: 'The familiar Tetris loop needed genuinely different difficulty rather than simply moving faster.',
    build: 'I designed modes that interfere with perception, timing, and muscle memory in distinct ways.',
    outcome: 'A playable collection of difficulty experiments built around one recognizable system.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/keynowawa/tetris-but-harder',
  },
  {
    id: 'bubblewrap-for-mac', title: 'BubbleWrap for Mac', year: '2025', category: 'Experiments', type: 'Native macOS experiment',
    description: 'A tactile sheet of digital bubble wrap using pressure, native haptics, sound, and animation.',
    role: 'macOS developer',
    problem: 'Most digital stress-relief toys miss the physical response that makes the real object satisfying.',
    build: 'I synchronized Force Touch pressure with AppKit haptics, sound, and animation for a deliberately small native interaction.',
    outcome: 'A macOS prototype that turns hardware-specific input into a playful sensory response.',
    stack: ['Swift', 'AppKit', 'Force Touch'],
    source: 'https://github.com/keynowawa/bubblewrap',
  },
  {
    id: 'adamson-payroll-system', title: 'Adamson Payroll System', year: '2023', category: 'Experiments', type: 'First-year desktop project',
    description: 'The salary system that taught me persistence before I knew how databases worked.',
    role: 'Student developer',
    problem: 'Employee and salary data had to stay connected across multiple forms without a database layer.',
    build: 'I used arrays and lists shared across desktop forms and kept debugging until the data flow finally held together.',
    outcome: 'My first genuinely difficult software build, and the project that made finishing the thing part of how I work.',
    stack: ['C#', 'Desktop forms', 'Arrays'],
  },
  {
    id: 'sulyap-palkon', title: 'Sulyap Palkon', year: '2023', category: 'Experiments', type: 'Early web project',
    description: 'A YouTube-style space for videos connected to Adamson University and its community.',
    role: 'Student web developer',
    problem: 'The project explored how a campus community might browse and organize its own video content.',
    build: 'I designed the familiar feed, video discovery, and viewing patterns as an early web-development exercise.',
    outcome: 'An early lesson in adapting a recognizable product model to a specific community.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

export function findProject(slug) {
  return allProjects.find((project) => project.id === slug);
}

export function projectPageHref(id) {
  return `/projects/?project=${encodeURIComponent(id)}`;
}

const reelProjects = Object.fromEntries(allProjects.slice(0, 6).map((project) => [project.id, project]));
const thumbnail = (id) => ({
  id: `${id}-thumbnail`,
  title: reelProjects[id].title,
  image: reelProjects[id].thumbnail,
  fit: 'cover',
});
const screenshot = (id, index) => ({
  id: `${id}-screen-${index + 1}`,
  title: `${reelProjects[id].title}: ${reelProjects[id].gallery[index].caption}`,
  image: reelProjects[id].gallery[index].image,
  fit: 'cover',
});

// A deliberate shuffle keeps one product from appearing twice in a row and
// excludes the portrait app captures until the reel has a dedicated phone frame.
export const projectReelItems = [
  thumbnail('vera'),
  screenshot('doubletime-pos', 0),
  thumbnail('anosked'),
  screenshot('jpv-motorcycles', 0),
  thumbnail('twinup'),
  screenshot('metro-mayhem', 0),
  thumbnail('doubletime-pos'),
  thumbnail('jpv-motorcycles'),
  thumbnail('metro-mayhem'),
  screenshot('doubletime-pos', 1),
  screenshot('jpv-motorcycles', 1),
  screenshot('metro-mayhem', 1),
];
