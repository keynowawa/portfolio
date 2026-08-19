import resumeUrl from '../../information/FINAL-TAGLE-RESUME-2026.pdf?url';
import businessAnalysisCapm from '../assets/certificates/business-analysis-capm.webp';
import businessAnalysisMastery from '../assets/certificates/business-analysis-mastery.webp';
import cybersecurityRiskManagement from '../assets/certificates/cybersecurity-risk-management.webp';
import foundationsItProjectManagement from '../assets/certificates/foundations-it-project-management.webp';
import foundationsProjectManagement from '../assets/certificates/foundations-project-management.webp';
import introAgileScrum from '../assets/certificates/intro-agile-scrum.webp';
import introDataAnalytics from '../assets/certificates/intro-data-analytics.webp';
import itRiskAssessment from '../assets/certificates/it-risk-assessment.webp';
import managingItProjectScope from '../assets/certificates/managing-it-project-scope.webp';
import networkingCertificate from '../assets/certificates/networking.webp';
import projectExecutionControl from '../assets/certificates/project-execution-control.webp';
import projectInitiationPlanning from '../assets/certificates/project-initiation-planning.webp';
import projectManagementBasics from '../assets/certificates/project-management-basics.webp';
import projectManagementMethodologies from '../assets/certificates/project-management-methodologies.webp';
import scrumMaster from '../assets/certificates/scrum-master.webp';
import testingDebuggingDotnet from '../assets/certificates/testing-debugging-dotnet.webp';

export const profile = {
  displayName: 'Kyann Tagle',
  fullName: 'Jel Kyann J. Tagle',
  handle: 'keynowawa',
  location: 'Manila & Cavite, Philippines',
  role: 'I build stuff. Useful stuff, mostly.',
  education: 'BS Computer Science, Adamson University',
  status: 'Open to internships and collaborations',
  email: 'info.keyno@gmail.com',
  github: 'https://github.com/keynowawa',
  linkedin: 'https://www.linkedin.com/in/jelkyanntagle',
  resumeUrl,
};

export const heroCommands = [
  { command: 'whoami', response: 'Kyann — CS student and developer who likes shipping useful things.' },
  { command: 'what_do_you_make?', response: 'Useful web apps, weird little experiments, and tools I wish already existed.' },
  { command: 'currently', response: 'Studying at Adamson, shipping projects, and learning as I go.' },
];

