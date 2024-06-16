import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { HighImpactMedia, DefaultMedia } from '../../_components/Media'
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
