'use client'

import React, { useState } from 'react'
import NextImage from 'next/image'

import cssVariables from '../../../cssVariables'
import { Props as MediaProps } from '../types'

import classes from './index.module.scss'

const { breakpoints } = cssVariables

export const DefaultImage: React.FC<MediaProps> = props => {
  const { imgClassName, onClick, onLoad: onLoadFromProps, resources, priority, fill } = props

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
    if (typeof onLoadFromProps === 'function') {
      onLoadFromProps()
    }
  }

  const handleImageChange = index => {
    setCurrentImageIndex(index)
    setIsLoading(true)
  }

  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ')

  const imageResource = resources && resources[currentImageIndex]
  const { mimeType, filename, width, height, alt } = imageResource || {}

  const src = filename ? `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filename}` : ''

  return (
    <div>
      <NextImage
        className={[isLoading && classes.placeholder, classes.image, imgClassName]
          .filter(Boolean)
          .join(' ')}
        src={src}
        alt={alt || ''}
        onClick={onClick}
        onLoad={handleLoad}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
      />
    </div>
  )
}
