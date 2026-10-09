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
    copyright: '© 2026 ACT IV DRAMA STUDIO',
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
      bio: 'Actriță și co-fondatoare a studioului. A călcat pe scenele marilor teatre bucureștene și a descoperit că bucuria cea mai mare e să vezi cum oamenii îndrăznesc. La orele ei nu există greșeli — doar propuneri pe care le joci mai departe. Teatrul, spune ea, nu te învață să fii altcineva, ci să fii mai mult tu însuți.',
      specialties: ['Actorie', 'Voce & dicție', 'Improvizație'],
      photo: '/team/iasmina.png',
    },
    {
      _id: 'victoras',
      name: 'Victoraș Matei',
      role: 'Actor & Trainer de teatru',
      bio: 'Actor și co-fondator al studioului. Transformă scena în teren de joacă — între improvizație, exerciții și mult umor, elevii lui uită că „învață" și descoperă că pot susține o scenă întreagă. E convins că oricine poate urca pe scenă; trebuie doar să îndrăznească primul pas.',
      specialties: ['Improvizație', 'Mișcare scenică', 'Actorie'],
      photo: '/team/victoras.png',
    },
  ],
}
