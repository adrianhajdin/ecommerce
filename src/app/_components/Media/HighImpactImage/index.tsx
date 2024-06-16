'use client'

import React, { useState } from 'react'
import NextImage from 'next/image'

import cssVariables from '../../../cssVariables'
import { Props as MediaProps } from '../types'

import classes from './index.module.scss'

const { breakpoints } = cssVariables

export const HighImpactImage: React.FC<MediaProps> = props => {
  const { imgClassName, onClick, onLoad: onLoadFromProps, resources, priority, fill } = props

  console.log(resources)

  // Função para manipular o evento onLoad
  const handleLoad = () => {
    if (typeof onLoadFromProps === 'function') {
      onLoadFromProps()
    }
  }

  // Calcula o número de colunas baseado no número de imagens
  const gridColumns = resources ? `repeat(${resources.length}, 1fr)` : 'repeat(1, 1fr)';

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: gridColumns,
    gap: '10px',
    width: '100%',
    padding: '0 10px',
    margin: '0 auto'
  };
  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ')
  return (
    <div style={containerStyle}>
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
