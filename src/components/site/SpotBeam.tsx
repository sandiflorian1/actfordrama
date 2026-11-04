export function SpotBeam({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 640"
      preserveAspectRatio="xMidYMin meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="beam" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#e0a070" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#b0572e" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="lens-glow">
          <stop offset="0%" stopColor="#ffe9c7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e0a070" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M-68 0 L-140 14"
        transform="translate(330 95) rotate(102) scale(1.3)"
        stroke="#f4ecdd"
        strokeOpacity="0.45"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g className="origin-[348px_8px] animate-sway transform-view">
        <g transform="rotate(45 348 8)">
          <path d="M302 90 L358 102 L425 963 L-85 970 Z" fill="url(#beam)" />
          <g
            transform="translate(330 95) rotate(102) scale(1.3)"
            stroke="#f4ecdd"
            strokeOpacity="0.45"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path d="M-28 -38 L-68 -38 L-68 38 L-28 38" fill="none" strokeWidth="1.6" />
            <path d="M3 -27 L34 -56 L44 -44 L8 -22 Z" fill="#241a13" />
            <path d="M3 27 L34 56 L44 44 L8 22 Z" fill="#241a13" />
            <path d="M0 -27 L-50 -21 Q-60 -21 -60 -11 L-60 11 Q-60 21 -50 21 L0 27 Z" fill="#241a13" />
            <path d="M-48 -15 L-48 15 M-42 -16 L-42 16 M-36 -17 L-36 17" strokeOpacity="0.3" />
            <circle cx="-28" cy="-38" r="4" fill="#241a13" />
            <circle cx="-28" cy="38" r="4" fill="#241a13" />
            <ellipse cx="0" cy="0" rx="9" ry="28" fill="#241a13" />
            <ellipse cx="10" cy="0" rx="34" ry="40" fill="url(#lens-glow)" stroke="none" />
          </g>
        </g>
      </g>
    </svg>
  )
}
