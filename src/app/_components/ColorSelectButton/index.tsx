'use client'

import React, { useState } from 'react'

import classes from './index.module.scss'

export const ColorSelectButton = ({ title = 'Cor', colors }) => {
  const hexaColors = colors.map(cor => '#' + cor)
  const colorNames = ['Jeans Vintage', 'Azul Petróleo', 'Mais Um Nome'] // Substitua pelos nomes das cores apropriados

  const handleColorSelection = color => {
    // Aqui você pode lidar com a mudança de cor, talvez atualizar o estado do produto
  }

  const [selectedColor, setSelectedColor] = useState(hexaColors[0])

  return (
    <div className={classes.colorSelectWrapper}>
      <span className={classes.colorLabel}>Cor</span>
      <div className={classes.colorsContainer}>
        {hexaColors.map((color, index) => (
          <button
            key={color}
            className={`${classes.colorButton} ${selectedColor === color ? classes.selected : ''}`}
            onClick={() => {
              setSelectedColor(color)
              handleColorSelection(color)
            }}
            aria-label={`Select ${color}`}
          >
            <div className={`${classes.circle}`} style={{ backgroundColor: color }}></div>
            <span className={classes.colorName}>{colorNames[index]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
