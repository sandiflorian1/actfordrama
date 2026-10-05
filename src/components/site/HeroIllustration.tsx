export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* light cone */}
      <path
        d="M340 90 L180 340 L430 350 Z"
        fill="var(--primary)"
        fillOpacity="0.28"
        stroke="var(--foreground)"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* spotlight body */}
      <g transform="rotate(28 340 90)">
        <rect x="300" y="60" width="80" height="55" rx="10" fill="var(--card)" stroke="var(--foreground)" strokeWidth="2.5" />
        <path d="M300 68 h80 M300 107 h80" stroke="var(--foreground)" strokeWidth="2" strokeOpacity="0.5" />
        <circle cx="340" cy="87" r="16" fill="var(--primary)" fillOpacity="0.6" stroke="var(--foreground)" strokeWidth="2.5" />
      </g>
      {/* tripod */}
      <path d="M345 130 L345 250 M345 250 L300 330 M345 250 L345 335 M345 250 L390 330" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="345" cy="128" r="7" fill="var(--card)" stroke="var(--foreground)" strokeWidth="2.5" />

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
