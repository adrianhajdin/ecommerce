'use client'

import React, { useState } from 'react'
import NextImage from 'next/image'

import cssVariables from '../../../cssVariables'
import { Props as MediaProps } from '../types'

import classes from './index.module.scss'

const { breakpoints } = cssVariables

export const HighImpactImage: React.FC<MediaProps> = props => {
  const { imgClassName, onClick, onLoad: onLoadFromProps, resources, priority, fill } = props

  // Função para manipular o evento onLoad
  const handleLoad = () => {
    if (typeof onLoadFromProps === 'function') {
      onLoadFromProps()
    }
  }

  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ')
  return (
    <div className={classes.highImpactImageContainer}>
      {resources?.map((resource, index) => (
        <NextImage
          key={index}
          className={[classes.image, imgClassName].filter(Boolean).join(' ')}
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${resource.filename}`}
          alt={resource.alt || ''}
          onClick={onClick}
          onLoad={handleLoad}
          layout={fill ? 'fill' : 'responsive'}
          width={!fill ? resource.width : undefined}
          height={!fill ? resource.height : undefined}
          sizes={sizes}
          priority={priority}
        />
      ))}
    </div>
  )
}
