export function LogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="16" fill="var(--background)"/>
      <path
        d="M18 18 L32 32 L18 46"
        fill="none"
        stroke="#FFFF22"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"/>
      <path
        d="M46 18 L32 32 L46 46"
        fill="none"
        stroke="#a3e635"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"/>
    </svg>
  );
}
