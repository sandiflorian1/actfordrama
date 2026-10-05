import { CalendarDays } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { urlFor } from '@/sanity/image'
import type { Performance } from '@/sanity/queries'
import type { SanityImageSource } from '@sanity/image-url'

export function PerformancesSection({ performances }: { performances: Performance[] }) {
  if (!performances.length) return null

  return (
    <section id="performances" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-xs font-semibold tracking-[0.4em] text-foreground/70 uppercase">
        Performances
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {performances.map((p) => (
          <Card key={p._id} className="overflow-hidden border-foreground/20 py-0 shadow-none">
            {p.image ? (
              <img
                src={urlFor(p.image as SanityImageSource).width(640).auto('format').url()}
                alt={p.title}
                className="aspect-video w-full object-cover"
              />
            ) : null}
            <CardContent className="p-6">
              <h3 className="font-serif text-xl">{p.title}</h3>
              {p.date && (
                <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-primary">
                  <CalendarDays className="size-3.5" />
                  {new Date(p.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
              {p.description && (
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
