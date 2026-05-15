import {defineField, defineType} from 'sanity'

/**
 * Homepage document type — image slots only.
 *
 * All page text (headings, body copy, CTAs) is hardcoded in the Next.js
 * frontend (app/page.tsx) and is NOT controlled from Studio. This keeps the
 * live site stable while giving the client full control over site photos.
 *
 * To update page text: edit app/page.tsx and redeploy.
 */
export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    {name: 'photos', title: '📷 Site Photos'},
  ],
  fields: [
    // ─── Site Photos ────────────────────────────────────────────────────────
    // These are the only fields the client needs to interact with.
    // Upload a photo here → it appears on the live site immediately after publish.

    defineField({
      name: 'guidanceImage',
      title: 'About Section — Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Photo shown in the "You don\'t have to figure this out alone" section. Recommended: landscape, warm and human. If left empty, the current default photo is used.',
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
      name: 'travelersImage',
      title: 'Fellow Travellers — Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Photo shown in the "Why we built SparkLifeLab" section. Recommended: people in relaxed, thoughtful conversation. If left empty, the current default photo is used.',
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
      title: 'Identity Lab — Identity Map Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Visual shown in the Identity Lab section — typically the IdentityMap document itself or a calm abstract image. If left empty, the current default image is used.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers (e.g. "The SparkLife IdentityMap — a personal compass").',
        }),
      ],
    }),

    defineField({
      name: 'stakesImage',
      title: 'Quiet Truth — Photo',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      description:
        'Photo shown in the "The fog doesn\'t lift on its own" section. Recommended: contemplative, outdoors, human scale. If left empty, the current default photo is used.',
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
      return {title: 'Homepage — Site Photos'}
    },
  },
})
