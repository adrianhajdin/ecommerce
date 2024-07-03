import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { generateMeta } from '../../_utilities/generateMeta'
import Filters from '../products/Filters'

export const dynamic = 'force-dynamic'

import Categories from '../../_components/Categories'
import Promotion from '../../_components/Promotion'

import classes from './index.module.scss'

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })

    categories = await fetchDocs<Category>('categories')
  } catch (error: unknown) {
    console.error(error)
  }

  if (!page) {
    try {
      page = await fetchDoc<Page>({
        collection: 'editablepages',
        slug,
        draft: isDraftMode,
      })
    } catch (error: unknown) {
      console.error(error)
    }
  }
  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  const pageTitle = page.title === 'hot' ? 'Em Alta' : page.title

  return (
    <React.Fragment>
      {isDraftMode && (
        <div
          style={{
            backgroundColor: 'yellow',
            padding: '10x',
            textAlign: 'center',
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        >
          Você está no modo de pré-visualização
        </div>
      )}
      {slug === 'home' ? (
        <section>
          <Hero {...hero} />
        </section>
      ) : (
        <>
          <Hero {...hero} />
          <div className={classes.filters}>
            <Filters
              categories={categories}
              colors={categories}
              page_name={pageTitle}
              preselectedCategory={categories}
            />
          </div>
          <Gutter>
            <Blocks
              blocks={layout}
              disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
            />
          </Gutter>
        </>
      )}
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error: unknown) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error: unknown) {
    // don't throw an error if the fetch fails
  }
  return generateMeta({ doc: page })
}
