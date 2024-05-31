import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import {
  Category,
  Color,
  Page,
  Product,
  Product as ProductType,
} from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { Blocks } from '../../../_components/Blocks'
import { Gutter } from '../../../_components/Gutter'
import { HR } from '../../../_components/HR'
import { PaywallBlocks } from '../../../_components/PaywallBlocks'
import { ProductHero } from '../../../_heros/Product'
import { generateMeta } from '../../../_utilities/generateMeta'
import Filters from '.././Filters'

import classes from '../index.module.scss'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Product({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null
  let colors: Color[] | null = null

  try {
    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    console.log(error)
  }

  // Função para encontrar o ID de uma categoria cujo título contém a string slug, ignorando maiúsculas e minúsculas
  const findCategoryIdBySlug = (categories: Category[], slug: string): Category | undefined => {
    const category = categories.find(category =>
      category.slug.toLowerCase().includes(slug.toLowerCase()),
    )
    return category
  }

  // Testando a função
  const category = findCategoryIdBySlug(categories, slug)

  if (category) {
    try {
      page = await fetchDoc<Page>({
        collection: 'pages',
        slug: 'products',
        draft: isDraftMode,
      })

      colors = await fetchDocs<Color>('colors')
    } catch (error) {
      console.log(error)
    }

    return (
      <div className={classes.container}>
        <Gutter className={classes.products}>
          <div className={classes.filters}>
            <Filters categories={categories} colors={colors} preselectedCategory={category} />
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
  } else {
    //const { isEnabled: isDraftMode } = draftMode()

    let product: Product | null = null

    try {
      product = await fetchDoc<Product>({
        collection: 'products',
        slug,
        draft: isDraftMode,
      })
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    }

    if (!product) {
      notFound()
    }

    const { relatedProducts } = product

    return (
      <>
        <div className={classes.productContainer}>
          <ProductHero product={product} />

          <Blocks
            disableTopPadding
            blocks={[
              {
                blockType: 'relatedProducts',
                blockName: 'Produtos Relacionados',
                relationTo: 'products',
                introContent: [
                  {
                    type: 'h3',
                    children: [
                      {
                        text: 'Produtos Relacionados',
                      },
                    ],
                  },
                ],
                docs: relatedProducts,
              },
            ]}
          />
        </div>
      </>
    )
  }
}

export async function generateStaticParams() {
  try {
    const products = await fetchDocs<ProductType>('products')
    return products?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let product: Product | null = null

  try {
    product = await fetchDoc<Product>({
      collection: 'products',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateMeta({ doc: product })
}
