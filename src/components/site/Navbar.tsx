import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { urlFor } from '@/sanity/image'
import { cn } from '@/lib/utils'
import type { NavLink } from '@/sanity/queries'
import type { SanityImageSource } from '@sanity/image-url'

interface NavbarProps {
  siteName?: string
  logo?: unknown
  links?: NavLink[]
}

export function Navbar({ siteName = 'ACT IV DRAMA STUDIO', logo, links = [] }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logoUrl = logo
    ? urlFor(logo as SanityImageSource).width(160).auto('format').url()
    : '/logo.png'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 text-[#f4ecdd] transition-all duration-500',
        scrolled
          ? 'border-b border-white/10 bg-[#17110c]/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt={siteName}
            className="size-14 rounded-full object-cover object-[center_88%]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold tracking-[0.25em] text-[#f4ecdd]/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Deschide meniul"
              className="text-[#f4ecdd] hover:bg-white/10 hover:text-[#f4ecdd]"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-white/10 bg-[#17110c] text-[#f4ecdd]">
            <nav className="mt-10 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-2xl"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
