import {defineField, defineType} from 'sanity'

/**
 * Identity Lab page — image slots only.
 *
 * All page text is hardcoded in the Next.js frontend (app/identity-lab/page.tsx).
 * This document type only controls the three section photos on the Identity Lab page.
 * If a field is cleared, the site falls back to the approved default image.
 */
export const identityLabPagePhotos = defineType({
  name: 'identityLabPagePhotos',
  title: 'Identity Lab — Page Photos',
  type: 'document',
  groups: [
    {name: 'photos', title: '📷 Identity Lab Photos'},
  ],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero — Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Photo shown in the Identity Lab hero section. Recommended: small group in warm, unhurried conversation. If left empty, the approved default photo is used.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the photo in one sentence for screen readers and accessibility.',
        }),
      ],
    }),

    defineField({
      name: 'identityMapImage',
      title: 'Identity Map — Image',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'The Identity Map image shown in the "Your personal Identity Map" section. This image contains map text and labels — it is displayed without cropping so all text remains readable. If left empty, the approved default image is used.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description:
            'Describe the image for screen readers (e.g. "SparkLife Identity Map showing a visual path for clarity, values, strengths, growth, and direction").',
        }),
      ],
    }),

    defineField({
      name: 'closingImage',
      title: 'Closing — Background Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Full-bleed background photo shown in the Identity Lab closing section. Recommended: coastal path, horizon, or journey theme. If left empty, the approved default photo is used.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the photo in one sentence for screen readers and accessibility.',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Identity Lab — Page Photos'}
    },
  },
})
