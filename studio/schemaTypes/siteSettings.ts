import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The main name of the site shown in browser tabs and search results.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Meta Description',
      type: 'text',
      rows: 3,
      description:
        'Short description shown in Google search results (150–160 characters recommended).',
    }),
    defineField({
      name: 'footerDescriptor',
      title: 'Footer Descriptor',
      type: 'text',
      rows: 2,
      description: 'Short tagline shown in the footer beneath the SparkLifeLab wordmark.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email Address',
      type: 'string',
      description: 'The public contact email address shown in the footer and contact page.',
    }),
    defineField({
      name: 'substackUrl',
      title: 'Substack URL',
      type: 'url',
      description: 'Full URL to the SparkLifeLab Substack publication.',
    }),
    defineField({
      name: 'clarityCheckCtaText',
      title: 'Clarity Check — Default CTA Button Text',
      type: 'string',
      description:
        'Default call-to-action button text used across the site for the Clarity Check (e.g. "Get my free Midlife Clarity Check →").',
    }),
    defineField({
      name: 'identityLabCtaText',
      title: 'Identity Lab — Default CTA Button Text',
      type: 'string',
      description:
        'Default call-to-action button text used across the site for the Identity Lab (e.g. "Apply for the Identity Lab →").',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal Footer Links',
      type: 'array',
      description: 'Links shown in the Legal section of the footer (Privacy Policy, Terms, etc.).',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Link Text',
              type: 'string',
              description: 'e.g. Privacy Policy',
            }),
            defineField({
              name: 'href',
              title: 'URL Path',
              type: 'string',
              description: 'e.g. /privacy-policy/',
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
