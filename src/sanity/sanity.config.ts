import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { siteSettings } from './schemas/siteSettings'
import { classGroup } from './schemas/classGroup'
import { feature } from './schemas/feature'
import { performance } from './schemas/performance'

import { projectId, dataset } from './env'

export default defineConfig({
  name: 'actfordrama',
  title: 'Act IV Drama Studio',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('classGroup').title('Class Groups'),
            S.documentTypeListItem('feature').title('Features'),
            S.documentTypeListItem('performance').title('Performances'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [siteSettings, classGroup, feature, performance],
  },
})
