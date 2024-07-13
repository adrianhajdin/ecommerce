import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { Archive } from '../../blocks/ArchiveBlock'
// import { CallToAction } from '../../blocks/CallToAction'
// import { Content } from '../../blocks/Content'
// import { MediaBlock } from '../../blocks/MediaBlock'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { adminsOrPublished } from './access/adminsOrPublished'
import { revalidatePage } from './hooks/revalidatePage'

export const EditablePages: CollectionConfig = {
  slug: 'editablepages',
  labels: { plural: 'Páginas', singular: 'Página' },
  admin: {
    livePreview: {
      url: ({ data }) => `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${data.slug}`,
    },
    hidden: false,
    useAsTitle: 'title',
    description: 'Páginas',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  hooks: {
    afterChange: [revalidatePage],
    afterRead: [populateArchiveBlock],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedOn',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    hero,
    {
      name: 'layout',
      label: 'Produtos',
      type: 'blocks',
      required: false,
      defaultValue: [],
      blocks: [Archive],
    },
    slugField(),
  ],
}
