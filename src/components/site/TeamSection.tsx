import { Drama } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Reveal } from './Reveal'
import { Doodle } from './Doodles'
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
    </div>
  )
}

function MemberBio({ m }: { m: TeamMember }) {
  if (!m.bio) return null
  return (
    <div className="max-w-md space-y-3 text-sm leading-relaxed text-muted-foreground">
      {m.bio
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i}>{p}</p>
        ))}
    </div>
  )
}

function MemberPhoto({ m, flip }: { m: TeamMember; flip: boolean }) {
  const src = photoUrl(m.photo)
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-sm transition-[rotate,translate] duration-500 ease-out hover:-translate-y-2 sm:hover:rotate-0',
        flip ? 'sm:-rotate-2' : 'sm:rotate-2',
      )}
    >
      <Reveal
        variant="polaroid"
        delay={250}
        style={{ '--tilt': flip ? '-10deg' : '10deg' } as CSSProperties}
      >
        <div className="group relative">
          {src ? (
            <img
              src={src}
              alt={m.name}
              className="relative aspect-4/5 w-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          ) : (
            <div className="flex aspect-4/5 w-full items-center justify-center">
              <Drama className="size-10 text-primary/40" strokeWidth={1.25} />
            </div>
          )}
        </div>
      </Reveal>
    </div>
  )
}

export function TeamSection({ members }: { members: TeamMember[] }) {
  if (!members.length) return null

  return (
    <section id="echipa" className="relative mx-auto max-w-6xl px-4 pb-24">
      <Reveal>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-[13px] font-semibold tracking-[0.4em] text-muted-foreground uppercase">
              Echipa
            </h2>
            <Doodle
              kind="masks"
              className="pointer-events-none mt-4 hidden w-12 [animation-delay:0.8s] md:block"
            />
          </div>
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
