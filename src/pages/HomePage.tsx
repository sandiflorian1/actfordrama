import { useSiteContent } from '@/hooks/useSiteContent'
import { Navbar } from '@/components/site/Navbar'
import { Hero } from '@/components/site/Hero'
import { Marquee } from '@/components/site/Marquee'
import { AboutSection } from '@/components/site/AboutSection'
import { ClassesSection } from '@/components/site/ClassesSection'
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
        <ClassesSection
          classes={content.classes}
          modules={settings.programModules}
          summerModules={settings.summerModules}
        />
        <TeamSection members={content.team} />
        <PerformancesSection performances={content.performances} />
      </main>
      <Footer settings={settings} />
    </div>
  )
}
