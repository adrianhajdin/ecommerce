import { webpackBundler } from '@payloadcms/bundler-webpack' // bundler-import
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { payloadCloud } from '@payloadcms/plugin-cloud'
// import formBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import { slateEditor } from '@payloadcms/richtext-slate' // editor-import
import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import Colors from './collections/Colors'
import { Media } from './collections/Media'
import { Orders } from './collections/Orders'
import { Pages } from './collections/Pages'
import Products from './collections/Products'
import Users from './collections/Users'
import BeforeDashboard from './components/BeforeDashboard'
import BeforeLogin from './components/BeforeLogin'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { Settings } from './globals/Settings'

const generateTitle: GenerateTitle = () => {
  return 'My Store'
}

const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(), // bundler-config
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: [BeforeLogin],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: [BeforeDashboard],
    },
    webpack: config => {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          alias: {
            ...config.resolve?.alias,
            dotenv: path.resolve(__dirname, './dotenv.js'),
            [path.resolve(__dirname, 'collections/Products/hooks/beforeChange')]: mockModulePath,
            [path.resolve(__dirname, 'collections/Users/hooks/createStripeCustomer')]:
              mockModulePath,
            [path.resolve(__dirname, 'collections/Users/endpoints/customer')]: mockModulePath,
            [path.resolve(__dirname, 'endpoints/customers')]: mockModulePath,
            [path.resolve(__dirname, 'endpoints/products')]: mockModulePath,
            stripe: mockModulePath,
            express: mockModulePath,
          },
        },
      }
    },
  },
  editor: slateEditor({}), // editor-config
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  // database-adapter-config-end
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Pages, Products, Categories, Colors, Orders, Media, Users],
  globals: [Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: ['https://checkout.stripe.com', process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(
    Boolean,
  ),
  csrf: ['https://checkout.stripe.com', process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(
    Boolean,
  ),
  plugins: [
    // redirects({
    //   collections: ['pages', 'products'],
    // }),
    nestedDocs({
      collections: ['categorias'],
    }),
    payloadCloud(),
  ],
})
