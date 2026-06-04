import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { BoldFeature, InlineToolbarFeature } from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const CarouselBlock: Block = {
  slug: 'carousel-block',
  interfaceName: 'CarouselBlock',
  fields: [
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
          name: 'title',
          type: 'richText',
          label: 'Title',
          required: true,
          admin: {
            description: 'Slide headline. Bold is the only inline style available.',
          },
          editor: lexicalEditor({
            features: () => [BoldFeature(), InlineToolbarFeature()],
          }),
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
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
