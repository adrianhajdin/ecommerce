'use client'
import React, { Fragment, useEffect, useState } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { HighImpactMedia, Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import SplashScreen from '../../_components/SplashScreen/SplashScreen'

import classes from './index.module.scss'

export const HighImpactHero: React.FC<Page['hero']> = ({ richText, medias, links, media }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false)
    }, 5000) // 5000ms = 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const metaImage = medias.map(item => item.media)

  return (
    <>
      {showSplashScreen && media && <SplashScreen videoPath={media.filename} />}{' '}
      {/* Adicionando o SplashScreen */}
      {!showSplashScreen && (
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
      )}
      {!showSplashScreen && (
        <div className={classes.media}>
          {Array.isArray(metaImage) && metaImage.length > 0 && (
            <Fragment>
              <HighImpactMedia resources={metaImage} imgClassName={classes.image} priority />
              {metaImage[0]?.caption && (
                <RichText content={metaImage[0].caption} className={classes.caption} />
              )}
            </Fragment>
          )}
        </div>
      )}
    </>
  )
}
