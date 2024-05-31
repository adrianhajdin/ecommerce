import React, { Fragment } from 'react'
import { Metadata } from 'next'

import { fetchSettings } from '../../_api/fetchGlobals'
import { Gutter } from '../../_components/Gutter'
import { Message } from '../../_components/Message'
import { LowImpactHero } from '../../_heros/LowImpact'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { CheckoutPage } from './CheckoutPage'

import classes from './index.module.scss'

export default async function Checkout() {
  await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'Você precisa entrar para continuar',
    )}&redirect=${encodeURIComponent('/checkout')}`,
  })

  return (
    <div className={classes.checkout}>
      <Gutter>
        <CheckoutPage />
      </Gutter>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Crie uma conta ou faça login.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
