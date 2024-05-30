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
import CancelFreightRouter from './payload/endpoints/melhor_envio_cancelamento';
import EmailRouter from './payload/endpoints/email_compra';
import EmailRouterCad from './payload/endpoints/email_cadastro';

import processPayment from './payload/endpoints/gateway_pagamento';

import payload from 'payload'

const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use('/api', calculateFreightRouter);

app.use('/api', carrinhoFreightRouter);
app.use('/api', GeraEtiquetaFreightRouter);
app.use('/api', PrintEtiquetaFreightRouter);
app.use('/api', CheckoutFreightRouter);
app.use('/api', CancelFreightRouter);
app.use('/api', EmailRouter);
app.use('/api', EmailRouterCad);

app.use('/api', processPayment);


const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
    email: {
      transportOptions: {
        host: process.env.EMAIL_HOST, // Host fornecido
        auth: {
          user: process.env.EMAIL_USER, // Usuário fornecido
          pass: process.env.EMAIL_PASS, // Senha fornecida
        },
        port: process.env.EMAIL_PORT, // Porta fornecida
        secure: false, // false para STARTTLS na porta 587
        requireTLS: true,
      },
      fromName: 'Nicolas',
      fromAddress: 'nicolas@minimo1.com',
    },
  })

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