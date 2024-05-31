{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import { fetchDocs } from '../../_api/fetchDocs'
import { fetchHeader } from '../../_api/fetchGlobals'
import { Gutter } from '../Gutter'
import { HeaderComponent } from './HeaderComponent'
import { HeaderNav } from './Nav'

import classes from './index.module.scss'

export async function Header() {
  let header = null
  let categories: Category[] | null = null

  try {
    categories = await fetchDocs<Category>('categories')

    // console.log(categories)
  } catch (error: unknown) {
    console.log(error)
  }

  try {
    header = await fetchHeader()
  } catch (error: unknown) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <>
      <header className={classes.header}>
        <Gutter className={classes.wrap}>
          <Link href="/">
            {/* Cannot use the `<picture>` element here with `srcSet`
              This is because the theme is able to be overridden by the user
              And so `@media (prefers-color-scheme: dark)` will not work
              Instead, we just use CSS to invert the color via `filter: invert(1)` based on `[data-theme="dark"]`
            */}
            <img className={classes.logo} alt="Minimo 1" src="/minimo_1_small.jpeg" />
          </Link>
          <div className={classes.separatorV}></div> {/* Separador vertical */}
          <HeaderComponent categories={categories} />
          <HeaderNav header={header} />
        </Gutter>
      </header>
    </>
  )
}
