import React from 'react'
import { draftMode } from 'next/headers'

import { Category, Color, Page } from '../../../payload/payload-types'
import { fetchDocs } from '../..//_api/fetchDocs'
import { Gutter } from '../..//_components/Gutter'
import { HR } from '../..//_components/HR'
import { fetchDoc } from '../../_api/fetchDoc'
import { Blocks } from '../../_components/Blocks'
import ExitPreviewButton from '../../_components/ExitPreview'
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
  } catch (error: unknown) {
    console.log(error)
  }

  return (
    <div className={classes.container}>
      {isDraftMode && (
        <div
          style={{
            backgroundColor: 'yellow',
            padding: '10px',
            textAlign: 'center',
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        >
          Você está no modo de pré-visualização
          <ExitPreviewButton />
        </div>
      )}
      <div className={classes.filters}>
        <Filters page_name={'Produtos'} categories={categories} colors={colors} />
      </div>
      <Gutter className={classes.gutterMobile}>
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
