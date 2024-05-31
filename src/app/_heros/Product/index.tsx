import React, { Fragment } from 'react'

import { Category, Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { ColorSelectButton } from '../../_components/ColorSelectButton'
import { FavButton } from '../../_components/FavButton'
import { FreightCalculator } from '../../_components/FreightCalculator'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { PaymentGateway } from '../../_components/PaymentGateway'
import { Price } from '../../_components/Price'
import { SizePicker } from '../../_components/SizePicker'

import classes from './index.module.scss'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const {
    title,
    price,
    photos,
    categories,
    colors,
    sizes,
    description,
    discountPercentage = {},
  } = product

  const metaImage = photos.map(item => item.photo)
  //const colors = ['#1c212c', '#ffed03', '#0dcaf0']; // substitua com as cores do seu produto

  const priceValue = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL', // TODO: use `parsed.currency`
  })

  return (
    <Gutter className={classes.productHero}>
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resources={metaImage} fill />
        )}
      </div>

      <div className={classes.details}>
        <h4 className={classes.title}>{title}</h4>

        <div className={classes.categoryWrapper}>
          <p className={classes.categories}> {priceValue}</p>
        </div>

        <ColorSelectButton colors={colors} />
        <div className={classes.descriptionTitle}>
          <p>Composição </p>
        </div>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.descriptionTitle}>
          <p>Descrição </p>
        </div>
        <div className={classes.description}>
          <p>{description}</p>
        </div>

        <SizePicker sizes={sizes} />
        <div className={classes.cartButton}>
          <AddToCartButton product={product} className={classes.addToCartButton} />
        </div>
      </div>
    </Gutter>
  )
}
