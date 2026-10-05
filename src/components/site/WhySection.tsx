import { GraduationCap, Heart, Sparkles, Star, Users, Drama, type LucideIcon } from 'lucide-react'
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
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-center text-xs font-semibold tracking-[0.4em] text-foreground/70 uppercase">
        Why Act IV
      </h2>

      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        {features.map((f) => {
          const Icon = (f.icon && iconMap[f.icon]) || Star
          return (
            <div key={f._id} className="flex flex-col items-center gap-2 text-center">
              <Icon className="size-6 text-primary" strokeWidth={1.5} />
              <h3 className="font-serif text-lg">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
