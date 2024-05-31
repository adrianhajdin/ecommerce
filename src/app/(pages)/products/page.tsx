import React from 'react'
import { draftMode } from 'next/headers'

import { Category, Color, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { CollectionArchive } from '../../_components/CollectionArchive'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import Filters from './Filters'

import classes from './index.module.scss'

const Products = async () => {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null
  let colors: Color[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })

    categories = await fetchDocs<Category>('categories')

    colors = await fetchDocs<Color>('colors')
  } catch (error) {
    console.log(error)
  }

  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <div className={classes.filters}>
          <Filters categories={categories} colors={colors} />
        </div>
        <div className={classes.productList}>
          <div className={classes.productView}>
            <Blocks blocks={page?.layout} disableTopPadding={true} />
          </div>
        </div>
      </Gutter>
      <HR />
    </div>
  )
}

export default Products
