const DUST: { left: string; top: string; size: number; opacity: number; duration: number; delay: number }[] = [
  { left: '6%', top: '30%', size: 2, opacity: 0.5, duration: 9, delay: -1 },
  { left: '12%', top: '62%', size: 1.5, opacity: 0.4, duration: 11, delay: -4 },
  { left: '18%', top: '44%', size: 2.5, opacity: 0.7, duration: 7, delay: -6 },
  { left: '24%', top: '70%', size: 1.5, opacity: 0.3, duration: 12, delay: -2 },
  { left: '30%', top: '26%', size: 2, opacity: 0.6, duration: 8, delay: -8 },
  { left: '38%', top: '55%', size: 3, opacity: 0.8, duration: 6.5, delay: -3 },
  { left: '46%', top: '36%', size: 1.5, opacity: 0.45, duration: 10, delay: -9 },
  { left: '52%', top: '66%', size: 2, opacity: 0.55, duration: 9.5, delay: -5 },
  { left: '60%', top: '28%', size: 2.5, opacity: 0.65, duration: 7.5, delay: -7 },
  { left: '66%', top: '58%', size: 1.5, opacity: 0.35, duration: 11.5, delay: -10 },
  { left: '74%', top: '40%', size: 2, opacity: 0.6, duration: 8.5, delay: -2.5 },
  { left: '80%', top: '68%', size: 3, opacity: 0.5, duration: 10.5, delay: -6.5 },
  { left: '86%', top: '32%', size: 1.5, opacity: 0.4, duration: 9, delay: -11 },
  { left: '92%', top: '52%', size: 2, opacity: 0.7, duration: 6, delay: -4.5 },
]

const SPARKLES: { left: string; top: string; size: number; duration: number; delay: number }[] = [
  { left: '15%', top: '48%', size: 10, duration: 3.5, delay: -0.5 },
  { left: '35%', top: '30%', size: 8, duration: 4.5, delay: -2 },
  { left: '57%', top: '60%', size: 12, duration: 3, delay: -1.2 },
  { left: '78%', top: '38%', size: 9, duration: 5, delay: -3.4 },
  { left: '88%', top: '62%', size: 7, duration: 4, delay: -2.8 },
]

function SmallSpot({ gradientId, duration, delay }: { gradientId: string; duration: number; delay: number }) {
  return (
    <div
      className="animate-sweep origin-top"
      style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      <svg width="90" height="560" viewBox="0 0 90 560" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#e0a070" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#e0a070" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* hanging rod */}
        <path d="M45 0 L45 14" stroke="#f4ecdd" strokeOpacity="0.45" strokeWidth="2" />
        {/* cone */}
        <path d="M38 44 L52 44 L82 560 L8 560 Z" fill={`url(#${gradientId})`} />
        {/* lamp: barrel + barn doors + lens, lens pointing down */}
        <g
          transform="translate(45 30) rotate(90) scale(0.42)"
          stroke="#f4ecdd"
          strokeOpacity="0.45"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M3 -27 L34 -56 L44 -44 L8 -22 Z" fill="#241a13" />
          <path d="M3 27 L34 56 L44 44 L8 22 Z" fill="#241a13" />
          <path d="M0 -27 L-50 -21 Q-60 -21 -60 -11 L-60 11 Q-60 21 -50 21 L0 27 Z" fill="#241a13" />
          <path d="M-48 -15 L-48 15 M-42 -16 L-42 16 M-36 -17 L-36 17" strokeOpacity="0.3" />
          <ellipse cx="0" cy="0" rx="9" ry="28" fill="#241a13" />
        </g>
      </svg>
    </div>
  )
}

export function StageLights() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute top-0 left-[8%] hidden md:block">
        <SmallSpot gradientId="stage-light-a" duration={11} delay={0} />
      </div>
      <div className="absolute top-0 left-[46%] hidden md:block">
        <SmallSpot gradientId="stage-light-b" duration={14} delay={-7} />
      </div>

      {DUST.map((d, i) => (
        <span
          key={i}
          className="animate-drift absolute rounded-full bg-[#ffe9c7]"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}

      {SPARKLES.map((s, i) => (
        <svg
          key={i}
          className="animate-twinkle absolute text-[#e0a070]"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z" />
        </svg>
      ))}
    </div>
  )
}
