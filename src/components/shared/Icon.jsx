const paths = {
  arrow: <path d="M5 12h13m-5.5-5.5L19 12l-6.5 5.5" />,
  chevron: <path d="m7 10 5 5 5-5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
}

export function Icon({ name, className = '' }) {
  const shape = paths[name]
  if (!shape) return null

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shape}
    </svg>
  )
}
