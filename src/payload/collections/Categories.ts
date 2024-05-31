import type { CollectionConfig } from 'payload/types'

import { slugField } from '../fields/slug'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'category',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Sub Título',
      type: 'text',
      required: true,
    },

    {
      name: 'category',
      label: 'Categoria',
      type: 'text',
      admin: {
        condition: (data, siblingData, { user }) => {
          return false
        },
      },
    },
    slugField('category'),
  ],
  hooks: {
    beforeChange: [
      ({ data, originalDoc }) => {
        if (data.title || data.subtitle) {
          data.category = `${data.title} - ${data.subtitle}`
          data.slug = slugify(data.category)
        }
        return data
      },
    ],
  },
}

const slugify = string => {
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export default Categories
