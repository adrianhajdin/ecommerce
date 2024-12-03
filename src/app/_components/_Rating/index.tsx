'use client'

import React from 'react'
import classes from './index.module.scss'

export const Rating: React.FC<{ rating: number; totalStars?: number }> = ({
  rating,
  totalStars = 5,
}) => {
  const stars = Array.from({ length: totalStars }, (_, index) => index + 1)

  return (
    <div className={classes.rating}>
      {stars.map(star => (
        <span
          key={star}
          className={star <= rating ? classes.filled : classes.empty}
        >
          ★
        </span>
      ))}
    </div>
  )
}
