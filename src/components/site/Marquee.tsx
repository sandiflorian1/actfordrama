import { useEffect, useRef } from 'react'

export function Marquee({ items }: { items: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = trackRef.current
    if (!el) return
    const animation = el.getAnimations()[0]
    if (!animation) return

    let lastY = window.scrollY
    let lastT = performance.now()
    let target = 1
    let rate = 1
    let raf = 0
    let running = false

    const tick = () => {
      rate += (target - rate) * 0.1
      target += (1 - target) * 0.08
      animation.playbackRate = rate
      if (Math.abs(rate - 1) < 0.01 && Math.abs(target - 1) < 0.01) {
        animation.playbackRate = 1
        running = false
        return
      }
      raf = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      const now = performance.now()
      const dt = now - lastT
      const dy = window.scrollY - lastY
      lastY = window.scrollY
      lastT = now
      if (dt <= 0) return
      const velocity = Math.abs(dy) / dt
      target = 1 + Math.min(velocity * 6, 5)
      if (!running) {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      animation.playbackRate = 1
    }
  }, [])

  const row = Array.from({ length: 4 }, (_, r) =>
    items.map((item, i) => (
      <span key={`${r}-${i}`}>
        <span className="inline-block transition-[rotate,translate,color] duration-300 hover:-translate-y-0.5 hover:-rotate-6 hover:text-[#17110c]">
          {item}
        </span>
        <span aria-hidden="true" className="mx-4">
          ·
        </span>
      </span>
    )),
  )

  return (
    <div className="overflow-hidden border-y border-foreground/10 bg-primary py-3.5 text-primary-foreground">
      <div ref={trackRef} className="flex w-max animate-marquee whitespace-nowrap">
        <span className="font-serif text-sm tracking-[0.25em] uppercase">{row}</span>
        <span className="font-serif text-sm tracking-[0.25em] uppercase" aria-hidden="true">
          {row}
        </span>
      </div>
    </div>
  )
}
