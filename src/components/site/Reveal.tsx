import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  variant?: 'rise' | 'ticket' | 'polaroid' | 'stage'
  style?: CSSProperties
}

export function Reveal({ children, delay = 0, className, variant = 'rise', style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reveal = () => {
      setVisible(true)
      cleanup()
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold: 0.15, rootMargin: '0px 0px -15% 0px' },
    )
    const onScroll = () => {
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atPageEnd && el.getBoundingClientRect().top < window.innerHeight) reveal()
    }
    const cleanup = () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
    io.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    return cleanup
  }, [])

  return (
    <div
      ref={ref}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      className={cn(
        'reveal',
        variant !== 'rise' && `reveal-${variant}`,
        visible && 'is-visible',
        className,
      )}
    >
      {children}
    </div>
  )
}
