const paths = {
  arrowDownRight: <><path d="M7 7 17 17" /><path d="M17 7v10H7" /></>,
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
  code: <><path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" /></>,
  download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4" /><path d="M5 21h14" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></>,
  mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
  minus: <path d="M5 12h14" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
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
