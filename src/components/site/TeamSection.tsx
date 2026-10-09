import { Drama } from 'lucide-react'
import { Reveal } from './Reveal'
import { urlFor } from '@/sanity/image'
import { cn } from '@/lib/utils'
import type { TeamMember } from '@/sanity/queries'
import type { SanityImageSource } from '@sanity/image-url'

function photoUrl(photo: unknown) {
  if (typeof photo === 'string') return photo
  if (photo) return urlFor(photo as SanityImageSource).width(700).auto('format').url()
  return null
}

function MemberInfo({ m }: { m: TeamMember }) {
  return (
    <div>
      <h3 className="font-serif text-4xl leading-tight">{m.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{m.role}</p>
      {m.specialties && m.specialties.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {m.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full border border-foreground/25 px-3.5 py-1 text-[11px] transition-colors hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function MemberBio({ m }: { m: TeamMember }) {
  if (!m.bio) return null
  return (
    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
  )
}

function MemberPhoto({ m, flip }: { m: TeamMember; flip: boolean }) {
  const src = photoUrl(m.photo)
  return (
    <div className={cn('mx-auto w-full max-w-sm', flip ? 'sm:-rotate-2' : 'sm:rotate-2')}>
      <div className="group overflow-hidden rounded-3xl bg-secondary shadow-lg transition-shadow duration-500 hover:shadow-2xl">
        {src ? (
          <img
            src={src}
            alt={m.name}
            className="aspect-4/5 w-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex aspect-4/5 w-full items-center justify-center">
            <Drama className="size-10 text-primary/40" strokeWidth={1.25} />
          </div>
        )}
      </div>
    </div>
  )
}

export function TeamSection({ members }: { members: TeamMember[] }) {
  if (!members.length) return null

  return (
    <section id="echipa" className="mx-auto max-w-6xl px-4 pb-24">
      <Reveal>
        <div className="flex items-end justify-between">
          <h2 className="text-[11px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
            Echipa
          </h2>
          <span className="hidden font-serif text-lg italic text-muted-foreground/70 sm:block">
            Cunoaște trainerii
          </span>
        </div>
      </Reveal>

      <div className="mt-14">
        {members.map((m, i) => {
          const flip = i % 2 === 1
          return (
            <Reveal key={m._id} delay={i * 120}>
              <div className="grid items-center gap-8 border-t border-foreground/15 py-12 first:border-t-0 first:pt-0 lg:grid-cols-12">
                <div className="order-1 lg:col-span-3">
                  <MemberInfo m={m} />
                </div>

                {flip ? (
                  <>
                    <div className="order-2 lg:col-span-5">
                      <MemberPhoto m={m} flip={flip} />
                    </div>
                    <div className="order-3 lg:col-span-4 lg:pl-4">
                      <MemberBio m={m} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-3 lg:order-2 lg:col-span-4">
                      <MemberBio m={m} />
                    </div>
                    <div className="order-2 lg:order-3 lg:col-span-5">
                      <MemberPhoto m={m} flip={flip} />
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
