import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <section className={classes.createAccount}>
      <Gutter>
        <div className={classes.formWrapper}>
          <div className={classes.formContainer}>
            <RenderParams className={classes.params} />

            <div className={classes.formTitle}>
              <h3>Crie a sua conta</h3>
            </div>
            <CreateAccountForm />
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Crie uma conta ou entre',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
