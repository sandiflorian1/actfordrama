import type { SiteContent } from '@/sanity/queries'

export const fallbackContent: SiteContent = {
  settings: {
    siteName: 'ACT IV DRAMA STUDIO',
    navLinks: [
      { label: 'DESPRE', href: '#about' },
      { label: 'ECHIPA', href: '#echipa' },
      { label: 'PROGRAM', href: '#schedule' },
      { label: 'CONTACT', href: '#contact' },
    ],
    heroTitle: 'ACT IV\nDRAMA\nSTUDIO',
    tagline: 'Unde poveștile prind viață',
    heroDescription:
      'Un spațiu creativ dedicat copiilor și adolescenților, unde prindem curaj să fim noi înșine și descoperim, prin joc și creativitate, cât de departe ne poate duce imaginația.',
    aboutTitle: 'Un spațiu construit din vise și tehnici teatrale',
    aboutDescription:
      'ACT IV Drama Studio este un spațiu creativ dedicat copiilor și adolescenților. La noi, scena devine mai mult decât un loc pentru spectacol: devine locul în care prindem curaj să fim noi înșine, transformăm emoțiile în expresie și descoperim, prin joc și creativitate, cât de departe ne poate duce imaginația. Credem că teatrul îi ajută pe copii să vorbească fără teamă și să se conecteze cu cei din jur. Pe scenă, ca în viață, fiecare glas contează. ',
    ctaPrimaryLabel: 'Descoperă clasele',
    ctaPrimaryHref: '#classes',
    ctaSecondaryLabel: 'Programează o vizită',
    ctaSecondaryHref: '#contact',
    programModules: [
      { level: 'Începători', module: 'Modulul I', title: 'Dezvoltare personală prin jocuri teatrale' },
      { level: 'Intermediari', module: 'Modulul II', title: 'Lucru pe scene de teatru și film' },
      { level: 'Avansați', module: 'Modulul III', title: 'Laborator de spectacol' },
      { level: 'Avansați', module: 'Modulul IV', title: 'Spectacol de teatru' },
    ],
    summerModules: ['Atelier intensiv de Monoloage (iulie)'],
    enrollmentNote: 'Înscrierile sunt deschise · Grupe cu număr limitat de locuri',
    phone: '0785 088 595 / 0763 618 499',
    email: 'activstudio.office@gmail.com',
    instagram: '@activstudio_',
    location: 'Bulevardul Ferdinand I 126A, București',
    copyright: '© 2026 ACT IV DRAMA STUDIO',
  },
  classes: [
    { _id: 'age-6-7', title: '6 – 7 ani', schedule: 'Sâmbătă · 11:00 – 12:00 (60’)' },
    { _id: 'age-8-10', title: '8 – 10 ani', schedule: 'Sâmbătă · 12:30 – 13:30 (60’)' },
    { _id: 'age-11-13', title: '11 – 13 ani', schedule: 'Sâmbătă · 14:00 – 15:15 (75’)' },
    { _id: 'age-14-17', title: '14 – 17 ani', schedule: 'Sâmbătă · 15:30 – 17:00 (90’)' },
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
      bio: 'Actriță și co-fondatoare a studioului, absolventă a Universității Naționale de Artă Teatrală și Cinematografică „I.L. Caragiale” din București, secția Actorie, și a masterului de Pedagogie teatrală. De-a lungul carierei sale artistice și pedagogice, a colaborat cu instituții de teatru de prestigiu din București și din țară, printre care Teatrul de Comedie, Teatrul Metropolis, Centrul Cultural Mioveni. A contribuit, în calitate de trainer, la formarea tinerilor pasionați de teatru în cadrul unor festivaluri și proiecte de referință, precum Festivalul Național de Teatru pentru Elevi „George Constantin”, Festivalul Național de Teatru „Ludicus” din Mioveni, Caravana UNATC – „Eveniment și experiment artistic” și UNATC Junior.\n\nA descoperit că bucuria cea mai mare e să vezi cum oamenii se deschid și cum evoluează. La orele ei nu există greșeli, ci doar curajul de a încerca din nou. Teatrul, spune ea, te învață să asculți, să simți și să ai încredere în vocea ta.   ',
      specialties: ['Actorie', 'Voce & dicție', 'Improvizație'],
      photo: '/team/iasmina.png',
    },
    {
      _id: 'victoras',
      name: 'Victoraș Matei',
      role: 'Actor & Trainer de teatru',
      bio: 'Actor și co-fondator al studioului, absolvent al Universității Naționale de Artă Teatrală și Cinematografică „I.L. Caragiale” din București, secția Actorie, și al masterului de Pedagogie teatrală. De-a lungul carierei sale artistice și pedagogice a colaborat cu teatre importante din București și din țară, printre care Teatrul Bulandra, Opera Națională, Teatrul Metropolis și Teatrul Național „Marin Sorescu” din Craiova. A fost trainer la numeroase festivaluri de teatru pentru tineri de prestigiu, unde și-a împărtășit experiența viitorilor actori. \n\nAcum aduce toată această experiență în sala de curs și face din scenă un teren de joacă: între improvizație, exerciții și mult umor, elevii lui uită că „învață” și descoperă că pot umple o scenă cu energia și ideile lor. E convins că oricine poate urca pe scenă, trebuie doar să îndrăznească să facă primul pas. ',
      specialties: ['Improvizație', 'Mișcare scenică', 'Actorie'],
      photo: '/team/victoras.png',
    },
  ],
}
