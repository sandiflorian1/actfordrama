import { ArrowUpRight, Sparkle, Star, Sun } from 'lucide-react'
import { Reveal } from './Reveal'
import { Doodle } from './Doodles'
import type { ClassGroup, ProgramModule } from '@/sanity/queries'
import type { SVGProps } from 'react'

function ThreePointStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3.75 15.03 13 21.53 20.25 12 18.25 2.47 20.25 8.97 13Z" />
    </svg>
  )
}

export function ClassesSection({
  classes,
  modules = [],
  summerModules = [],
}: {
  classes: ClassGroup[]
  modules?: ProgramModule[]
  summerModules?: string[]
}) {
  if (!classes.length) return null

  return (
    <section id="classes" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <div id="schedule" className="flex scroll-mt-28 items-end justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-[13px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
              Program · Clase pe grupe de vârstă
            </h2>
            <Doodle kind="ticket" className="pointer-events-none hidden w-10 md:block" />
          </div>
          <span className="hidden text-xs text-muted-foreground/60 sm:block">
            program săptămânal
          </span>
        </div>
      </Reveal>

      <div className="mt-12 border-t border-foreground/15">
        {classes.map((c, i) => (
          <Reveal key={c._id} variant="ticket" delay={i * 140}>
            <a
              href="#contact"
              className="group grid items-baseline gap-3 md:items-center border-b border-foreground/15 px-2 py-8 transition-colors duration-300 hover:bg-accent/50 md:grid-cols-12 md:px-4"
            >
              <h3
                className={`font-serif text-3xl transition-transform duration-300 group-hover:translate-x-2 ${c.description ? 'md:col-span-4' : 'md:col-span-8'}`}
              >
                {c.title}
                {c.ageRange && (
                  <span className="ml-2 text-lg text-muted-foreground">· {c.ageRange} ani</span>
                )}
              </h3>
              {c.description && (
                <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4">
                  {c.description}
                </p>
              )}
              <div className="flex items-center gap-2 text-sm font-medium md:col-span-4 md:justify-end">
                <span className="md:text-right">{c.schedule}</span>
                <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {(modules.length > 0 || summerModules.length > 0) && (
        <div className="mt-20 grid gap-12 md:grid-cols-12">
          {modules.length > 0 && (
            <div className="md:col-span-8">
              <Reveal>
                <h3 className="text-[13px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
                  Structura
                </h3>
              </Reveal>
              <Reveal variant="stage">
                <ol className="relative mt-8 border-t border-foreground/15">
                  <span
                    aria-hidden="true"
                    className="module-line absolute top-0 bottom-0 left-4 w-px bg-primary/40 md:left-5"
                  />
                  {modules.map((m, i) => (
                    <Reveal key={i} delay={i * 100}>
                      <li className="relative grid gap-1 border-b border-foreground/15 py-5 pr-2 pl-10 sm:grid-cols-12 sm:items-baseline sm:gap-3 md:pr-4 md:pl-12">
                        {i === modules.length - 1 ? (
                          <Star
                            aria-hidden="true"
                            className="module-dot absolute top-1/2 left-4 size-4 -translate-x-1/2 -translate-y-1/2 fill-primary bg-background text-primary md:left-5"
                            style={{ transitionDelay: `${300 + i * 300}ms` }}
                          />
                        ) : i === 1 ? (
                          <ThreePointStar
                            aria-hidden="true"
                            className="module-dot absolute top-1/2 left-4 size-4 -translate-x-1/2 -translate-y-1/2 fill-primary bg-background text-primary md:left-5"
                            style={{ transitionDelay: `${300 + i * 300}ms` }}
                          />
                        ) : i > 0 ? (
                          <Sparkle
                            aria-hidden="true"
                            className="module-dot absolute top-1/2 left-4 size-4 -translate-x-1/2 -translate-y-1/2 fill-primary bg-background text-primary md:left-5"
                            style={{ transitionDelay: `${300 + i * 300}ms` }}
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="module-dot absolute top-1/2 left-4 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background md:left-5"
                            style={{ transitionDelay: `${300 + i * 300}ms` }}
                          />
                        )}
                        <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase sm:col-span-5 sm:whitespace-nowrap">
                          {[m.level, m.module].filter(Boolean).join(' · ')}
                        </span>
                        <span className="font-serif text-xl sm:col-span-7">{m.title}</span>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </Reveal>
            </div>
          )}

          {summerModules.length > 0 && (
            <div className="md:col-span-4">
              <Reveal>
                <h3 className="text-[13px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
                  Modul de vară
                </h3>
              </Reveal>
              <div className="mt-8 flex flex-col gap-4">
                {summerModules.map((s, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="flex items-start gap-3 border-l-2 border-primary/40 pl-5">
                      <Sun className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.5} />
                      <p className="font-serif text-xl">{s}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
