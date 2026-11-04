import { GraduationCap, Heart, Sparkles, Star, Users, Drama, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'
import { Doodle } from './Doodles'
import type { Feature } from '@/sanity/queries'

const iconMap: Record<string, LucideIcon> = {
  Heart,
  GraduationCap,
  Users,
  Sparkles,
  Star,
  Drama,
}

export function WhySection({ features }: { features: Feature[] }) {
  if (!features.length) return null

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-24">
      <Doodle
        kind="star"
        className="pointer-events-none absolute top-0 right-4 hidden w-9 md:block"
      />
      <Doodle
        kind="spark"
        className="pointer-events-none absolute -bottom-4 -left-6 hidden w-10 [animation-delay:1.2s] md:block"
      />
      <Reveal>
        <h2 className="text-[13px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
          De ce Act IV
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {features.map((f, i) => {
          const Icon = (f.icon && iconMap[f.icon]) || Star
          return (
            <Reveal key={f._id} delay={i * 120}>
              <div className="flex flex-col items-start gap-3 border-l-2 border-primary/40 pl-5">
                <Icon className="size-5 text-primary" strokeWidth={1.5} />
                <h3 className="font-serif text-xl">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
