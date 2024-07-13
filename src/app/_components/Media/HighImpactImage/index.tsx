'use client'

import React, { useEffect, useState } from 'react'
import NextImage from 'next/image'

import cssVariables from '../../../cssVariables'
import { Props as MediaProps } from '../types'

import classes from './index.module.scss'

const { breakpoints } = cssVariables

export const HighImpactImage: React.FC<MediaProps> = props => {
  const { imgClassName, onClick, onLoad: onLoadFromProps, resources, priority, fill } = props
  const [gridColumns, setGridColumns] = useState('repeat(1, 1fr)')

  // console.log(resources)

  // Função para manipular o evento onLoad
  const handleLoad = () => {
    if (typeof onLoadFromProps === 'function') {
      onLoadFromProps()
    }
  }

  useEffect(() => {
    const updateGridColumns = () => {
      const width = window.innerWidth
      if (width <= 450) {
        setGridColumns('repeat(1, 1fr)')
      } else if (width <= 800) {
        setGridColumns('repeat(2, 1fr)')
      } else {
        setGridColumns(`repeat(${resources?.length || 1}, 1fr)`)
      }
    }

    // Atualiza o gridColumns na montagem e ao redimensionar a janela
    updateGridColumns()
    window.addEventListener('resize', updateGridColumns)

    return () => {
      window.removeEventListener('resize', updateGridColumns)
    }
  }, [resources])

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: gridColumns,
    width: '100%',
    margin: '0 auto',
  }
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
