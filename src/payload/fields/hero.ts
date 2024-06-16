import type { Field } from 'payload/types'

export const hero: Field = {
  name: 'hero',
  label: 'Layout',
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'lowImpact',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Home Page',
          value: 'highImpact',
        },
        // {
        //   label: 'Medium Impact',
        //   value: 'mediumImpact',
        // },
        {
          label: 'Produto',
          value: 'lowImpact',
        },
        // {
        //   label: 'Custom Hero',
        //   value: 'customHero',
        // },
      ],
    },
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, { type } = {}) => !['highImpact'].includes(type),
      },
    },
    {
      name: 'carrossel',
      label: 'Carrosel',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'medias',
          label: 'Imagens',
          type: 'array',
          fields: [
            {
              name: 'media',
              label: 'Media',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
      admin: {
        condition: (_, { type } = {}) => ['highImpact'].includes(type),
      },
    },
    {
      name: 'media',
      label: 'Welcome Vídeo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        condition: (_, { type } = {}) => ['highImpact'].includes(type),
      },
    },
  ],
}
