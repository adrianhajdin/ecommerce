import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { slugField } from '../../fields/slug'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'discountPercentage', '_status'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/products/${doc.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      label: 'Nome do Produto',
      type: 'text',
      required: true,
    },
    {
      name: 'colors',
      label: 'Cores disponíveis',
      type: 'relationship',
      relationTo: 'colors',
      hasMany: true,
    },
    {
      name: 'sizes',
      label: 'Tamanhos disponíveis',
      type: 'select',
      options: [
        { value: 'GG', label: 'GG' },
        { value: 'G', label: 'G' },
        { value: 'M', label: 'M' },
        { value: 'P', label: 'P' },
        { value: 'PP', label: 'PP' },
        // Adicione mais tamanhos conforme necessário
      ],
      hasMany: true,
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
      required: true,
      admin: {
        rows: 4,
      },
    },
    {
      name: 'price',
      type: 'number',
      label: 'Preço',
      required: true,
      admin: {
        step: 20.0,
      },
    },
    {
      name: 'discountPercentage',
      label: 'Percentual de Desconto',
      type: 'number',
      admin: {
        step: 1.0,
      },
    },
    {
      name: 'photos',
      label: 'Imagens',
      type: 'array',
      fields: [
        {
          name: 'photo',
          label: 'Imagem',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'publishedOn',
      label: 'Publicar em',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'relatedProducts',
      type: 'relationship',
      label: 'Produtos Relacionados',
      relationTo: 'products',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    {
      name: 'categories',
      label: 'Categorias',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'new',
      label: 'New In',
      type: 'checkbox',
    },
    {
      name: 'sale',
      label: 'Sale',
      type: 'checkbox',
    },
    {
      name: 'hot',
      label: 'Em Alta',
      type: 'checkbox',
    },
    slugField(),
  ],
}

export default Products
