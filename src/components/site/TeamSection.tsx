import { Drama } from 'lucide-react'
import { Reveal } from './Reveal'
import { urlFor } from '@/sanity/image'
import type { TeamMember } from '@/sanity/queries'
import type { SanityImageSource } from '@sanity/image-url'

function MemberPhoto({ member }: { member: TeamMember }) {
  if (typeof member.photo === 'string') {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="w-full rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
      />
    )
  }

  return (
    <div className="rounded-t-[10rem] bg-primary/90 px-6 pt-8">
      {member.photo ? (
        <img
          src={urlFor(member.photo as SanityImageSource).width(600).auto('format').url()}
          alt={member.name}
          className="aspect-3/4 w-full rounded-t-[8rem] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex aspect-3/4 w-full items-center justify-center rounded-t-[8rem] bg-primary/70">
          <Drama className="size-10 text-primary-foreground/60" strokeWidth={1.25} />
        </div>
      )}
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

      <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-2">
        {members.map((m, i) => (
          <Reveal key={m._id} delay={i * 140}>
            <figure className="group text-center">
              <MemberPhoto member={m} />
              <figcaption className="mt-5">
                <h3 className="font-serif text-2xl">{m.name}</h3>
                {m.role && (
                  <p className="mt-1 text-[11px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                    {m.role}
                  </p>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
