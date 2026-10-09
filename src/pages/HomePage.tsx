import { useSiteContent } from '@/hooks/useSiteContent'
import { Navbar } from '@/components/site/Navbar'
import { Hero } from '@/components/site/Hero'
import { Marquee } from '@/components/site/Marquee'
import { AboutSection } from '@/components/site/AboutSection'
import { ClassesSection } from '@/components/site/ClassesSection'
import { WhySection } from '@/components/site/WhySection'
import { TeamSection } from '@/components/site/TeamSection'
import { PerformancesSection } from '@/components/site/PerformancesSection'
import { Footer } from '@/components/site/Footer'

export default function HomePage() {
  const { content } = useSiteContent()
  const settings = content.settings || {}

  return (
    <div id="top" className="min-h-screen">
      <Navbar siteName={settings.siteName} logo={settings.logo} links={settings.navLinks} />
      <main>
        <Hero settings={settings} />
        <Marquee
          items={['Teatru', 'Improvizație', 'Mișcare', 'Voce', 'Povești', 'Comunitate']}
        />
        <AboutSection settings={settings} />
        <ClassesSection classes={content.classes} />
        <WhySection features={content.features} />
        <TeamSection members={content.team} />
        <PerformancesSection performances={content.performances} />
      </main>
      <Footer settings={settings} />
    </div>
  )
}
