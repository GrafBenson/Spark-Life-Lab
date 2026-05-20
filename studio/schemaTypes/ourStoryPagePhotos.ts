import {defineField, defineType} from 'sanity'

/**
 * Our Story page — image slots only.
 *
 * All page text is hardcoded in the Next.js frontend (app/about/page.tsx).
 * This document type only controls the three section photos on the Our Story page.
 * If a field is cleared, the site falls back to the approved default image.
 */
export const ourStoryPagePhotos = defineType({
  name: 'ourStoryPagePhotos',
  title: 'Our Story — Page Photos',
  type: 'document',
  groups: [
    {name: 'photos', title: '📷 Our Story Photos'},
  ],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero — Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Photo shown in the Our Story hero section. Recommended: warm, outdoor, human. If left empty, the approved default photo is used.',
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
      name: 'storyImage',
      title: '"How This Began" — Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Photo shown in the "How this began" section. Recommended: small group in unhurried conversation. If left empty, the approved default photo is used.',
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
      name: 'closingImage',
      title: '"Still Becoming" Closing — Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Photo shown in the "Still becoming" closing section. The right edge of the image (people, path, horizon) is always kept visible. If left empty, the approved default photo is used.',
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
      return {title: 'Our Story — Page Photos'}
    },
  },
})
