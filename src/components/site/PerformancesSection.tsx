import { CalendarDays } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from './Reveal'
import { urlFor } from '@/sanity/image'
import type { Performance } from '@/sanity/queries'
import type { SanityImageSource } from '@sanity/image-url'

export function PerformancesSection({ performances }: { performances: Performance[] }) {
  if (!performances.length) return null

  return (
    <section id="performances" className="mx-auto max-w-6xl px-4 pb-24">
      <Reveal>
        <h2 className="text-[11px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
          Spectacole
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {performances.map((p, i) => (
          <Reveal key={p._id} delay={i * 120}>
            <Card className="group overflow-hidden border-foreground/20 py-0 shadow-none">
              {p.image ? (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={urlFor(p.image as SanityImageSource).width(640).auto('format').url()}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : null}
              <CardContent className="p-6">
                <h3 className="font-serif text-xl">{p.title}</h3>
                {p.date && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-primary">
                    <CalendarDays className="size-3.5" />
                    {new Date(p.date).toLocaleDateString('ro-RO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                )}
                {p.description && (
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                )}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
