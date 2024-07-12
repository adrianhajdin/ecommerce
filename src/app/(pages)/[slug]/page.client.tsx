'use client'

import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Category } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'

import ExitPreviewButton from '../../_components/ExitPreview'

import { Hero } from '../../_components/Hero'
import { generateMeta } from '../../_utilities/generateMeta'
import Filters from '../products/Filters'

import { useLivePreview } from '@payloadcms/live-preview-react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../../app/_components/Gutter'
import RichText from '../../../app/_components/RichText'
import { Blocks } from '../../_components/Blocks'


import classes from './index.module.scss'

export const PageTemplate: React.FC<{ page: Page | null | undefined, slug, categories, isDraftMode }> = ({ page, slug, categories, isDraftMode }) => {
  const { data } = useLivePreview({
    serverURL: `${process.env.PAYLOAD_PUBLIC_SERVER_URL}`,
    depth: 2,
    initialata: page,
  })
  const { hero, layout } = data

  console.log(data)

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
        <ExitPreviewButton />
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