import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from './Reveal'
import type { SiteSettings } from '@/sanity/queries'
import type { ReactNode } from 'react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.5" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 3h-2.5a3.5 3.5 0 0 0-3.5 3.5V9H6.5v3.5H9V21h3.5v-8.5h3l.5-3.5h-3.5V6.8c0-.7.5-1.3 1.2-1.3H15.8V3Z" />
    </svg>
  )
}

type IconProps = { className?: string }

interface ContactItem {
  label: string
  icon: (props: IconProps) => ReactNode
  value?: string
  href?: string
}

export function Footer({ settings }: { settings: SiteSettings }) {
  const igHandle = settings.instagram?.replace('@', '')

  const contacts: ContactItem[] = [
    { label: 'Telefon', icon: (p: IconProps) => <Phone {...p} />, value: settings.phone },
    {
      label: 'Email',
      icon: (p: IconProps) => <Mail {...p} />,
      value: settings.email,
      href: settings.email && `mailto:${settings.email}`,
    },
    { label: 'Adresă', icon: (p: IconProps) => <MapPin {...p} />, value: settings.location },
    {
      label: 'Instagram',
      icon: (p: IconProps) => <InstagramIcon {...p} />,
      value: settings.instagram,
      href: igHandle && `https://instagram.com/${igHandle}`,
    },
    {
      label: 'Facebook',
      icon: (p: IconProps) => <FacebookIcon {...p} />,
      value: settings.facebook,
    },
  ].filter((c) => c.value)

  return (
    <footer id="contact" className="bg-[#17110c] text-[#f4ecdd]">
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-5xl leading-tight md:text-6xl">
            Vino la o{' '}
            <span className="font-hand text-primary">clasă de probă</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-4 max-w-md text-sm text-[#f4ecdd]/60">
            Prima întâlnire e despre joacă și curiozitate — fără presiune, fără experiență
            necesară.
          </p>
        </Reveal>
        {settings.email && (
          <Reveal delay={250}>
            <a
              href={`mailto:${settings.email}`}
              className="group mt-8 inline-flex items-center gap-2 border-b-2 border-primary pb-1 font-serif text-2xl transition-colors hover:text-primary"
            >
              Scrie-ne
              <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        )}

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-5">
          {contacts.map(({ label, icon: Icon, value, href }, i) => (
            <Reveal key={label} delay={i * 80}>
              <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-[#f4ecdd]/40 uppercase">
                <Icon className="size-3.5 text-primary" />
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="mt-2 block text-sm hover:text-primary"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-2 text-sm">{value}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-[10px] font-semibold tracking-[0.2em] text-[#f4ecdd]/40 uppercase sm:flex-row">
          <span>{settings.siteName}</span>
          <span>{settings.copyright}</span>
        </div>
      </div>
    </footer>
  )
}
