import {defineField, defineType} from 'sanity'

export const founder = defineType({
  name: 'founder',
  title: 'Founder',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: "The founder's full name as it should appear on the website.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role or Title',
      type: 'string',
      description: 'Shown beneath the name on the founder card (e.g. "Co-founder").',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      description:
        'A short personal description shown on the founder card. Keep it to 2–3 sentences.',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Profile URL',
      type: 'url',
      description: 'Full URL to the LinkedIn profile (optional). Leave blank to hide the link.',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'Headshot photo. Displayed as a circle on the website.',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description:
            'Short description of the photo for screen readers (e.g. "Bärbel smiling outdoors").',
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description:
        'Controls the left-to-right order the founders appear in. Lower numbers appear first (e.g. 1, 2, 3).',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})
