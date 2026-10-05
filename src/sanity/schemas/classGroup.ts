import { defineField, defineType } from 'sanity'

export const classGroup = defineType({
  name: 'classGroup',
  title: 'Class Group',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'ageRange', title: 'Age range', type: 'string', description: 'e.g. "7-10"' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'schedule', title: 'Schedule', type: 'string', description: 'e.g. "Tues & Thurs • 4:30-5:30pm"' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Manual order', name: 'manualOrder', by: [{ field: 'order', direction: 'asc' }] }],
})
