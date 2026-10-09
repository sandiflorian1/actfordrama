import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site name', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'navLinks', title: 'Navigation links', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }] }] }),
    defineField({ name: 'heroTitle', title: 'Hero title', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero description', type: 'text', rows: 3 }),
    defineField({ name: 'heroImage', title: 'Hero illustration', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ctaPrimaryLabel', title: 'Primary button label', type: 'string' }),
    defineField({ name: 'ctaPrimaryHref', title: 'Primary button link', type: 'string' }),
    defineField({ name: 'ctaSecondaryLabel', title: 'Secondary button label', type: 'string' }),
    defineField({ name: 'ctaSecondaryHref', title: 'Secondary button link', type: 'string' }),
    defineField({ name: 'enrollmentNote', title: 'Enrollment note', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Contact email', type: 'string' }),
    defineField({ name: 'instagram', title: 'Instagram handle', type: 'string' }),
    defineField({ name: 'facebook', title: 'Facebook name/link', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'copyright', title: 'Footer copyright', type: 'string' }),
  ],
})
