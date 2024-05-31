import React, { ElementType, Fragment } from 'react'

import { DefaultImage } from './DefaultImage'
import { HighImpactImage } from './HighImpactImage'
import { Image } from './Image'
import { Props } from './types'
import { Video } from './Video'

export const Media: React.FC<Props> = props => {
  const { className, resources, htmlElement = 'div' } = props

  const isVideo = typeof resources !== 'string' && resources[0]?.mimeType?.includes('video')
  const Tag = (htmlElement as ElementType) || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <Video {...props} /> : <Image {...props} />}
    </Tag>
  )
}

export const HighImpactMedia: React.FC<Props> = props => {
  const { className, resources, htmlElement = 'div' } = props

  const isVideo = typeof resources !== 'string' && resources[0]?.mimeType?.includes('video')
  const Tag = (htmlElement as ElementType) || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <Video {...props} /> : <HighImpactImage {...props} />}
    </Tag>
  )
}

export const DefaultMedia: React.FC<Props> = props => {
  const { className, resources, htmlElement = 'div' } = props

  const isVideo = typeof resources !== 'string' && resources[0]?.mimeType?.includes('video')
  const Tag = (htmlElement as ElementType) || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <Video {...props} /> : <DefaultImage {...props} />}
    </Tag>
  )
}
