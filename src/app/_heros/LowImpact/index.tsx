import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { DefaultMedia, HighImpactMedia } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const LowImpactHero: React.FC<Page['hero']> = ({ media }) => {
  const mainMedia = [media]
  return (
    <div className={classes.content}>
      <Fragment>
        <DefaultMedia resources={mainMedia} priority />
      </Fragment>
    </div>
  )
}
