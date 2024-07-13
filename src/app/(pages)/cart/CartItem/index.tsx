'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { DefaultMedia } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'

import classes from './index.module.scss'

const DiscountedPrice = (price, discountPercentage) => {
  // Calcula o preço com desconto, considerando desconto nulo como zero
  const discount = discountPercentage ? discountPercentage : 0
  const discountedPrice = price * (1 - discount / 100)

  // Formata o preço na moeda brasileira
  const formattedPrice = discountedPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedPrice
}

const CartItem = ({ product, title, qty, selectedSize, selectedColor, addItemToCart }) => {
  const metaImage = product.photos.map(item => item.photo)
  const [quantity, setQuantity] = useState(qty)

  const decrementQty = () => {
    const updatedQty = quantity > 1 ? quantity - 1 : 1

    setQuantity(updatedQty)
    addItemToCart({ product, selectedSize, selectedColor, quantity: Number(updatedQty) })
  }

  const incrementQty = () => {
    const updatedQty = quantity + 1

    setQuantity(updatedQty)
    addItemToCart({ product, selectedSize, selectedColor, quantity: Number(updatedQty) })
  }

  const enterQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQty = Number(e.target.value)

    setQuantity(updatedQty)
    addItemToCart({ product, selectedSize, selectedColor, quantity: Number(updatedQty) })
  }

  return (
    <li className={classes.item} key={title}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>Sem foto</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <DefaultMedia
            className={classes.media}
            imgClassName={classes.image}
            resources={metaImage}
            fill
          />
        )}
      </Link>

      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <p className={classes.itemSizeColor}>
            {selectedColor} - {selectedSize}
          </p>
          <p className={classes.itemSizeColor}>
            {DiscountedPrice(product.price, product.discountPercentage)}
          </p>
        </div>

        <div className={classes.quantity}>
          <div className={classes.quantityBtn} onClick={decrementQty}>
            <Image
              src="/assets/icons/minus.svg"
              alt="minus"
              width={24}
              height={24}
              className={classes.qtnBt}
            />
          </div>

          <input
            type="text"
            className={classes.quantityInput}
            value={quantity}
            onChange={enterQty}
          />

          <div className={classes.quantityBtn} onClick={incrementQty}>
            <Image
              src="/assets/icons/plus.svg"
              alt="plus"
              width={24}
              height={24}
              className={classes.qtnBt}
            />
          </div>
        </div>
      </div>

      <div className={classes.subtotalWrapper}>
        <p>{DiscountedPrice(quantity * product.price, product.discountPercentage)}</p>
        <RemoveFromCartButton
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
      </div>
    </li>
  )
}

export default CartItem
