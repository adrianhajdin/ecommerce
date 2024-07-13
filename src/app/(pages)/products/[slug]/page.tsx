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
import ExitPreviewButton from '../../../_components/ExitPreview'
import { Gutter } from '../../../_components/Gutter'
import { Hero } from '../../../_components/Hero'
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
  } catch (error: unknown) {
    console.log(error)
  }

  // Função para encontrar o ID de uma categoria cujo título contém a string slug, ignorando maiúsculas e minúsculas
  const findCategoryIdBySlug = (categories: Category[], slug: string): Category | undefined => {
    const category = categories.find(category => category.slug.toLowerCase() == slug.toLowerCase())

    return category
  }

  const category = findCategoryIdBySlug(categories, slug)

  if (category) {
    try {
      page = await fetchDoc<Page>({
        collection: 'pages',
        slug: 'products',
        draft: isDraftMode,
      })

      colors = await fetchDocs<Color>('colors')
    } catch (error: unknown) {
      console.log(error)
    }

    const { hero } = page

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
        <Hero {...hero} />
        <div className={classes.filters}>
          <Filters
            categories={categories}
            colors={colors}
            page_name={page.title}
            preselectedCategory={category}
          />
        </div>
        <Gutter className={classes.products}>
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
    let product: Product | null = null

    try {
      product = await fetchDoc<Product>({
        collection: 'products',
        slug,
        draft: isDraftMode,
      })
    } catch (error: unknown) {
      console.error(error) // eslint-disable-line no-console
    }

    if (!product) {
      notFound()
    }

    const { relatedProducts } = product

    return (
      <>
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
        <div className={classes.productContainer}>
          <ProductHero product={product} />

          {relatedProducts.length > 0 && (
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
          )}
        </div>
      </>
    )
  }
}

export async function generateStaticParams() {
  try {
    const products = await fetchDocs<ProductType>('products')
    return products?.map(({ slug }) => slug)
  } catch (error: unknown) {
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
  } catch (error: unknown) {}

  return generateMeta({ doc: product })
}
