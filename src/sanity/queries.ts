import groq from 'groq'

export interface NavLink {
  label: string
  href: string
}

export interface SiteSettings {
  siteName?: string
  navLinks?: NavLink[]
  heroTitle?: string
  tagline?: string
  heroDescription?: string
  heroImage?: unknown
  ctaPrimaryLabel?: string
  ctaPrimaryHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
  enrollmentNote?: string
  email?: string
  instagram?: string
  location?: string
  copyright?: string
}

export interface ClassGroup {
  _id: string
  title: string
  ageRange?: string
  description?: string
  schedule?: string
}

export interface Feature {
  _id: string
  title: string
  description?: string
  icon?: string
}

export interface Performance {
  _id: string
  title: string
  date?: string
  description?: string
  image?: unknown
}

export interface SiteContent {
  settings: SiteSettings | null
  classes: ClassGroup[]
  features: Feature[]
  performances: Performance[]
}

export const siteContentQuery = groq`{
  "settings": *[_type == "siteSettings"][0],
  "classes": *[_type == "classGroup"] | order(order asc),
  "features": *[_type == "feature"] | order(order asc),
  "performances": *[_type == "performance"] | order(date asc)
}`
