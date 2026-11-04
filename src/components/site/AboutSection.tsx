import { Reveal } from './Reveal'
import { Doodle } from './Doodles'
import { HeroIllustration } from './HeroIllustration'
import type { SiteSettings } from '@/sanity/queries'

export function AboutSection({ settings }: { settings: SiteSettings }) {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-2">
          <p className="text-[13px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
            Despre
          </p>
          <Doodle kind="masks" className="pointer-events-none mt-4 hidden w-12 md:block" />
        </Reveal>

        <div className="md:col-span-6">
          <Reveal delay={100}>
            <p className="font-serif text-3xl leading-snug md:text-4xl">{settings.aboutTitle || settings.tagline}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {settings.aboutDescription || settings.heroDescription}
            </p>
          </Reveal>
        </div>

        <Reveal delay={300} className="hidden self-center md:col-span-4 md:block">
          <HeroIllustration className="w-full max-w-sm opacity-80" />
        </Reveal>
      </div>
    </section>
  )
}
