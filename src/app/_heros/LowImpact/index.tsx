import { Gutter } from '../../_components/Gutter'
import { Page } from '../../../payload/payload-types'
import React from 'react'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'
import classes from './index.module.scss'

export const LowImpactHero: React.FC<Page['hero']> = ({ richText }) => {
  return (
    <Gutter className={classes.lowImpactHero}>
      <div className={classes.content}>
          <RichText className={classes.richText} content={richText} />
      </div>
    </Gutter>
  )
}
