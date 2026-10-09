import { GraduationCap, Heart, Sparkles, Star, Users, Drama, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'
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
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <Reveal>
        <h2 className="text-[11px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
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
