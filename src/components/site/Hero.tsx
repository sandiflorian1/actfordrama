import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroIllustration } from './HeroIllustration'
import { urlFor } from '@/sanity/image'
import type { SiteSettings } from '@/sanity/queries'
import type { SanityImageSource } from '@sanity/image-url'

export function Hero({ settings }: { settings: SiteSettings }) {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-hand text-6xl leading-[0.95] font-semibold whitespace-pre-line md:text-7xl">
            {settings.heroTitle}
          </h1>
          <p className="mt-4 font-serif text-2xl">{settings.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {settings.heroDescription}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {settings.ctaPrimaryLabel && (
              <Button asChild size="lg">
                <a href={settings.ctaPrimaryHref || '#classes'}>{settings.ctaPrimaryLabel}</a>
              </Button>
            )}
            {settings.ctaSecondaryLabel && (
              <Button asChild size="lg" variant="outline">
                <a href={settings.ctaSecondaryHref || '#contact'}>{settings.ctaSecondaryLabel}</a>
              </Button>
            )}
          </div>
          {settings.enrollmentNote && (
            <p className="mt-7 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-4 text-primary" />
              {settings.enrollmentNote}
            </p>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-md">
          {settings.heroImage ? (
            <img
              src={urlFor(settings.heroImage as SanityImageSource).width(960).auto('format').url()}
              alt=""
              className="w-full rounded-xl"
            />
          ) : (
            <HeroIllustration className="w-full" />
          )}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t-2 border-dashed border-foreground/25" />
      </div>
    </section>
  )
}
