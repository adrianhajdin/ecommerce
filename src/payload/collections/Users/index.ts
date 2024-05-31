import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'
import adminsAndUser from './access/adminsAndUser'
import { checkRole } from './checkRole'
import { customerProxy } from './endpoints/customer'
import { createStripeCustomer } from './hooks/createStripeCustomer'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'
import { loginAfterCreate } from './hooks/loginAfterCreate'
import { resolveDuplicatePurchases } from './hooks/resolveDuplicatePurchases'
import { CustomerSelect } from './ui/CustomerSelect'

// Define the type for the user
interface User {
  email: string
  // other properties
}

const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(['admin'], user),
  },
  hooks: {
    beforeChange: [],
    afterChange: [loginAfterCreate],
  },
  auth: {
    forgotPassword: {
      generateEmailHTML: ({
        req,
        token,
        user,
      }: {
        req: any
        token: string
        user: { email: string }
      }) => {
        // Use the token provided to allow your user to reset their password
        const resetPasswordURL = `localhost:3000/reset-password?token=${token}`

        return `
          <!doctype html>
          <html>
            <body>
              <h1>Here is my custom email template!</h1>
              <p>Hello, ${user.email}!</p>
              <p>Click below to reset your password.</p>
              <p>
                <a href="${resetPasswordURL}">${resetPasswordURL}</a>
              </p>
            </body>
          </html>
        `
      },
    },
  },
  endpoints: [
    {
      path: '/:teamID/customer',
      method: 'get',
      handler: customerProxy,
    },
    {
      path: '/:teamID/customer',
      method: 'patch',
      handler: customerProxy,
    },
  ],
  fields: [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'socialId',
      label: 'CPF',
      type: 'number',
    },
    {
      name: 'birthdate',
      label: 'Data de Nascimento',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      label: 'Telefone',
      type: 'text',
    },
    {
      name: 'address',
      label: 'Endereço',
      type: 'text',
    },
    {
      name: 'houseNumber',
      label: 'Número',
      type: 'number',
    },
    {
      name: 'complement',
      label: 'Complemento',
      type: 'text',
    },
    {
      name: 'neighborhood',
      label: 'Bairro',
      type: 'text',
    },
    {
      name: 'city',
      label: 'Cidade',
      type: 'text',
    },
    {
      name: 'state',
      label: 'Estado',
      type: 'text',
    },
    {
      name: 'zipCode',
      label: 'CEP',
      type: 'number',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['customer'],
      options: [
        {
          label: 'admin',
          value: 'admin',
        },
        {
          label: 'customer',
          value: 'customer',
        },
      ],
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      access: {
        read: admins,
        create: admins,
        update: admins,
      },
    },
    {
      name: 'purchases',
      label: 'Purchases',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      hooks: {
        beforeChange: [resolveDuplicatePurchases],
      },
    },
    {
      label: 'Cart',
      name: 'cart',
      type: 'group',
      fields: [
        {
          name: 'items',
          label: 'Items',
          type: 'array',
          interfaceName: 'CartItems',
          fields: [
            {
              name: 'product',
              type: 'relationship',
              relationTo: 'products',
            },
            {
              name: 'quantity',
              type: 'number',
              min: 0,
              admin: {
                step: 1,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'skipSync',
      label: 'Skip Sync',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
        readOnly: true,
        hidden: true,
      },
    },
  ],
  timestamps: true,
}

export default Users
