import resumeUrl from '../../information/TAGLE-CV-2025.pdf?url';

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
        href: 'https://github.com/keynowawa/tetris',
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
    year: '2026 — NOW',
    type: 'PRODUCT WORK',
    title: 'AnoSked, VERA Vault, and DoubleTime',
    description: 'Building practical products across local-first student planning, privacy-preserving verification, and multi-device commerce.',
  },
  {
    year: 'AUG 2025 — NOW',
    type: 'EDUCATION',
    title: 'BS Computer Science at Adamson University',
    description: 'Continuing as a fourth-year Computer Science student after completing two years in the CS and Information Engineering dual-degree track.',
  },
  {
    year: '2025',
    type: 'PROJECTS + RESEARCH',
    title: 'Systems with a purpose',
    description: 'Developed a motorcycle rental platform and Tsuperman narrative game, and proposed blockchain plus zero-knowledge proofs for credential verification.',
  },
  {
    year: 'APR 2025',
    type: 'EVENT LEADERSHIP',
    title: 'Camp Raya — Event Head',
    description: 'Led a multi-department formation program for 100+ students that was recognized among Adamson’s Top 10 Spiritual Events of the year.',
  },
  {
    year: 'JUN 2024 — 2025',
    type: 'FINANCE LEADERSHIP',
    title: 'HIRAYA — Executive Treasurer',
    description: 'Managed ₱27,000+ across six events, raised ₱16,612 for Bahay Aruga, and closed the term with records fully reconciled with student affairs.',
  },
  {
    year: 'MAY 2024',
    type: 'FINANCE',
    title: 'CWTS Outreach — Finance Committee Head',
    description: 'Handled the outreach budget, allocated funds under tight constraints, and prepared the final liquidation report.',
  },
  {
    year: '2023 — 2024',
    type: 'FINANCE OPERATIONS',
    title: 'Academic Scholars Alliance — Junior Treasurer',
    description: 'Supported budget requests, reimbursements, liquidation records, receipt verification, and officer-penalty tracking.',
  },
  {
    year: 'MAR 2023',
    type: 'WORK IMMERSION',
    title: 'HOM-COR Marketing & Construction',
    description: 'Completed 80 hours of immersion across document management, transformer test records, and publication material production.',
  },
  {
    year: '2022 — 2023',
    type: 'STUDENT SERVICE',
    title: 'Leadership, service, and communications',
    description: 'Supported student government events, Red Cross youth activities, mental-health advocacy, and a 500-beneficiary Christmas outreach.',
  },
];

export const toolkit = [
  {
    label: 'CORE',
    title: 'Build with',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML / CSS', 'Vite', 'Supabase', 'PostgreSQL'],
  },
  {
    label: 'PROJECT USE',
    title: 'Worked with',
    items: ['Python', 'C#', 'Java', 'Swift / AppKit', 'Unity', 'Assembly', 'Power BI', 'RapidMiner', 'Tailwind', 'Browser Extensions'],
  },
  {
    label: 'DIRECTION',
    title: 'Learning deeper',
    items: ['Zero-knowledge Proofs', 'Cybersecurity', 'Data Science', 'Applied Privacy', 'Agile / Scrum', 'Product Management'],
  },
];

export const credentials = [
  { title: 'IT Specialist — Networking', issuer: 'Pearson', issued: 'May 2026', expires: 'May 2031', id: null, category: 'INFRASTRUCTURE', featured: true },
  { title: 'IT Specialist — Databases', issuer: 'Certiport · Pearson VUE', issued: 'May 2025', id: 'mcYm-Dwzr', category: 'DATA', featured: true },
  { title: 'Introduction to Data Analytics', issuer: 'IBM', issued: 'Jul 2026', id: 'VMEITV29KMP5', category: 'DATA', featured: true },
  { title: 'Introduction to Cybersecurity', issuer: 'Amazon Web Services', issued: 'Mar 2025', id: '8900a614-4abf-47e4-885f-25a08263ec0d', category: 'SECURITY', featured: true },
  { title: 'Testing and Debugging in .NET Core Applications', issuer: 'EDUCBA', issued: 'Jun 2026', id: 'PR7F04UV227W', category: 'ENGINEERING', featured: true },
  { title: 'Foundations of Project Management', issuer: 'Google', issued: 'Jul 2026', id: 'RR4M9BBQPVVP', category: 'DELIVERY', featured: true },
  { title: 'Project Management: The Basics for Success', issuer: 'UC Irvine', issued: 'Jun 2026', id: 'YSIQ63RDW6DY', category: 'DELIVERY' },
  { title: 'Project Initiation and Planning', issuer: 'University of Illinois Urbana-Champaign', issued: 'Jul 2026', id: 'P4FKILKU5TEZ', category: 'DELIVERY' },
  { title: 'Project Management Methodologies', issuer: 'Packt', issued: 'Jul 2026', id: 'NPV02Z4MZDUF', category: 'DELIVERY' },
  { title: 'Performance Monitoring for Application Developers', issuer: 'Codio', issued: 'Jul 2026', id: 'J3TZ3FUKNFTJ', category: 'ENGINEERING' },
  { title: 'Foundations of IT Project Management', issuer: 'Packt', issued: 'Jul 2026', id: 'CFV4A1JPNU96', category: 'DELIVERY' },
  { title: 'Project Execution and Control', issuer: 'Johns Hopkins University', issued: 'Jul 2026', id: 'G8TRMJ2UPFKQ', category: 'DELIVERY' },
  { title: 'Introduction to Agile Development and Scrum', issuer: 'IBM', issued: 'Jul 2026', id: '4I84329MLWYD', category: 'DELIVERY' },
  { title: 'Scrum Master Certification: Scrum Methodologies', issuer: 'LearnQuest', issued: 'Jul 2026', id: 'CI4G0QTGKR9K', category: 'DELIVERY' },
  { title: 'Business Analysis Mastery', issuer: 'Starweaver', issued: 'Jul 2026', id: '9WXWIWADHWPZ', category: 'DELIVERY' },
  { title: 'Business Analysis and CAPM Exam Preparation', issuer: 'Packt', issued: 'Jul 2026', id: 'ZCN7C8BKTBCP', category: 'DELIVERY' },
  { title: 'Cybersecurity Foundations for Risk Management', issuer: 'Kennesaw State University', issued: 'Jul 2026', id: 'TL5NX7XSSCZ5', category: 'SECURITY' },
  { title: 'Project Management', issuer: 'Coursera', issued: null, id: '8uDTkJgzTmGg05CYM05hKw', category: 'DELIVERY' },
];
