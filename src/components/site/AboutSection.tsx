import { Reveal } from './Reveal'
import { HeroIllustration } from './HeroIllustration'
import type { SiteSettings } from '@/sanity/queries'

export function AboutSection({ settings }: { settings: SiteSettings }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
            Despre
          </p>
        </Reveal>

        <div className="md:col-span-6">
          <Reveal delay={100}>
            <p className="font-serif text-3xl leading-snug md:text-4xl">{settings.tagline}.</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {settings.heroDescription}
            </p>
          </Reveal>
        </div>

        <Reveal delay={300} className="hidden md:col-span-3 md:block">
          <HeroIllustration className="w-full max-w-52 opacity-80" />
        </Reveal>
      </div>
    </section>
  )
}
