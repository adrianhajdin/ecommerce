import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Product, Product as ProductType } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { Blocks } from '../../../_components/Blocks'
import { PaywallBlocks } from '../../../_components/PaywallBlocks'
import { ProductHero } from '../../../_heros/Product'
import { generateMeta } from '../../../_utilities/generateMeta'
import { Gutter } from '../../../_components/Gutter'
import { HR } from '../../../_components/HR'
import Filters from '.././Filters'
import { Category, Page } from '../../../../payload/payload-types'

import classes from '../index.module.scss'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Product({ params: { slug } }) {

  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    categories = await fetchDocs<Category>('categories')

  } catch (error) {
    console.log(error)
  }

  // Função para encontrar o ID de uma categoria cujo título contém a string slug, ignorando maiúsculas e minúsculas
  const findCategoryIdBySlug = (categories: Category[], slug: string): string | undefined => {
    const category = categories.find(category => category.slug.toLowerCase().includes(slug.toLowerCase()));
    return category ? category.id : undefined;
  };

  // Testando a função
  const categoryId = findCategoryIdBySlug(categories, slug);

  if (categoryId){

  
  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })
  } catch (error) {
    console.log(error)
  }

  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <Filters categories={categories} preselectedCategory={categoryId}/>
        <Blocks blocks={page?.layout} disableTopPadding={true} />
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
    
      <ProductHero product={product}  />

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
    </>
  )
}}

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
