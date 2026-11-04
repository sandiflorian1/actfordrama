export type DoodleKind = 'star' | 'masks' | 'ticket' | 'spark'

export function Doodle({ kind, className }: { kind: DoodleKind; className?: string }) {
  const anim = kind === 'ticket' ? '' : kind === 'masks' ? 'animate-float' : 'animate-twinkle'
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${anim} ${className ?? ''}`}
      aria-hidden="true"
    >
      {kind === 'star' && (
        <g stroke="var(--foreground)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round">
          <path d="M28 10 L28 46" />
          <path d="M10 28 L46 28" />
          <path d="M17 17 L39 39" stroke="var(--primary)" />
          <path d="M39 17 L17 39" stroke="var(--primary)" />
        </g>
      )}
      {kind === 'spark' && (
        <g stroke="var(--primary)" strokeWidth="2" strokeLinecap="round">
          <path d="M28 14 L30.5 25.5 L42 28 L30.5 30.5 L28 42 L25.5 30.5 L14 28 L25.5 25.5 Z" fill="var(--primary)" fillOpacity="0.15" stroke="var(--foreground)" strokeOpacity="0.5" />
          <path d="M44 10 L45 13 L48 14 L45 15 L44 18 L43 15 L40 14 L43 13 Z" fill="var(--primary)" stroke="none" />
        </g>
      )}
      {kind === 'masks' && (
        <g
          stroke="var(--foreground)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(6 8)"
        >
          <path d="M2 4 h22 v16 c0 8 -5 13 -11 13 c-6 0 -11 -5 -11 -13 Z" fill="none" />
          <circle cx="8" cy="13" r="1.6" fill="var(--foreground)" fillOpacity="0.5" stroke="none" />
          <circle cx="18" cy="13" r="1.6" fill="var(--foreground)" fillOpacity="0.5" stroke="none" />
          <path d="M9 24 q4 3 8 0" />
          <g transform="rotate(14 34 16)">
            <path d="M26 8 h20 v14 c0 8 -4 12 -10 12 c-6 0 -10 -4 -10 -12 Z" fill="none" />
            <circle cx="32" cy="16" r="1.6" fill="var(--foreground)" fillOpacity="0.5" stroke="none" />
            <circle cx="40" cy="16" r="1.6" fill="var(--foreground)" fillOpacity="0.5" stroke="none" />
            <path d="M32 26 q4 -4 8 0" stroke="var(--primary)" strokeOpacity="0.9" />
          </g>
        </g>
      )}
      {kind === 'ticket' && (
        <g
          stroke="var(--foreground)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(-8 28 28)"
        >
          <path
            d="M8 20 h40 v8 a5 5 0 0 0 0 10 v8 h-40 v-8 a5 5 0 0 0 0 -10 Z"
            fill="none"
          />
          <path d="M32 20 L32 46" strokeDasharray="3 4" />
          <path d="M14 28 h12 M14 34 h12" stroke="var(--primary)" />
        </g>
      )}
    </svg>
  )
}
