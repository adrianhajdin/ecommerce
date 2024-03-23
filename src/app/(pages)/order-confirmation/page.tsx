import React, { Suspense } from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { OrderConfirmationPage } from './OrderConfirmationPage'

import classes from './index.module.scss'

export default function OrderConfirmation() {
  return (
    <Gutter className={classes.confirmationPage}>
      <Suspense fallback={<div>Carregando...</div>}>
        <OrderConfirmationPage />
      </Suspense>
    </Gutter>
  )
}

export const metadata = {
  title: 'Confirmação de Pedido',
  description: 'Seu pedido foi confirmado.',
  openGraph: mergeOpenGraph({
    title: 'Confirmação de Pedido',
    url: '/order-confirmation',
  }),
}
