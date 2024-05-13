import dotenv from 'dotenv'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import express from 'express'
import calculateFreightRouter from './payload/endpoints/melhor_envio';
import carrinhoFreightRouter from './payload/endpoints/melhor_envio_add_carrinho';
import GeraEtiquetaFreightRouter from './payload/endpoints/melhor_envio_add_etiqueta';
import PrintEtiquetaFreightRouter from './payload/endpoints/melhor_envio_print_etiqueta';
import CheckoutFreightRouter from './payload/endpoints/melhor_envio_checkout';
import EmailRouter from './payload/endpoints/email';
import payload from 'payload'

import { seed } from './payload/seed'

const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use('/api', calculateFreightRouter);
app.use('/api', carrinhoFreightRouter);
app.use('/api', GeraEtiquetaFreightRouter);
app.use('/api', PrintEtiquetaFreightRouter);
app.use('/api', CheckoutFreightRouter);
app.use('/api', EmailRouter);

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_SEED === 'true') {
    await seed(payload)
    process.exit()
  }

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}

start()