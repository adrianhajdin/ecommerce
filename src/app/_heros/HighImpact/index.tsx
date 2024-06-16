'use client'
import React, { Fragment, useEffect, useState } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { HighImpactMedia, Media } from '../../_components/Media'
import SplashScreen from '../../_components/SplashScreen/SplashScreen'

import classes from './index.module.scss'

export const HighImpactHero: React.FC<Page['hero']> = ({ carrossel, media }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(false)

  useEffect(() => {
    const firstVisitOrReload = sessionStorage.getItem('firstVisitOrReload')
    if (!firstVisitOrReload) {
      setShowSplashScreen(true)
      const timer = setTimeout(() => {
        setShowSplashScreen(false)
        sessionStorage.setItem('firstVisitOrReload', 'true')
      }, 4000) // 4000ms = 4 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const metaImage = carrossel.map(group => group.medias.map(subItem => subItem.media))

  console.log(metaImage)

  return (
    <>
      {showSplashScreen && media && <SplashScreen videoPath={media.filename} />}{' '}
      {/* Adicionando o SplashScreen */}
      {!showSplashScreen && (
        <div className={classes.media}>
          {metaImage.length > 0 &&
            metaImage.map((img, index) => (
              <Fragment key={index}>
                <HighImpactMedia resources={img} priority />
              </Fragment>
            ))}
        </div>
      )}
    </>
  )
}
