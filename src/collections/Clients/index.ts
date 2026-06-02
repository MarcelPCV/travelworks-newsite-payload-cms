// src/collections/Clients.ts

import type { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'agencyName',
    description: 'A gallery of our partner agencies and clients.',
  },
  fields: [
    {
      name: 'agencyName',
      type: 'text',
      label: 'Agency Name',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      label: 'Agency Logo',
      relationTo: 'media', // Links to your media library
      required: true,
    },
    {
      name: 'testimonial',
      type: 'richText',
      label: 'Client Testimonial',
      required: false,
    },
    {
      name: 'managerName',
      type: 'text',
      label: 'Primary Manager/Contact Name',
      required: false,
    },
    {
      name: 'videoLink',
      type: 'text',
      label: 'Agency Introduction Video Link',
      // Optional: You might want to customize this field to accept only URLs (regex validation)
      required: false,
    },
    {
      name: 'agencyWebsite',
      type: 'text',
      label: 'Agency Website URL',
      // Optional: You might want to customize this field to accept only URLs
      required: false,
    },
  ],
}
