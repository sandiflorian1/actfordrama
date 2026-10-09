import type { SiteContent } from '@/sanity/queries'

export const fallbackContent: SiteContent = {
  settings: {
    siteName: 'ACT IV DRAMA STUDIO',
    navLinks: [
      { label: 'DESPRE', href: '#about' },
      { label: 'CLASE', href: '#classes' },
      { label: 'ECHIPA', href: '#echipa' },
      { label: 'PROGRAM', href: '#schedule' },
      { label: 'SPECTACOLE', href: '#performances' },
      { label: 'CONTACT', href: '#contact' },
    ],
    heroTitle: 'ACT IV\nDRAMA\nSTUDIO',
    tagline: 'Unde poveștile prind viață',
    heroDescription:
      'Un spațiu creativ pentru actorii de toate vârstele: explorăm, învățăm și urcăm pe scenă împreună. Construiește-ți încrederea, creativitatea și comunitatea prin arta teatrului.',
    ctaPrimaryLabel: 'Descoperă clasele',
    ctaPrimaryHref: '#classes',
    ctaSecondaryLabel: 'Programează o vizită',
    ctaSecondaryHref: '#contact',
    enrollmentNote: 'Înscrierile sunt deschise · Grupe cu număr limitat de locuri',
    phone: '0785 088 595 / 0763 618 499',
    email: 'activstudio.office@gmail.com',
    instagram: '@activstudio_',
    facebook: 'Act IV Studio',
    location: 'Bulevardul Ferdinand I 126A, București',
    copyright: '© 2026 ACT IV DRAMA STUDIO — Toate drepturile rezervate',
  },
  classes: [
    {
      _id: 'kids',
      title: 'Copii',
      ageRange: '7–10',
      description:
        'Introducere ludică în povestit, mișcare și imaginație. Copiii își construiesc încrederea prin jocuri și scene de grup.',
      schedule: 'Marți și joi · 16:30–17:30',
    },
    {
      _id: 'teens',
      title: 'Adolescenți',
      ageRange: '11–15',
      description:
        'Studiu de scenă, improvizație și dezvoltarea personajului. Pregătire pentru spectacolele școlare și audiții.',
      schedule: 'Luni și miercuri · 17:30–19:00',
    },
    {
      _id: 'adults',
      title: 'Adulți',
      ageRange: '16+',
      description:
        'Tehnici de actorie, monologuri și performanță. Cursuri de seară pentru toate nivelurile de experiență.',
      schedule: 'Marți și joi · 19:00–20:30',
    },
  ],
  features: [
    {
      _id: 'inclusive',
      title: 'Comunitate primitoare',
      description: 'Grupe mici și instructori care încurajează',
      icon: 'Heart',
    },
    {
      _id: 'guidance',
      title: 'Ghidaj profesionist',
      description: 'Cursuri susținute de actori și regizori activi',
      icon: 'GraduationCap',
    },
    {
      _id: 'showcase',
      title: 'Spectacole pentru elevi',
      description: 'Prezentări de final de semestru pentru familii și prieteni',
      icon: 'Users',
    },
  ],
  performances: [],
  team: [
    {
      _id: 'iasmina',
      name: 'Iasmina Crețoi',
      role: 'Actriță & Trainer de teatru',
      photo: '/team/iasmina.jpg',
    },
    {
      _id: 'victoras',
      name: 'Victoraș Matei',
      role: 'Actor & Trainer de teatru',
      photo: '/team/victoras.png',
    },
  ],
}
