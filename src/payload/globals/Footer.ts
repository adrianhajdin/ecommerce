import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  admin: {
    hidden: false,
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
    },
    {
      name: 'navItems',
      hidden: true,
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
