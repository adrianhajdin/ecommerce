import React, { Fragment } from 'react'

import { Category, Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { ColorSelectButton } from '../../_components/ColorSelectButton'
import { SizePicker } from '../../_components/SizePicker'
import { SocialShare } from '../../_components/SocialShare'
import { FavButton } from '../../_components/FavButton'
import { FreightCalculator } from '../../_components/FreightCalculator'


import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { Price } from '../../_components/Price'

import classes from './index.module.scss'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const { title, categories, colors, sizes, meta: { image: metaImage, description } = {} } = product

  //const colors = ['#1c212c', '#ffed03', '#0dcaf0']; // substitua com as cores do seu produto

  return (
    <Gutter className={classes.productHero}>
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </div>

      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.categoryWrapper}>
          <div className={classes.categories}>
            {categories?.map((category, index) => {
              const { title: categoryTitle } = category as Category

              const titleToUse = categoryTitle || 'Generic'
              const isLast = index === categories.length - 1

              return (
                <p key={index} className={classes.category}>
                  {titleToUse} {!isLast && <Fragment>, &nbsp;</Fragment>}
                  <span className={classes.separator}>|</span>
                </p>
              )
            })}
          </div>
          <p className={classes.stock}> No Estoque</p>
        </div>

        <Price product={product} button={false} />

        <div className={classes.description}>
          <h6>Description</h6>
          <p>{description}</p>
        </div>
        <ColorSelectButton colors={colors}/>
        <SizePicker sizes={sizes}/>
        <div className={classes.buttonGroup}>
        <AddToCartButton product={product} className={classes.addToCartButton} />
        <FavButton product={product} />
      </div>
        <SocialShare/>
        <hr className={classes.socialShareFreightSeparator} />
        <FreightCalculator/>

      </div>
    </Gutter>
  )
}
