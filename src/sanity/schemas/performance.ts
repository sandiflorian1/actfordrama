import { defineField, defineType } from 'sanity'

export const performance = defineType({
  name: 'performance',
  title: 'Performance',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Poster / image', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [{ title: 'Date', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] }],
})
