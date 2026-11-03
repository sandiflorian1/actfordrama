import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from './Reveal'
import { SpotBeam } from './SpotBeam'
import type { SiteSettings } from '@/sanity/queries'

export function Hero({ settings }: { settings: SiteSettings }) {
  const lines = (settings.heroTitle || '').split('\n').filter(Boolean)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#17110c] text-[#f4ecdd]">
      {/* animated spotlight beam */}
      <div className="pointer-events-none absolute top-24 right-0 bottom-0 w-1/2 md:w-[38%]">
        <SpotBeam className="h-full w-full md:overflow-visible" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#17110c] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 md:px-8">
        <Reveal delay={0}>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-[#f4ecdd]/50 uppercase">
            Studio de teatru{settings.location && ` · ${settings.location}`}
          </p>
        </Reveal>

        <h1 className="mt-6 font-hand text-[16vw] leading-[0.9] font-bold tracking-tight uppercase sm:text-[12vw] lg:text-[8.5rem]">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className="block animate-hero-line"
                style={{ animationDelay: `${150 + i * 130}ms` }}
              >
                {line.split(/\b(IV)\b/).map((part, j) =>
                  part === 'IV' ? (
                    <span key={j} className="text-primary">
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal delay={650} className="max-w-2xl">
            <p className="font-serif text-2xl text-[#e0a070] italic md:text-3xl">{settings.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-[#f4ecdd]/60">
              {settings.heroDescription}
            </p>
          </Reveal>

          <Reveal delay={800} className="flex shrink-0 flex-wrap items-center gap-4">
            {settings.ctaPrimaryLabel && (
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/85"
              >
                <a href={settings.ctaPrimaryHref || '#classes'}>
                  {settings.ctaPrimaryLabel}
                  <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
            )}
            {settings.ctaSecondaryLabel && (
              <a
                href={settings.ctaSecondaryHref || '#contact'}
                className="group inline-flex items-center gap-1.5 border-b border-[#f4ecdd]/30 pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {settings.ctaSecondaryLabel}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </Reveal>
        </div>

        <div className="mt-14 flex items-center justify-between">
          {settings.enrollmentNote ? (
            <Reveal delay={1000}>
              <p className="flex items-center gap-2 text-xs text-[#f4ecdd]/50">
                <Sparkles className="size-4 text-primary" />
                {settings.enrollmentNote}
              </p>
            </Reveal>
          ) : (
            <span />
          )}
          <div className="hidden flex-col items-center gap-2 md:flex">
            <span className="text-[10px] tracking-[0.3em] text-[#f4ecdd]/40 uppercase">
              derulează
            </span>
            <span className="h-10 w-px origin-top animate-scroll-hint bg-[#f4ecdd]/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
