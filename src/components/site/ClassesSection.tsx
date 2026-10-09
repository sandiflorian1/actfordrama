import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'
import type { ClassGroup } from '@/sanity/queries'

export function ClassesSection({ classes }: { classes: ClassGroup[] }) {
  if (!classes.length) return null

  return (
    <section id="classes" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <div className="flex items-end justify-between">
          <h2 className="text-[11px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
            Clase pe grupe de vârstă
          </h2>
          <span id="schedule" className="hidden text-xs text-muted-foreground/60 sm:block">
            program săptămânal
          </span>
        </div>
      </Reveal>

      <div className="mt-12 border-t border-foreground/15">
        {classes.map((c, i) => (
          <Reveal key={c._id} delay={i * 100}>
            <a
              href="#contact"
              className="group grid items-baseline gap-3 border-b border-foreground/15 px-2 py-8 transition-colors duration-300 hover:bg-accent/50 md:grid-cols-12 md:px-4"
            >
              <span className="font-hand text-2xl text-primary md:col-span-1">
                0{i + 1}
              </span>
              <h3 className="font-serif text-3xl transition-transform duration-300 group-hover:translate-x-2 md:col-span-4">
                {c.title}
                {c.ageRange && (
                  <span className="ml-2 text-lg text-muted-foreground">· {c.ageRange} ani</span>
                )}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4">
                {c.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium md:col-span-3 md:justify-end">
                <span className="md:text-right">{c.schedule}</span>
                <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
