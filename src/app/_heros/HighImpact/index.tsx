import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media, HighImpactMedia } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const HighImpactHero: React.FC<Page['hero']> = ({ richText, medias, links }) => {
  const metaImage = medias.map(item => item.media);
  return (
    <>
    <Gutter className={classes.hero}>
      <div className={classes.content}>
        <RichText content={richText} /> 
        {Array.isArray(links) && links.length > 0 && (
          <ul className={classes.links}>
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>

      </Gutter>

      <div className={classes.media}>
        {typeof metaImage === 'object' && (
          <Fragment>
            <HighImpactMedia
              resources={metaImage}
              // fill
              imgClassName={classes.image}
              priority
            />
            {metaImage[0]?.caption && <RichText content={metaImage[0].caption} className={classes.caption} />}
          </Fragment>
        )}
      </div>
 
      </>

  )
}
