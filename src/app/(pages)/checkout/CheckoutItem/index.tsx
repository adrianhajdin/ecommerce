import Link from 'next/link'

import { FreightCalculator } from '../../../_components/FreightCalculator'
import { DefaultMedia } from '../../../_components/Media'
import { Price } from '../../../_components/Price'

import classes from './index.module.scss'

const DiscountedPrice = ({ price, discountPercentage }) => {
  // Calcula o preço com desconto, considerando desconto nulo como zero
  const discount = discountPercentage ? discountPercentage : 0
  const discountedPrice = price * (1 - discount / 100)

  // Formata o preço na moeda brasileira
  const formattedPrice = discountedPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return <p>{formattedPrice}</p>
}

export const CheckoutItem = ({ product, title, quantity, index }) => {
  const metaImage = product.photos.map(item => item.photo)
  return (
    <li className={classes.item} key={index}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>Sem imagem</span>}
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
          <DiscountedPrice price={product.price} discountPercentage={product.discountPercentage} />
        </div>
        <p className={classes.quantity}>x{quantity}</p>
      </div>

      <div className={classes.subtotal}>
        <DiscountedPrice
          price={quantity * product.price}
          discountPercentage={product.discountPercentage}
        />
      </div>
    </li>
  )
}
