import type { Block } from 'payload'

import { link } from '@/fields/link'

export const Carousel: Block = {
  slug: 'carousel',
  interfaceName: 'CarouselBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'slides',
      type: 'array',
      localized: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'align',
          type: 'select',
          localized: true,
          defaultValue: 'left',
          options: [
            {
              label: 'Left',
              value: 'left',
            },
            {
              label: 'Right',
              value: 'right',
            },
          ],
          required: true,
        },
        link({
          appearances: ['default', 'outline'],
          overrides: {
            required: true,
          },
        }),
      ],
    },
  ],
  labels: {
    plural: 'Carousels',
    singular: 'Carousel',
  },
}
