const paths = {
  arrowDownRight: <><path d="M7 7 17 17" /><path d="M17 7v10H7" /></>,
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
  code: <><path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" /></>,
  download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4" /><path d="M5 21h14" /></>,
  github: <path fill="currentColor" stroke="none" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.5a9.2 9.2 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.3 10.3 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />,
  linkedin: <path fill="currentColor" stroke="none" d="M5.37 8.2H1.74V21h3.63V8.2ZM3.55 2A2.12 2.12 0 1 0 3.5 6.24 2.12 2.12 0 0 0 3.55 2ZM21 13.67c0-3.86-2.06-5.66-4.81-5.66a4.15 4.15 0 0 0-3.77 2.07h-.05V8.2H8.74V21h3.63v-6.33c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.4V21H21v-7.33Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></>,
  mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
  minus: <path d="M5 12h14" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  resume: <><path d="M6 2h8l4 4v16H6Z" /><path d="M14 2v5h4M9 12h6M9 16h6" /></>,
  searchPrompt: <><circle cx="10.5" cy="10.5" r="6.25" /><path d="m15.1 15.1 5.4 5.4" /></>,
};

export default function Glyph({ name, size = 18, className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {paths[name]}
    </svg>
  );
}
