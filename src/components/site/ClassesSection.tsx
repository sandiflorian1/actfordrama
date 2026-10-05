import { ArrowRight, Drama, Sparkles, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { ClassGroup } from '@/sanity/queries'

const icons = [Sparkles, Drama, Users]

export function ClassesSection({ classes }: { classes: ClassGroup[] }) {
  if (!classes.length) return null

  return (
    <section id="classes" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-xs font-semibold tracking-[0.4em] text-foreground/70 uppercase">
        Classes by age group
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {classes.map((c, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Card
              key={c._id}
              className="border-foreground/20 text-center shadow-none transition-transform hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center gap-3 pt-8 pb-8">
                <Icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl">
                  {c.title}
                  {c.ageRange && <span className="text-foreground/60"> · {c.ageRange}</span>}
                </h3>
                <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
                {c.schedule && (
                  <a
                    id={i === 0 ? 'schedule' : undefined}
                    href="#contact"
                    className="mt-2 inline-flex items-center gap-1 border-b border-foreground/40 pb-0.5 text-xs font-medium hover:text-primary"
                  >
                    {c.schedule}
                    <ArrowRight className="size-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
