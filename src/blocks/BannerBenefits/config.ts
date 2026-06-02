import type { Block, Field } from 'payload'

/**
 * Define the fields for a single feature pillar (card).
 * This represents one distinct column in the "Why Travelworks?" section.
 */
const featurePillarFields: Field[] = [
  {
    name: 'icon',
    type: 'upload',
    label: 'Visual Icon/Graphic',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'title',
    type: 'text',
    label: 'Pillar Title',
    required: true,
  },
  {
    name: 'description',
    type: 'richText',
    label: 'Detailed Description/Content',
    // This allows rich formatting for the body text
  },
  {
    name: 'ctaText',
    type: 'text',
    label: 'Call to Action Button Text (Optional)',
  },
  {
    name: 'ctaLink',
    type: 'text',
    label: 'CTA URL (Optional)',
  },
]

/**
 * The main Block component containing the array of feature pillars.
 * This structure allows the content editor to add/remove features.
 */
export const BannerBenefits: Block = {
  slug: 'bannerBenefits',
  interfaceName: 'BannerBenefitsShowcase',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Heading (e.g., Why Travelworks?)',
      required: true,
    },
    {
      name: 'pillars',
      type: 'array',
      label: 'Banner Benefits',
      admin: {
        initCollapsed: true,
      },
      fields: featurePillarFields,
    },
  ],
}
