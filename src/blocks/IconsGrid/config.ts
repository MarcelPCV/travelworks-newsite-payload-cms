import type { Block } from 'payload'

export const IconsGrid: Block = {
  slug: 'icons-grid',
  interfaceName: 'IconsGridBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Icons Grid Items',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          label: 'Icon',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Item Title',
          required: true,
        },
      ],
      required: true,
    },
  ],
}
