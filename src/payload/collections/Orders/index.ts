import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrLoggedIn } from '../../access/adminsOrLoggedIn'
import { adminsOrOrderedBy } from './access/adminsOrOrderedBy'
import { clearUserCart } from './hooks/clearUserCart'
import { populateOrderedBy } from './hooks/populateOrderedBy'
import { updateUserPurchases } from './hooks/updateUserPurchases'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'createdAt',
    defaultColumns: ['createdAt', 'orderedBy'],
    preview: doc => `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/orders/${doc.id}`,
  },
  hooks: {
    afterChange: [updateUserPurchases, clearUserCart],
  },
  access: {
    read: adminsOrOrderedBy,
    update: admins,
    create: adminsOrLoggedIn,
    delete: admins,
  },
  fields: [
    {
      name: 'orderedBy',
      type: 'relationship',
      relationTo: 'users',
      hooks: {
        beforeChange: [populateOrderedBy],
      },
    },
    {
      name: 'total',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          min: 0,
        },
        {
          name: 'quantity',
          type: 'number',
          min: 0,
        },
      ],
    },
    {
      name: 'shippingTicket',
      label: 'Etiqueta de Envio',
      type: 'text',
      required: true,
    },
    {
      name: 'shippingZipCode',
      label: 'CEP',
      type: 'number',
      required: true,
    },
    {
      name: 'shippingHouseNumber',
      label: 'Número',
      type: 'number',
      required: true,
    },
    {
      name: 'shippingComplement',
      label: 'Complemento',
      type: 'text',
      required: true,
    },
    {
      name: 'userSocialId',
      label: 'CPF',
      type: 'number',
      required: true,
    },
    {
      name: 'userPhoneNumber',
      label: 'Telefone',
      type: 'text',
      required: true,
    },
  ],
}
