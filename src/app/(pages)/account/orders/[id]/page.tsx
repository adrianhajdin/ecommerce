import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Order } from '../../../../../payload/payload-types'
import { HR } from '../../../../_components/HR'
import { Media } from '../../../../_components/Media'
import { DefaultMedia } from '../../../../_components/Media'
import { Price } from '../../../../_components/Price'
import { formatDateTime } from '../../../../_utilities/formatDateTime'
import { getMeUser } from '../../../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../../../_utilities/mergeOpenGraph'

import classes from './index.module.scss'

export default async function Order({ params: { id } }) {
  const { token } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'Você deve estar logado para visualizar este pedido.',
    )}&redirect=${encodeURIComponent(`/order/${id}`)}`,
  })

  let order: Order | null = null

  try {
    order = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })?.then(async res => {
      if (!res.ok) notFound()
      const json = await res.json()
      if ('error' in json && json.error) notFound()
      if ('errors' in json && json.errors) notFound()
      return json
    })
  } catch (error: unknown) {
    console.error(error) // eslint-disable-line no-console
  }

  if (!order) {
    notFound()
  }


  return (
    <div>
      <h5>
        {`Pedido`}
        <span className={classes.id}>{` ${order.id}`}</span>
      </h5>
      <div className={classes.itemMeta}>
        <p>{`ID: ${order.id}`}</p>
        <p>{`Comprado em: ${formatDateTime(order.createdAt)}`}</p>
        <p className={classes.total}>
          {'Total: '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'brl',
          }).format(order.total)}
        </p>
      </div>

      <div className={classes.order}>
        {order.items?.map((item, index) => {
          if (typeof item.product === 'object') {
            const {
              quantity,
              product,
              product: { id, title },
            } = item

            const metaImage = product.photos.map(item => item.photo)


            return (
              <Fragment key={index}>
                <div className={classes.row}>
                  <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
                    {!metaImage && <span className={classes.placeholder}>No image</span>}
                    {metaImage && typeof metaImage !== 'string' && (
                      <DefaultMedia
                        className={classes.media}
                        imgClassName={classes.image}
                        resources={metaImage}
                        fill
                      />
                    )}
                  </Link>
                  <div className={classes.rowContent}>
                    <h6 className={classes.title}>
                      <Link href={`/products/${product.slug}`} className={classes.titleLink}>
                        {title}
                      </Link>
                    </h6>
                    <p>{`Quantity: ${quantity}`}</p>
                  </div>
                </div>
              </Fragment>
            )
          }

          return null
        })}
      </div>
      <HR className={classes.hr} />
    </div>
  )
}

export async function generateMetadata({ params: { id } }): Promise<Metadata> {
  return {
    title: `Order ${id}`,
    description: `Order details for order ${id}.`,
    openGraph: mergeOpenGraph({
      title: `Order ${id}`,
      url: `/orders/${id}`,
    }),
  }
}
