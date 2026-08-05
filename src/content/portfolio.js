import resumeUrl from '../../information/TAGLE-CV-2025.pdf?url';

export const profile = {
  displayName: 'Kyann Tagle',
  fullName: 'Jel Kyann J. Tagle',
  handle: 'keynowawa',
  location: 'Manila, Philippines',
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
    id: 'anosked',
    number: '01',
    title: 'AnoSked',
    eyebrow: 'Local-first student planner',
    role: 'Creator · Full-stack development',
    problem: 'Enrollment information is difficult to turn into a useful weekly plan without repetitive manual entry.',
    solution: 'A privacy-conscious planner that parses enrollment text into subjects, rooms, tasks, timetable views, calendar files, and shareable schedule images.',
    proof: 'Works offline after loading, requires no account, and keeps schedule data on the user’s device.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Tesseract.js'],
    source: 'https://github.com/keynowawa/AnoSked',
    demo: 'https://anosked.vercel.app',
    visual: 'schedule',
    accent: '#5b8cff',
  },
  {
    id: 'vera',
    number: '02',
    title: 'VERA Vault',
    eyebrow: 'Privacy-preserving review verification',
    role: 'Product Manager · Full-stack Developer',
    problem: 'Online marketplaces need credible purchase signals without asking shoppers to surrender unnecessary personal information.',
    solution: 'A team-built verification ecosystem exploring digital receipts, privacy-preserving proofs, and a browser extension for verified reviews.',
    proof: 'Delivered as a Chrome extension, documentation site, and VERA-enabled Shopfinity demonstration environment.',
    stack: ['Product Strategy', 'JavaScript', 'Chrome MV3', 'Privacy Systems'],
    source: 'https://github.com/keynowawa/vera-landing-page',
    demo: 'https://chromewebstore.google.com/detail/aggmkpdjbemhoaaehdahcejmmomkleeo',
    visual: 'verification',
    accent: '#8bb3ff',
  },
  {
    id: 'doubletime',
    number: '03',
    title: 'DoubleTime',
    eyebrow: 'Storefront and multi-device POS',
    role: 'Product engineering',
    problem: 'A growing food business needs its customer storefront, staff access, product data, and order flow to stay synchronized across devices.',
    solution: 'A shared commerce system with separate customer and POS deployments, realtime data, staff roles, and resilient offline order handling.',
    proof: 'Supports multi-iPad workflows, row-level security, atomic order numbering, and queued orders that recover after reconnection.',
    stack: ['TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    source: 'https://github.com/keynowawa/doubletime',
    demo: 'https://doubletime-five.vercel.app',
    visual: 'pos',
    accent: '#55d6ff',
  },
];

export const experiments = [
  {
    title: 'Tetris, But Harder',
    description: 'A browser game exploring alternate rules, including time trial, flashlight, chromatic cascade, and reversed controls.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/keynowawa/tetris',
  },
  {
    title: 'BubbleWrap',
    description: 'A native macOS interaction study using pressure input, haptics, sound, and hand-drawn AppKit rendering.',
    stack: ['Swift', 'AppKit'],
    href: 'https://github.com/keynowawa/bubblewrap',
  },
  {
    title: 'Numerical Methods',
    description: 'Python implementations of interpolation, splines, numerical integration, and matrix-based methods.',
    stack: ['Python', 'Numerical Computing'],
    href: 'https://github.com/keynowawa',
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
    description: 'Continuing as a third-year Computer Science student after completing two years in the CS and Information Engineering dual-degree track.',
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
    items: ['Python', 'C#', 'Java', 'Swift / AppKit', 'Tailwind', 'Drizzle ORM', 'Browser Extensions', 'Offline-first PWAs'],
  },
  {
    label: 'DIRECTION',
    title: 'Learning deeper',
    items: ['Data Analytics', 'Cybersecurity', 'Agile / Scrum', 'Product Management', 'Applied Privacy', 'Cloud Deployment'],
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
