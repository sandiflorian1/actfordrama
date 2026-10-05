import { useSiteContent } from '@/hooks/useSiteContent'
import { Navbar } from '@/components/site/Navbar'
import { Hero } from '@/components/site/Hero'
import { ClassesSection } from '@/components/site/ClassesSection'
import { WhySection } from '@/components/site/WhySection'
import { PerformancesSection } from '@/components/site/PerformancesSection'
import { Footer } from '@/components/site/Footer'

export default function HomePage() {
  const { content } = useSiteContent()
  const settings = content.settings || {}

  return (
    <div id="top" className="min-h-screen">
      <Navbar siteName={settings.siteName} links={settings.navLinks} />
      <main>
        <Hero settings={settings} />
        <ClassesSection classes={content.classes} />
        <WhySection features={content.features} />
        <PerformancesSection performances={content.performances} />
      </main>
      <Footer settings={settings} />
    </div>
  )
}
