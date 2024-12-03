import React, { Fragment } from 'react'

import { Category, Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { Price } from '../../_components/Price'

/* Fonctionalite  */
import { Rating } from '../../_components/_Rating'
import { ShareButtons } from '../../_components/_ShareButtons'


import classes from './index.module.scss'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
    const {
      title,
      categories,  // Assure-toi que categories est bien extrait ici
      price = 150, // valeur par défaut pour price
      discount = 0, // valeur par défaut pour discount
      rating = { average: 0, count: 0 }, // valeur par défaut pour rating
      variants = [], // valeur par défaut pour variants
      meta: { image: metaImage, description } = { description: '' },
      stock = 0,
      gallery = [] // valeur par défaut pour gallery
    } = product

    const discountedPrice = price && discount
    ? ((price - (price * discount) / 100).toFixed(2))
    : price?.toFixed(2);


  return (
    <Gutter className={classes.productHero}>
       {/* Section de l'image principale et galerie */}
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
        <div className={classes.gallery}>
          {/* Ajouter des miniatures de la galerie */}
          {product.gallery?.map((img, index) => (
            <Media
              key={index}
              imgClassName={classes.thumbnail}
              resource={img}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
          <ShareButtons className={classes.shareButtons} />
      </div>

      {/* Section des détails du produit */}
      <div className={classes.details}>
        <h1> Ici le -heros Prooduct  </h1>
        <h3 className={classes.title}>{title}</h3>

          {/* Catégories */}
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

           {/* Évaluation et stock */}
          <p className={classes.stock}> In stock</p>

          <div className={classes.status}>
          {rating && <Rating rating={rating.average} count={rating.count} />}
          
          
          <p className={classes.stock}>
            {stock > 0 ? `In stock (${stock} available)` : 'Out of stock'}
          </p>
        </div>

          {/* Prix avec réduction */}
        <div className={classes.price}>
          {discount && <span className={classes.oldPrice}>${product.price.toFixed(2)}</span>}
          <span className={classes.currentPrice}>${discountedPrice}</span>
        </div>
        <Price product={product} button={false} />

        <div className={classes.description}>
          <h6>Description</h6>
          <p>{description}</p>

          {/* Description */}
        <div className={classes.description}>
          <h6>Description</h6>
          <p>{description || 'No description available.'}</p>
        </div>
        </div>

        {/* Variantes du produit */}
        {variants && variants.length > 0 && (
          <div className={classes.variants}>
            <h6>Available options</h6>
            <div className={classes.variantList}>
              {variants.map((variant, index) => (
                <button key={index} className={classes.variantButton}>
                  {variant.label}
                </button>
              ))}
            </div>
          </div>
        )}

         {/* Boutons d'action */}
         <div className={classes.actions}>
          <AddToCartButton product={product} className={classes.addToCartButton} />
          <button className={classes.addToWishlist}>Add to wishlist</button>
        </div>
        <AddToCartButton product={product} className={classes.addToCartButton} />

         {/* Boutons de partage */}
         <ShareButtons className={classes.shareButtons} product={product} />
      </div>
      </div>
    </Gutter>
  )
}
