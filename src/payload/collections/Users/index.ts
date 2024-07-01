import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'
import adminsAndUser from './access/adminsAndUser'
import { checkRole } from './checkRole'
import { customerProxy } from './endpoints/customer'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'
import { loginAfterCreate } from './hooks/loginAfterCreate'
import { resolveDuplicatePurchases } from './hooks/resolveDuplicatePurchases'

// Define the type for the user

const Users: CollectionConfig = {
  slug: 'users',
  labels: { plural: 'Usuários', singular: 'Usuário' },
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
        // req,
        token,
        user,
      }: {
        req: any
        token: string
        user: { email: string }
      }) => {
        // Use the token provided to allow your user to reset their password
        const resetPasswordURL = `localhost:3000/reset-password?token=${token}`

        // return `
        //   <!doctype html>
        //   <html>
        //     <body>
        //       <p>Hello, ${user.email}!</p>
        //       <p>Click below to reset your password.</p>
        //       <p>
        //         <a href="${resetPasswordURL}">${resetPasswordURL}</a>
        //       </p>
        //     </body>
        //   </html>
        // `
        return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Example</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    background-color: #ffffff;
                    width: 100%;
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    border: 1px solid #e0e0e0;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding: 10px 0;
                }
                .header img {
                    width: 100px;
                }
                .content {
                    text-align: center;
                    padding: 20px 0;
                }
                .code {
                    font-size: 24px;
                    font-weight: bold;
                    background-color: #f4f4f4;
                    padding: 10px;
                    border-radius: 4px;
                    margin: 20px 0;
                }
                .footer {
                    font-size: 12px;
                    color: #888888;
                    text-align: center;
                    padding: 20px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                     <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QKiRXhpZgAATU0AKgAAAAgABAE7AAIAAAAQAAABSodpAAQAAAABAAABWpydAAEAAAAgAAACeuocAAcAAAEMAAAAPgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATmljb2xhcyBTYXRobGVyAAAB6hwABwAAAQwAAAFsAAAAABzqAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE4AaQBjAG8AbABhAHMAIABTAGEAdABoAGwAZQByAAAA/+EDaGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iLz48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+PGRjOmNyZWF0b3I+PHJkZjpTZXEgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOmxpPk5pY29sYXMgU2F0aGxlcjwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMABwUFBgUEBwYFBggHBwgKEQsKCQkKFQ8QDBEYFRoZGBUYFxseJyEbHSUdFxgiLiIlKCkrLCsaIC8zLyoyJyorKv/bAEMBBwgICgkKFAsLFCocGBwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKv/AABEIALYEkQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APpGiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiqWq6raaLps9/qUywW1uhd5HOABQA/UNRtdLspby/njt7eJdzySMFVR9a8vuP2i/BkOo/Z4muZoA2GukiOwf/Wrxj4pfE+88f6mbeDdBosLHy4MkeaezMO9cBk5HJHvmmB946LrVjr+lQ6jpVwlxazLuSRT1q/XkP7PMNzZ/D4JdblWa4aWJW7Ka9epAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVTUNUs9K0+W+v51gt4VLO7nAAFACalqtnpGnz32ozLBbwLueRzgAV8m/FT4o3nj3U2tbR3g0a3f91CD/rW/vt6+wp/xV+Kd1471NrOxZ7fRIH/dxZ5nP99v6Cub8PeDNS1+RSoa3t88yMvJHsKYGFb2s11MIbWJ5ZG6IozXpng34XyXNxFc6vH5h4Kwdh9a9A8G/Da3sI1EEJDH70jfeb8a9V0vw9BZRrhRkdwKYEXhrS/7PtEUqFwoAAGAB6CugpFUKMClqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkyKWuR+Jfi2fwX4LutXs445biNkSNJDgEswHP50AddmiuO+GXjmPx54Tj1B1WG8Q7LmFT9xv8DXY0AFFFFABRRRQAUUUUAFFFFABRRRQAdKM0h6c15v8AFf4n/wDCAW9lDZRR3OoXTZETnhYwcFjQB6TmiqOk3w1HSbS7GP38KScdsqDV6gAooooAKKKKACiiigAooooACcDmvDfjDofjDxXdG1t7uzttGi5SDzG3SsP4mwPyFe4kZFcX411bQPDNtDd+I52ggnk8tXEbPz7gUAeJeFPhQscyyan/AKVMT9wD92v+Ne1aD4Oht0QvHgAdMYFZ1h8SPh3Am6LX7X/gasD+WKvW/wAXvBd3q1rpmn6p9quLqQRxrFE5GT74xTA7O3tI7dAEUD6VYFIvSlpAFFFFABRRRQAUUUUAFFFFAATjrRms/W759O0W9u4lDSQW7yoD0JVSQDXmfwu+NMfjDUX0fXIobHUST5G1vkl9hnv7UAeuUUgNLQAUUUUAFFFFABRRRQAUUUUABOOtGapaxqdto2kXGo3rMtvbIZJCoyQB7CuRh+MngOeDzF8QQJxna6sD+RFAHd5orC8M+LdI8XWkt5oVwbi2jlMRk2MoJHpkVu0AFFFFABRRRQAUUUUAFFFFABRkUjMFUk9AM1wFv8avAs0kkcmtLBJGxVlmiZcE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">
                </div>
                <div class="content">
                    <p>Oi, ${user.email}!<br>
                    Que bom ter você com a gente!</p>
                    <p>Para acessar sua conta, troque a senha no link abaixo:</p>
                     <a href="${resetPasswordURL}">${resetPasswordURL}</a>
                    <p>Este processo é 100% seguro!</p>
                </div>
                <div class="footer">
                    <p>*E-mail gerado automaticamente, não responda.</p>
                </div>
            </div>
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
            {
              name: 'selectedColor',
              type: 'text',
            },
            {
              name: 'selectedSize',
              type: 'text',
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
