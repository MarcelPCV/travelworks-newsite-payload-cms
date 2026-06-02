import type { Block, Field } from 'payload';

export const ClientGalleryBlock: Block = {
  slug: 'clientGallery',
  interfaceName: 'ClientShowcaseGallery',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Gallery Section Title',
      required: true,
    },
    {
      name: 'clientCollection',
      type: 'relationship', // Using a relationship field to pull IDs from the Clients collection
      relationTo: 'clients', 
      label: 'Select Client Agencies',
      required: true,
      hasMany: true, 
    },
    {
      name: 'sortBy',
      type: 'select',
      label: 'Sorting Order',
      options: [
        { label: 'By Most Recently Added', value: 'most_recent' },
        { label: 'Alphabetical Order (A-Z)', value: 'alphabetical' },
      ],
      defaultValue: 'most_recent',
    },
  ],
};
