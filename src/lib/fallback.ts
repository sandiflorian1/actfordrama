import type { SiteContent } from '@/sanity/queries'

export const fallbackContent: SiteContent = {
  settings: {
    siteName: 'ACT IV DRAMA STUDIO',
    navLinks: [
      { label: 'ABOUT', href: '#about' },
      { label: 'CLASSES', href: '#classes' },
      { label: 'SCHEDULE', href: '#schedule' },
      { label: 'PERFORMANCES', href: '#performances' },
      { label: 'CONTACT', href: '#contact' },
    ],
    heroTitle: 'ACT IV\nDRAMA\nSTUDIO',
    tagline: 'Where Stories Come to Life',
    heroDescription:
      'A creative space for actors of all ages to explore, learn, and perform. Build confidence, creativity & community through theater arts.',
    ctaPrimaryLabel: 'Explore Classes',
    ctaPrimaryHref: '#classes',
    ctaSecondaryLabel: 'Schedule a Visit',
    ctaSecondaryHref: '#contact',
    enrollmentNote: 'Now enrolling for Fall 2024 · Limited class sizes',
    email: 'hello@activdrama.com',
    instagram: '@activdrama',
    location: 'Portland, OR',
    copyright: '© 2024 ACT IV DRAMA STUDIO — All Rights Reserved',
  },
  classes: [
    {
      _id: 'kids',
      title: 'Kids',
      ageRange: '7–10',
      description:
        'Playful introduction to storytelling, movement, and imagination. Build confidence through games & group scenes.',
      schedule: 'Tues & Thurs · 4:30–5:30pm',
    },
    {
      _id: 'teens',
      title: 'Teens',
      ageRange: '11–15',
      description:
        'Scene study, improv, and character development. Prepare for school performances & auditions.',
      schedule: 'Mon & Wed · 5:30–7:00pm',
    },
    {
      _id: 'adults',
      title: 'Adults',
      ageRange: '16+',
      description:
        'Acting techniques, monologues & performance. Evening classes for all experience levels.',
      schedule: 'Tues & Thurs · 7:00–8:30pm',
    },
  ],
  features: [
    {
      _id: 'inclusive',
      title: 'Supportive & Inclusive',
      description: 'Small class sizes & encouraging instructors',
      icon: 'Heart',
    },
    {
      _id: 'guidance',
      title: 'Professional Guidance',
      description: 'Taught by working actors & directors',
      icon: 'GraduationCap',
    },
    {
      _id: 'showcase',
      title: 'Community Showcase',
      description: 'Student performances each semester',
      icon: 'Users',
    },
  ],
  performances: [],
}
