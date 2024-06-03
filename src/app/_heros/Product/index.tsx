'use client'

import React, { useState } from 'react'

import { Color, Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { ColorSelectButton } from '../../_components/ColorSelectButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { SizePicker } from '../../_components/SizePicker'

import classes from './index.module.scss'

const orderSizes = (sizes) => {
  const sizeOrder = ["PP", "P", "M", "G", "GG"];
  return sizes.sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));
};

const parsePrice = (price, discountPercentage) => {
  if (price) {
    if (discountPercentage > 0) {
      return price * (1 - discountPercentage * 0.01)
    }
    return price
  }
  return 0
}

export const ProductHero: React.FC<{ product: Product }> = ({ product }) => {
  const {
    title,
    price,
    photos,
    categories,
    colors,
    sizes,
    description,
    discountPercentage = 0,
  } = product

  const metaImage = photos.map(item => item.photo)

  const priceValue = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL', // TODO: use `parsed.currency`
  })

  const [selectedColor, setSelectedColor] = useState<Color>(colors[0] as Color)
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  const handleColorSelection = (color: Color) => {
    setSelectedColor(color)
  }

  const handleSizeSelection = size => {
    setSelectedSize(size)
  }
  const discount = discountPercentage == null ? 0 : discountPercentage
  const adjustedPrice = parsePrice(price, discount)
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
          {discount > 0 ? (
                  <>
                    <s className={classes.strikethrough}>R$ {price.toFixed(2)}</s>    R${' '}
                    {adjustedPrice.toFixed(2)}
                  </>
                ) : (
                  `R$ ${adjustedPrice.toFixed(2)}`
                )}
        </div>

        <ColorSelectButton colors={colors} onColorSelect={handleColorSelection} />

        <div className={classes.descriptionTitle}>
          <p>Composição</p>
        </div>

        <div className={classes.description}>
          <p>{description}</p>
        </div>

        <div className={classes.descriptionTitle}>
          <p>Descrição</p>
        </div>

        <div className={classes.description}>
          <p>{description}</p>
        </div>

        <SizePicker sizes={orderSizes(sizes)} onSizeSelect={handleSizeSelection} />

        <div className={classes.cartButton}>
          <AddToCartButton
            product={product}
            className={classes.addToCartButton}
            selectedColor={selectedColor.color}
            selectedSize={selectedSize}
          />
        </div>
      </div>
    </Gutter>
  )
}