export const projects = [
  {
    id: 'vera',
    number: '01',
    title: 'VERA',
    eyebrow: 'The one I’m most proud of',
    role: 'Product management · Full-stack development',
    problem: 'Online marketplaces need credible purchase signals without asking shoppers to surrender unnecessary personal information.',
    solution: 'We built a browser extension that identifies verified reviews, a landing page that explains the system, and a sample e-commerce store where the complete flow can be tested.',
    proof: 'Shipped as a working Chrome extension and published on the Chrome Web Store, with a landing page and VERA-enabled demo shop.',
    outputs: ['Chrome extension', 'Landing page', 'Demo store'],
    stack: ['Product Strategy', 'JavaScript', 'Chrome MV3', 'Privacy Systems'],
    source: 'https://github.com/keynowawa/vera-landing-page',
    demo: 'https://chromewebstore.google.com/detail/aggmkpdjbemhoaaehdahcejmmomkleeo',
    demoLabel: 'Chrome Web Store',
    visual: 'verification',
    accent: '#8bb3ff',
    media: [
      { label: 'Chrome extension', image: null },
      { label: 'Landing page', image: null },
      { label: 'Demo store', image: null },
    ],
    featured: true,
  },
  {
    id: 'doubletime',
    number: '02',
    title: 'DoubleTime POS',
    eyebrow: 'A real tool for our matcha bar',
    role: 'Creator · Product development',
    problem: 'Running a small home-based matcha business meant orders were easy to lose and tedious to summarize by hand.',
    solution: 'I built a straightforward point-of-sale workflow so orders can be recorded consistently, tracked in one place, and exported to spreadsheets when it is time to reconcile them.',
    proof: 'Used for DoubleTime’s day-to-day order tracking, with spreadsheet export built around how the business already works.',
    outputs: ['Order tracking', 'Spreadsheet export', 'Business workflow'],
    stack: ['TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    source: 'https://github.com/keynowawa/doubletime',
    demo: 'https://doubletime-five.vercel.app',
    demoLabel: 'View storefront',
    visual: 'pos',
    accent: '#55d6ff',
    media: [
      { label: 'POS dashboard', image: null },
      { label: 'Order tracking', image: null },
      { label: 'Spreadsheet export', image: null },
    ],
  },
  {
    id: 'anosked',
    number: '03',
    title: 'AnoSked',
    eyebrow: 'Your portal schedule, made useful',
    role: 'Creator · Full-stack development',
    problem: 'A school portal can show a schedule, but it does not help students turn that information into a plan they can actually follow.',
    solution: 'AnoSked lets a student paste their school schedule, turns it into a readable weekly view, and keeps classes and to-dos together instead of scattered across different apps.',
    proof: 'A working student planner built around fast setup, local data, schedule tracking, and everyday academic tasks.',
    outputs: ['Schedule parser', 'Weekly tracker', 'To-do list'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Tesseract.js'],
    source: 'https://github.com/keynowawa/AnoSked',
    demo: 'https://anosked.vercel.app',
    demoLabel: 'Try AnoSked',
    visual: 'schedule',
    accent: '#5b8cff',
    media: [
      { label: 'Weekly schedule', image: null },
      { label: 'Task tracking', image: null },
      { label: 'Portal import', image: null },
    ],
  },
];

export const projectCollections = [
  {
    id: 'research-data',
    label: 'Research + data',
    summary: 'Privacy research and analytical work.',
    items: [
      {
        title: 'Privacy-preserving PhilSys credentials',
        status: 'Thesis research',
        description: 'Exploring zk-SNARKs, verifiable credentials, and BBS+ signatures so a person can prove facts such as being above an age threshold without exposing raw identity data.',
        stack: ['zk-SNARKs', 'Verifiable Credentials', 'BBS+'],
      },
      {
        title: 'Power BI dashboards',
        status: 'Visuals coming soon',
        description: 'Interactive dashboards built to turn raw datasets into readable decisions and patterns.',
        stack: ['Power BI', 'Data Visualization'],
      },
      {
        title: 'Data cleaning studies',
        status: 'Visuals coming soon',
        description: 'Cleaning, transforming, and preparing datasets with RapidMiner before analysis.',
        stack: ['RapidMiner', 'Data Preparation'],
      },
    ],
  },
  {
    id: 'client-product',
    label: 'Client + small business',
    summary: 'Web work that left the classroom.',
    items: [
      {
        title: 'JPV Motorcycles',
        status: 'Live client website',
        description: 'A public website created for a motorcycle rental company and used by the business today.',
        stack: ['Web Development', 'Client Delivery'],
        href: 'http://jpv.unaux.com/',
        linkLabel: 'Visit website',
      },
      {
        title: 'DoubleTime website',
        status: 'Small-business storefront',
        description: 'The customer-facing website for our home-based matcha bar, designed alongside its internal POS workflow.',
        stack: ['Vite', 'TypeScript', 'Supabase'],
        href: 'https://doubletime-five.vercel.app',
        linkLabel: 'View website',
      },
      {
        title: 'This portfolio',
        status: 'Always being edited',
        description: 'A terminal-inspired portfolio built to feel like me without making visitors work too hard to understand it.',
        stack: ['React', 'Vite', 'Interaction Design'],
        href: 'https://github.com/keynowawa/portfolio',
        linkLabel: 'Source',
      },
    ],
  },
  {
    id: 'game-shelf',
    label: 'Game shelf',
    summary: 'Small games with bigger ideas hiding inside.',
    items: [
      {
        title: 'Metro Mayhem',
        status: 'Unity prototype',
        description: 'A rage-platformer about inconsistent systems, public frustration, and brutality in the Philippines.',
        stack: ['Unity', 'C#', 'Narrative Design'],
      },
      {
        title: 'Red Shift',
        status: 'Unity prototype',
        description: 'A story-driven game that explores red-tagging in the Philippines through the choices and consequences faced by the player.',
        stack: ['Unity', 'C#', 'Interactive Storytelling'],
      },
      {
        title: 'Coin Clicker',
        status: 'Game prototype',
        description: 'A timed political simulation where each round asks the player to pass laws, then changes the peso score according to those decisions.',
        stack: ['Game Systems', 'Scoring Logic'],
      },
      {
        title: 'Crazy Little Game Called Love',
        status: 'Endless game',
        description: 'You keep chasing someone through obstacles, but never quite catch them. A deliberately unfair game about unreciprocated love.',
        stack: ['Unity', 'C#', 'Endless Runner'],
      },
      {
        title: 'Tetris, But Harder',
        status: 'Playable experiment',
        description: 'Tetris reworked with deliberately difficult modes, including time pressure, limited visibility, shifting colors, and reversed controls.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        href: 'https://github.com/keynowawa/tetris-but-harder',
        linkLabel: 'Source',
      },
    ],
  },
  {
    id: 'small-experiments',
    label: 'Odd little builds',
    summary: 'Experiments made because the idea would not leave me alone.',
    items: [
      {
        title: 'BubbleWrap for Mac',
        status: 'macOS experiment',
        description: 'A stress-free digital sheet of bubble wrap using pressure, haptics, sound, and native Mac interactions.',
        stack: ['Swift', 'AppKit'],
        href: 'https://github.com/keynowawa/bubblewrap',
        linkLabel: 'Source',
      },
      {
        title: 'Adamson Payroll System',
        status: 'First-year project',
        description: 'An employee salary system built before I knew databases, using arrays and lists shared across forms. It was painful, memorable, and finished.',
        stack: ['C#', 'Arrays', 'Desktop Forms'],
      },
      {
        title: 'Sulyap Palkon',
        status: 'Early web project',
        description: 'A YouTube-style space for videos connected to Adamson University and its community.',
        stack: ['Web Development', 'Media Platform'],
      },
    ],
  },
];

export const buildLog = [
  {
    period: '2026 / PRESENT',
    type: 'PRODUCT + ENGINEERING',
    title: 'Product Manager & Full-Stack Developer',
    organization: 'doubletime.ph / Freelance',
    result: '6 workflows → 1 system',
    bullets: [
      'Built an offline POS around DoubleTime’s existing workflow for daily order tracking and Excel/CSV reporting.',
      'Translated stakeholder needs into two deployed products with cloud sync, role-based access, and responsive mobile workflows.',
    ],
  },
  {
    period: '2026 / PRESENT',
    type: 'LEADERSHIP + FINANCE',
    title: 'Executive Treasurer & Finance Committee Head',
    organization: 'Adamson University Scholars Alliance',
    result: 'Audit-ready operations',
    bullets: ['Manage reimbursements, advances, supplier receipts, fund distribution, liquidation, and audit compliance.'],
  },
  {
    period: '2026',
    type: 'COMPUTATIONAL SYSTEMS',
    title: 'Misinformation Simulation Researcher',
    organization: 'Academic research',
    result: '300 agents simulated',
    bullets: ['Quantified bot influence: 5% bots drove 55–70% peak and 10–15% residual misinformation despite corrections.'],
  },
  {
    period: '2025 / 2026',
    type: 'APPLIED CRYPTOGRAPHY',
    title: 'Applied Cryptography Researcher',
    organization: 'VERA + PhilSys credential evaluation',
    result: '0 failures at 100 requests',
    bullets: [
      'Led VERA testing at 10, 50, and 100-request loads and resolved four defects across four phases.',
      'Designed a 360-trial BBS+/Groth16 matrix without using live identity data.',
    ],
  },
  {
    period: '2025 / 2026',
    type: 'NETWORK ANALYSIS',
    title: 'Network Analyst',
    organization: 'DPWH Metro Manila 2nd District Engineering Office',
    result: '300 workstations audited',
    bullets: ['Evaluated three servers, seven switches, and a 20 Mbps uplink to prioritize capacity, VLAN, and virtualization upgrades.'],
  },
  {
    period: '2024 / 2026',
    type: 'SOFTWARE + UNITY',
    title: 'Software & Unity Developer',
    organization: 'Independent projects',
    result: '8 prototypes delivered',
    bullets: ['Built cross-platform prototypes for social and native-interaction concepts, including three issue-driven games and a Force Touch experiment.'],
  },
  {
    period: '2025',
    type: 'CLIENT PRODUCT',
    title: 'Product & Web Developer',
    organization: 'JPV Motorcycle Rental',
    result: 'Live client platform',
    bullets: ['Centralized discovery, document verification, interview scheduling, account recovery, and application-status workflows.'],
  },
  {
    period: 'APR 2025',
    type: 'EVENT OPERATIONS',
    title: 'Event Director, Logistics Lead & Technical Operations',
    organization: 'Camp Raya',
    result: '100 participants',
    bullets: ['Directed program design, security, A/V, and multi-department logistics for an SDG 8 program recognized among Adamson’s Top 10 Spiritual Events.'],
  },
  {
    period: 'JUN 2024 / 2025',
    type: 'FINANCE LEADERSHIP',
    title: 'Executive Treasurer',
    organization: 'Hiraya-AdU',
    result: '100% reconciled',
    bullets: ['Directed PHP 27,000+ across six events and raised PHP 16,612 for Bahay Aruga through controlled procurement, disbursement, and liquidation.'],
  },
  {
    period: 'MAR 2023',
    type: 'WORK IMMERSION',
    title: 'Administrative & Document Operations',
    organization: 'Hom-Cor Marketing & Construction Services Corp.',
    result: '80 immersion hours',
    bullets: ['Supported document control, administrative coordination, transformer test records, and daily office operations.'],
  },
  {
    period: '2022 / 2023',
    type: 'COMMUNITY OPERATIONS',
    title: 'Technical & Community Programs',
    organization: 'Adamson SHS Supreme Student Government',
    result: '500 beneficiaries',
    bullets: ['Delivered a 300-guest technical seminar, essential-goods outreach, and mental-health and anti-stigma campaigns.'],
  },
];

export const experienceGallery = [
  {
    id: 'doubletime',
    organization: 'doubletime.ph',
    role: 'Product Manager & Full-Stack Developer',
    period: '2026 / Present',
    location: 'Manila & Cavite, Philippines',
    mark: 'DT',
    caption: 'Small-business systems, shipped and used.',
    href: 'https://doubletime-five.vercel.app',
    linkLabel: 'View product',
    image: null,
  },
  {
    id: 'dpwh',
    organization: 'DPWH MM2DEO',
    role: 'Network Analyst',
    period: '2025 / 2026',
    location: 'Metro Manila, Philippines',
    mark: '300',
    caption: 'Infrastructure mapped from workstation to uplink.',
    image: null,
  },
  {
    id: 'camp-raya',
    organization: 'Camp Raya',
    role: 'Event Director & Technical Operations',
    period: 'April 2025',
    location: 'Adamson University, Manila',
    mark: '100+',
    caption: 'Program, logistics, security, and A/V in one room.',
    image: null,
  },
];

export const toolkit = [
  {
    label: 'CORE',
    title: 'Daily drivers',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML / CSS', 'Vite', 'Supabase', 'PostgreSQL'],
  },
  {
    label: 'PROJECT USE',
    title: 'Also in the toolkit',
    items: ['Python', 'C#', 'Java', 'Swift / AppKit', 'Unity', 'Assembly', 'Power BI', 'RapidMiner', 'Tailwind', 'Browser Extensions'],
  },
  {
    label: 'DIRECTION',
    title: 'Currently learning',
    items: ['Zero-knowledge Proofs', 'Cybersecurity', 'Data Science', 'Applied Privacy', 'Agile / Scrum', 'Product Management'],
  },
];

export const credentials = [
  { title: 'IT Specialist — Networking', issuer: 'Pearson', issued: 'May 2026', expires: 'May 2031', id: null, category: 'INFRASTRUCTURE', featured: true, image: networkingCertificate },
  { title: 'IT Specialist — Databases', issuer: 'Certiport · Pearson VUE', issued: 'May 2025', id: 'mcYm-Dwzr', category: 'DATA', featured: true },
  { title: 'Introduction to Data Analytics', issuer: 'IBM', issued: 'Jul 2026', id: 'VMEITV29KMP5', category: 'DATA', featured: true, image: introDataAnalytics },
  { title: 'Introduction to Cybersecurity', issuer: 'Amazon Web Services', issued: 'Mar 2025', id: '8900a614-4abf-47e4-885f-25a08263ec0d', category: 'SECURITY', featured: true },
  { title: 'Testing and Debugging in .NET Core Applications', issuer: 'EDUCBA', issued: 'Jun 2026', id: 'PR7F04UV227W', category: 'ENGINEERING', featured: true, image: testingDebuggingDotnet },
  { title: 'Foundations of Project Management', issuer: 'Google', issued: 'Jul 2026', id: 'RR4M9BBQPVVP', category: 'DELIVERY', featured: true, image: foundationsProjectManagement },
  { title: 'Project Management: The Basics for Success', issuer: 'UC Irvine', issued: 'Jun 2026', id: 'YSIQ63RDW6DY', category: 'DELIVERY', image: projectManagementBasics },
  { title: 'Project Initiation and Planning', issuer: 'University of Illinois Urbana-Champaign', issued: 'Jul 2026', id: 'P4FKILKU5TEZ', category: 'DELIVERY', image: projectInitiationPlanning },
  { title: 'Project Management Methodologies', issuer: 'Packt', issued: 'Jul 2026', id: 'NPV02Z4MZDUF', category: 'DELIVERY', image: projectManagementMethodologies },
  { title: 'Performance Monitoring for Application Developers', issuer: 'Codio', issued: 'Jul 2026', id: 'J3TZ3FUKNFTJ', category: 'ENGINEERING' },
  { title: 'Foundations of IT Project Management', issuer: 'Packt', issued: 'Jul 2026', id: 'CFV4A1JPNU96', category: 'DELIVERY', image: foundationsItProjectManagement },
  { title: 'Project Execution and Control', issuer: 'Johns Hopkins University', issued: 'Jul 2026', id: 'G8TRMJ2UPFKQ', category: 'DELIVERY', image: projectExecutionControl },
  { title: 'Introduction to Agile Development and Scrum', issuer: 'IBM', issued: 'Jul 2026', id: '4I84329MLWYD', category: 'DELIVERY', image: introAgileScrum },
  { title: 'Scrum Master Certification: Scrum Methodologies', issuer: 'LearnQuest', issued: 'Jul 2026', id: 'CI4G0QTGKR9K', category: 'DELIVERY', image: scrumMaster },
  { title: 'Business Analysis Mastery', issuer: 'Starweaver', issued: 'Jul 2026', id: '9WXWIWADHWPZ', category: 'DELIVERY', image: businessAnalysisMastery },
  { title: 'Business Analysis and CAPM Exam Preparation', issuer: 'Packt', issued: 'Jul 2026', id: 'ZCN7C8BKTBCP', category: 'DELIVERY', image: businessAnalysisCapm },
  { title: 'Cybersecurity Foundations for Risk Management', issuer: 'Kennesaw State University', issued: 'Jul 2026', id: 'TL5NX7XSSCZ5', category: 'SECURITY', image: cybersecurityRiskManagement },
  { title: 'Project Management', issuer: 'Coursera', issued: null, id: '8uDTkJgzTmGg05CYM05hKw', category: 'DELIVERY' },
  { title: 'IT Risk Assessment Practices', issuer: 'Packt', issued: 'Jul 2026', id: 'WXYV29RZ0BY8', category: 'SECURITY', image: itRiskAssessment },
  { title: 'Managing IT Project Scope, Schedule, and Resources', issuer: 'Packt', issued: 'Jul 2026', id: 'CZZLL0Q8P5T4', category: 'DELIVERY', image: managingItProjectScope },
];
