import type { Block, Field } from 'payload'

const featureFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    label: 'Feature Title (e.g., Booking System)',
    required: true,
  },
  {
    name: 'description',
    type: 'richText',
    label: 'Description/Use Case',
    // You can optionally use a richer editor here
  },
  {
    name: 'mockupImage',
    type: 'upload',
    label: 'Laptop Mockup Image',
    relationTo: 'media', // Use media for image uploads
    required: true,
  },
  {
    name: 'callToAction',
    type: 'text',
    label: 'Call to Action Button Text (Optional)',
  },
  {
    name: 'ctaLink',
    type: 'text', // Or use a custom link field if you need complex linking
    label: 'CTA URL (Optional)',
  },
]

export const ProductExperienceHighlight: Block = {
  slug: 'productExperienceHighlight',
  interfaceName: 'ProductExperienceHighlight',
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Featured Mockups (Add as many as needed)',
      admin: {
        initCollapsed: true,
      },
      fields: featureFields, // This array contains the template for one card
    },
  ],
}
