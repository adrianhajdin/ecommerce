'use client'

import React from 'react'
import Link from 'next/link'

import { Product } from '../../../payload/payload-types'
import { DefaultMedia } from '../Media'

import classes from './index.module.scss'

const parsePrice = (price, discountPercentage) => {
  if (price) {
    if (discountPercentage > 0) {
      return price * (1 - discountPercentage * 0.01)
    }
    return price
  }
  return 0
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
    doc: { slug, title, categories, photos, description, price, discountPercentage } = {},
    className,
  } = props

  const metaImage = photos.map(item => item.photo)

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = title

  // Verificar se discountPercentage é nulo e atribuir 0 se for o caso
  const discount = discountPercentage == null ? 0 : discountPercentage
  const adjustedPrice = parsePrice(price, discount)
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
            <p className={classes.description}>
              {discount > 0 ? (
                <>
                  <s className={classes.strikethrough}>R$ {price.toFixed(2)}</s> R${' '}
                  {adjustedPrice.toFixed(2)}
                </>
              ) : (
                `R$ ${adjustedPrice.toFixed(2)}`
              )}
            </p>
          </div>
        )}
      </div>
    </Link>
  )
}
