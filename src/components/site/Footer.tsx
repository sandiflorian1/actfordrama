import type { SiteSettings } from '@/sanity/queries'

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer id="contact" className="mt-8">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-[11px] font-semibold tracking-[0.15em] uppercase md:flex-row">
          <span>
            {settings.siteName}
            {settings.location && ` · ${settings.location}`}
          </span>
          <span>
            {settings.email && (
              <a href={`mailto:${settings.email}`} className="hover:underline">
                {settings.email}
              </a>
            )}
            {settings.email && settings.instagram && ' · '}
            {settings.instagram}
          </span>
          <span>{settings.copyright}</span>
        </div>
      </div>
    </footer>
  )
}
