'use client'
import React from 'react'
import Link from 'next/link'


import data from '../../../assets/dataAstro-ecommerce.json'
import _CardCategoriesAstro from '../_CategoriesCardAstro'

import './assets/scss/astro-ecommerce.scss'


const __CategoryCard = ({ category }: CategoryCardProps) => {
  

  return (
    <>

      <div className="row mb-8">
        <div className="d-block text-center mb-5">
          <h3>Shop by category</h3>
          <a className="text-dark font-weight-bold" href="#">Browse all categories &#62;</a>
        </div> 
      {/* Liste des catégories supplémentaires */}
        {data.categories.slice(0, 4).map((jsonCategory, index) => (
          <div className="col-md-6 col-lg-3">
          <_CardCategoriesAstro
          key={index}
          thumb_src={jsonCategory.thumb_src || ''} // Valeur par défaut
          title={jsonCategory.title || 'No Title'} // Valeur par défaut
          collection={jsonCategory.collection || 'No Collection'} // Valeur par défaut
          />
          </div>
        ))}
        </div>
      


        <div className="row mb-5">
        <div className="d-block text-center mb-5">
          <h3>Shop by category</h3>
          <a className="text-dark font-weight-bold" href="#">Browse all categories &#62;</a>
        </div>
        <div className="col-md-6">
        <div className="mb-4">
          <_CardCategoriesAstro
            classList = "h-100"
            cta = ""
            thumb_src = {data.categories[4].thumb_src}
            title = {data.categories[4].title}
            collection=''
          />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-4">
            <_CardCategoriesAstro
              classList = ""
              cta = ""
              thumb_src = {data.categories[5].thumb_src}
              title = {data.categories[5].title}
              collection=''
            />
          </div>
          <div className="">
            <_CardCategoriesAstro
              classList = ""
              cta = ""
              thumb_src = {data.categories[6].thumb_src}
              title = {data.categories[6].title}
              
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default __CategoryCard
