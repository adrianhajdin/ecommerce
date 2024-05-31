import type { CollectionConfig } from 'payload/types'

import { slugField } from '../fields/slug'

const Colors: CollectionConfig = {
  slug: 'colors',
  admin: {
    useAsTitle: 'color',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'color',
      label: 'Cor',
      type: 'text',
      required: true,
    },
    {
      name: 'colorHex',
      label: 'Código de Cor',
      type: 'text',
      required: true,
    },
    slugField(),
  ],
}

export default Colors
