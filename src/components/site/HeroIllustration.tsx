export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-light-cone" gradientUnits="userSpaceOnUse" x1="348" y1="118" x2="270" y2="345">
          <stop offset="0" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {/* tripod */}
      <path d="M395 105 L395 250 M395 250 L355 335 M395 250 L395 338 M395 250 L435 335" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round" />
      {/* light cone */}
      <path
        d="M327 111 L368 126 L400 350 L148 342 Z"
        fill="url(#hero-light-cone)"
        stroke="var(--foreground)"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* spotlight (fresnel with barn doors), lens at origin, beam along +x */}
      <g transform="translate(348 118) rotate(110)" stroke="var(--foreground)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
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

      {/* curtain, left */}
      <path
        d="M60 40 C95 55 120 55 150 40 L150 250 C120 265 95 265 60 250 Z"
        fill="var(--card)"
        stroke="var(--foreground)"
        strokeWidth="2.5"
      />
      <path d="M105 52 L105 258" stroke="var(--foreground)" strokeWidth="2" strokeOpacity="0.4" />
      <path d="M60 150 C85 165 125 165 150 150" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
      {/* curtain rod */}
      <path d="M45 38 h125" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="round" />

      {/* theater masks, right */}
      <g transform="translate(405 180)" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M10 0 h44 v34 c0 14 -9 24 -22 24 c-13 0 -22 -10 -22 -24 Z" fill="var(--card)" />
        <circle cx="24" cy="20" r="3" fill="var(--foreground)" />
        <circle cx="40" cy="20" r="3" fill="var(--foreground)" />
        <path d="M24 38 q8 6 16 0" />
        <path d="M56 14 l14 -8 v34 c0 12 -6 20 -14 20 Z" fill="var(--card)" transform="rotate(12 60 20)" />
      </g>

      {/* stars */}
      <g stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round">
        <path d="M220 60 l0 16 M212 68 l16 0" />
        <path d="M440 90 l0 14 M433 97 l14 0" />
        <path d="M160 130 l0 12 M154 136 l12 0" stroke="var(--primary)" />
      </g>
      <circle cx="235" cy="95" r="3" fill="var(--primary)" />
      <circle cx="150" cy="90" r="3" fill="var(--foreground)" fillOpacity="0.5" />
      <circle cx="445" cy="140" r="3" fill="var(--foreground)" fillOpacity="0.5" />

      {/* sprigs */}
      <g stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M95 330 q-15 -30 0 -60" />
        <path d="M95 315 q-18 -5 -24 -20 M95 300 q16 -5 22 -18 M95 285 q-16 -3 -22 -16" />
        <path d="M415 345 q15 -25 0 -50" />
        <path d="M415 332 q16 -4 22 -18 M415 318 q-15 -3 -20 -15" />
      </g>
    </svg>
  )
}
