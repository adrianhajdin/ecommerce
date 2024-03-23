import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Order } from '../../../payload/payload-types'
import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import { RenderParams } from '../../_components/RenderParams'
import { formatDateTime } from '../../_utilities/formatDateTime'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

import classes from './index.module.scss'

export default async function Orders() {
  const { token } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'Você deve estar logado para visualizar seus pedidos.',
    )}&redirect=${encodeURIComponent('/orders')}`,
  })

  let orders: Order[] | null = null

  try {
    orders = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      cache: 'no-store',
    })
      ?.then(async res => {
        if (!res.ok) notFound()
        const json = await res.json()
        if ('error' in json && json.error) notFound()
        if ('errors' in json && json.errors) notFound()
        return json
      })
      ?.then(json => json.docs)
  } catch (error) {
    // Ao implantar esse template no Payload Cloud, essa página precisa ser construída antes das APIs estarem ativas
    // então ignore o erro aqui e simplesmente renderize a página com dados de fallback quando necessário
    // na produção, você pode querer redirecionar para uma página 404 ou pelo menos registrar o erro em algum lugar
    // console.error(error)
  }

  return (
    <Gutter className={classes.orders}>
      <h1>Pedidos</h1>
      {(!orders || !Array.isArray(orders) || orders?.length === 0) && (
        <p className={classes.noOrders}>Você não tem pedidos.</p>
      )}
      <RenderParams />
      {orders && orders.length > 0 && (
        <ul className={classes.ordersList}>
          {orders?.map((order, index) => (
            <li key={order.id} className={classes.listItem}>
              <Link className={classes.item} href={`/orders/${order.id}`}>
                <div className={classes.itemContent}>
                  <h4 className={classes.itemTitle}>{`Pedido ${order.id}`}</h4>
                  <div className={classes.itemMeta}>
                    <p>{`Data do Pedido: ${formatDateTime(order.createdAt)}`}</p>
                    <p>
                      {'Total: '}
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(order.total / 100)}
                    </p>
                  </div>
                </div>
                <Button
                  appearance="secondary"
                  label="Ver Pedido"
                  className={classes.button}
                  el="button"
                />
              </Link>
              {index !== orders.length - 1 && <HR />}
            </li>
          ))}
        </ul>
      )}
      <HR />
      <Button href="/account" appearance="primary" label="Ir para a conta" />
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Pedidos',
  description: 'Seus pedidos.',
  openGraph: mergeOpenGraph({
    title: 'Pedidos',
    url: '/orders',
  }),
}
