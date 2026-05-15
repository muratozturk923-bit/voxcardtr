const iconPaths = {
  tap: (
    <path
      d="M12 4.75a2.25 2.25 0 0 1 2.25 2.25V12m-4.5-1.5V6.75a1.5 1.5 0 0 0-3 0V13m0-2.25V8.25a1.5 1.5 0 0 0-3 0v6.5a3.5 3.5 0 0 0 3.5 3.5h4.25a4.5 4.5 0 0 0 4.5-4.5V9.75a1.5 1.5 0 0 0-3 0V12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  qr: (
    <path
      d="M5 5h4v4H5V5Zm0 10h4v4H5v-4Zm10-10h4v4h-4V5Zm-2 8h2m2 0h2m-4 2v2m4-2v4m-6-2h2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  refresh: (
    <path
      d="M17.5 8.5A6.5 6.5 0 0 0 6.98 6.5M6.5 6.5v-3m0 3h3m7.5 11a6.5 6.5 0 0 1-10.52-2M17.5 17.5v3m0-3h-3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  link: (
    <path
      d="M10 14 8.5 15.5a3 3 0 1 1-4.24-4.24L7 8.5m7 1 1.5-1.5a3 3 0 1 1 4.24 4.24L17 15.5M8 12h8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  spark: (
    <path
      d="m12 3 1.75 4.25L18 9l-4.25 1.75L12 15l-1.75-4.25L6 9l4.25-1.75L12 3Zm6 10.5.75 1.75 1.75.75-1.75.75-.75 1.75-.75-1.75-1.75-.75 1.75-.75.75-1.75ZM5.5 14l1 2.5L9 17.5l-2.5 1L5.5 21l-1-2.5L2 17.5l2.5-1 1-2.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  bank: (
    <path
      d="M4 9.5 12 5l8 4.5M5.5 10.75h13M6 18.5h12M7 10.75v7.75m5-7.75v7.75m5-7.75v7.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  document: (
    <path
      d="M8 4.75h5.5L18 9.25v9a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 18.25v-11.75A1.75 1.75 0 0 1 7.75 4.75ZM13 4.75v4.5h5M9 13h6m-6 3h6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  team: (
    <path
      d="M9 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.5 18a4.5 4.5 0 0 1 9 0m2.5 0a3.5 3.5 0 0 0-2.8-3.43"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  arrow: (
    <path d="M8 7.5 16.5 16m0 0V9.5m0 6.5H10" strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: (
    <path
      d="M12 4.5 18 7v4.7c0 3.55-2.18 6.77-6 7.8-3.82-1.03-6-4.25-6-7.8V7l6-2.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function IconBadge({ icon = 'arrow', className = '' }) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d8ba7a]/25 bg-white/6 text-[#e5c887] shadow-[0_10px_30px_rgba(6,6,6,0.18)] backdrop-blur-xl ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5 stroke-current"
        strokeWidth="1.5"
      >
        {iconPaths[icon]}
      </svg>
    </span>
  );
}

export default IconBadge;
