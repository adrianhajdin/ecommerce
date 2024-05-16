'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Product } from '../../../payload/payload-types'
import { DefaultMedia } from '../Media'

import { Price } from '../Price'

import classes from './index.module.scss'

const priceFromJSON = (priceJSON): string => {
  let price = ''

  if (priceJSON) {
    try {
      const parsed = JSON.parse(priceJSON)?.data[0]
      const priceValue = parsed.unit_amount
      const priceType = parsed.type
      // Adicionando suporte para o dólar americano e Real brasileiro como exemplo
      price = `${parsed.currency === 'usd' ? '$' : parsed.currency === 'brl' ? 'R$' : ''}${(priceValue / 100).toFixed(2)}`
      if (priceType === 'recurring') {
        price += `/${
          parsed.recurring.interval_count > 1
            ? `${parsed.recurring.interval_count} ${parsed.recurring.interval}`
            : parsed.recurring.interval
        }`
      }
    } catch (e) {
      console.error(`Não foi possível analisar priceJSON`) // Mensagem traduzida
    }
  }

  return price
}

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  showCategories?: boolean
  hideImagesOnMobile?: boolean
  title?: string
  relationTo?: 'products'
  doc?: Product
}> = props => {
  // Desestruturação de props, mantida inalterada para tradução

  const {
    showCategories,
    title: titleFromProps,
    doc,
    doc: { slug, title, categories, photos, description } = {},
    className,
  } = props
  const metaImage = photos.map(item => item.photo);


  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/products/${slug}`

  return (
    <Link href={href} className={[classes.card, className].filter(Boolean).join(' ')}>
      <div className={classes.mediaWrapper}>
        {!metaImage[0] && <div className={classes.placeholder}>Sem imagem</div>}
        {metaImage[0] && typeof metaImage[0] !== 'string' && (
          <DefaultMedia imgClassName={classes.image} resources={metaImage} fill />
        )}
      </div>

      <div className={classes.content}>
        {titleToUse && <h4 className={classes.title}>{titleToUse}</h4>}
        {description && (
          <div className={classes.body}>
            {description && <p className={classes.description}>{sanitizedDescription}</p>}
          </div>
        )}
        {doc && <Price product={doc} />}
      </div>
    </Link>
  )
}
