export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 40 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-light-cone" gradientUnits="userSpaceOnUse" x1="348" y1="118" x2="20" y2="205">
          <stop offset="0" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* tripod */}
      <path d="M395 105 L395 250 M395 250 L355 335 M395 250 L395 338 M395 250 L435 335" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round" />
      {/* light cone */}
      <path d="M341 92 L355 144 L40 300 L0 110 Z" fill="url(#hero-light-cone)" />
      {/* spotlight (fresnel with barn doors), lens at origin, beam along +x */}
      <g transform="translate(348 118) rotate(165)" stroke="var(--foreground)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        {/* barn doors */}
        <path d="M3 -27 L30 -50 L37 -41 L7 -23 Z" fill="var(--card)" />
        <path d="M3 27 L30 50 L37 41 L7 23 Z" fill="var(--card)" />
        {/* barrel */}
        <path d="M0 -27 L-50 -21 Q-60 -21 -60 -11 L-60 11 Q-60 21 -50 21 L0 27 Z" fill="var(--card)" />
        {/* cooling fins */}
        <path d="M-48 -15 L-48 15 M-42 -16 L-42 16 M-36 -17 L-36 17" strokeWidth="2" strokeOpacity="0.5" />
        {/* yoke arm + pivot knob */}
        <path d="M-28 0 L-28 -40" strokeWidth="3" />
        <circle cx="-28" cy="0" r="6" fill="var(--card)" />
        {/* bezel + fresnel lens */}
        <ellipse cx="0" cy="0" rx="9" ry="28" fill="var(--card)" />
        <ellipse cx="1" cy="0" rx="6" ry="22" fill="var(--primary)" fillOpacity="0.85" />
        <ellipse cx="1" cy="0" rx="3.5" ry="14" strokeWidth="1.5" strokeOpacity="0.45" />
        <ellipse cx="1" cy="0" rx="1.5" ry="6" strokeWidth="1.5" strokeOpacity="0.45" />
      </g>

      {/* stars */}
      <g stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round">
        <path d="M220 60 l0 16 M212 68 l16 0" />
        <path d="M440 90 l0 14 M433 97 l14 0" />
      </g>
      <circle cx="235" cy="80" r="3" fill="var(--primary)" />
      <circle cx="445" cy="140" r="3" fill="var(--foreground)" fillOpacity="0.5" />
    </svg>
  )
}
