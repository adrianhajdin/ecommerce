import type { CollectionConfig } from 'payload/types'

import ExportButton from '../../../app/_components/ExportButton'
import { admins } from '../../access/admins'
import { adminsOrLoggedIn } from '../../access/adminsOrLoggedIn'
import { adminsOrOrderedBy } from './access/adminsOrOrderedBy'
import { clearUserCart } from './hooks/clearUserCart'
import { populateOrderedBy } from './hooks/populateOrderedBy'
import { updateUserPurchases } from './hooks/updateUserPurchases'

export const Orders: CollectionConfig = {
  slug: 'orders',
  labels: { plural: 'Pedidos', singular: 'Pedido' },
  admin: {
    useAsTitle: 'createdAt',
    description: 'Pedidos',
    defaultColumns: ['createdAt', 'orderedBy'],
    preview: doc => `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/orders/${doc.id}`,
    components: {
      BeforeListTable: [ExportButton], // Adicione o componente aqui
    },
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
      name: 'shipped',
      label: 'Enviado',
      type: 'checkbox',
    },
    {
      name: 'delivered',
      label: 'Entregue',
      type: 'checkbox',
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
        {
          name: 'selectedSize',
          label: 'Tamanho',
          type: 'text',
          required: true,
        },
        {
          name: 'selectedColor',
          label: 'Cor',
          type: 'text',
          required: true,
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
      required: false,
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
