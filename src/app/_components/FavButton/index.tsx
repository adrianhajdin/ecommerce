'use client'

import React, { useState } from 'react'

import classes from './index.module.scss'

export const FavButton = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // Aqui você adicionaria a lógica para atualizar a lista de favoritos
  }

  return (
    <button
      className={`${classes.favoriteButton} ${isFavorite ? classes.isFavorite : ''}`}
      onClick={toggleFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '♥' : '♡'} {/* Utiliza caracteres de coração cheio e vazio */}
    </button>
  )
}
