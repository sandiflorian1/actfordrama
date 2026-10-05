import { defineField, defineType } from 'sanity'

export const feature = defineType({
  name: 'feature',
  title: 'Feature (Why us)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', description: 'Lucide icon name, e.g. "Heart", "GraduationCap", "Users"' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
})
