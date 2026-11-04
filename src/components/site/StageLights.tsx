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

export function StageLights() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
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
