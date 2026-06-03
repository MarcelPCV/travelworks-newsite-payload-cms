import type { Block } from 'payload'

import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HeadingFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnorderedListFeature,
  OrderedListFeature,
  ChecklistFeature,
  AlignFeature,
  BlockquoteFeature,
  HorizontalRuleFeature,
  LinkFeature,
  UploadFeature,
  RelationshipFeature,
  InlineCodeFeature,
} from '@payloadcms/richtext-lexical'

export const HeroPageBanner: Block = {
  slug: 'hero-page-banner',
  interfaceName: 'HeroPageBannerBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Headline',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Supporting Description/Callout Text',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,

          HeadingFeature({
            enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          }),

          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          StrikethroughFeature(),
          SubscriptFeature(),
          SuperscriptFeature(),

          OrderedListFeature(),
          UnorderedListFeature(),
          ChecklistFeature(),

          AlignFeature(),

          BlockquoteFeature(),
          HorizontalRuleFeature(),

          LinkFeature(),

          UploadFeature({
            collections: {
              media: {
                fields: [],
              },
            },
          }),

          RelationshipFeature(),

          InlineCodeFeature(),

          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },

    {
      name: 'logoImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'secondaryImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}