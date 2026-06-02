import type { Block, Field } from 'payload';

export const NewsShowcaseBlock: Block = {
  slug: 'newsShowcase',
  interfaceName: 'NewsShowcaseGallery',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'News Section Heading',
      required: true,
    },
    {
      name: 'featuredPosts',
      type: 'relationship', 
      relationTo: 'posts',
      label: 'Select Featured News Posts',
      required: true,
      hasMany: true,
    },
    {
      name: 'sortBy',
      type: 'select',
      label: 'Display Order',
      options: [
        { label: 'By Most Recently Published', value: 'most_recent' },
        { label: 'By Featured/Pinned', value: 'featured' },
        { label: 'Alphabetical Order (A-Z)', value: 'alphabetical' },
      ],
      defaultValue: 'most_recent',
    },
  ],
};
