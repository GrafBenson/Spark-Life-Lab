import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {defineLocations, presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'

const PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_ORIGIN ?? 'http://localhost:3000'

export default defineConfig({
  name: 'default',
  title: 'SparkLifeLab',

  projectId: '53gmhbru',
  dataset: 'production',

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: PREVIEW_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      // Document-to-route mapping — tells the Presentation Tool which URL to load
      // when a particular document is open. Without this, clicking between documents
      // won't update the preview URL.
      // Each key is a document _type; resolve() must return a DocumentLocationsState.
      resolve: {
        locations: {
          homepage: defineLocations({
            select: {title: 'heroHeadline'},
            resolve: () => ({locations: [{title: 'Homepage', href: '/'}]}),
          }),
          founder: defineLocations({
            select: {name: 'name'},
            resolve: (doc) => ({
              locations: [{title: doc?.name ?? 'Founder', href: '/#travelers'}],
            }),
          }),
          siteSettings: defineLocations({
            select: {siteTitle: 'siteTitle'},
            resolve: () => ({locations: [{title: 'Site Settings (footer)', href: '/'}]}),
          }),
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
