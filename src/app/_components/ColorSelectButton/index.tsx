'use client'

import React, { useState } from 'react';
import classes from './index.module.scss';

export const ColorSelectButton = ({ title = "Cores", colors }) => {


  const hexaColors = colors.map(cor => "#" + cor);
 
  // const colors = ['#1c212c', '#ffed03', '#0dcaf0']; // substitua com as cores do seu produto

  const handleColorSelection = (color) => {
    // Aqui você pode lidar com a mudança de cor, talvez atualizar o estado do produto
  };
  const [selectedColor, setSelectedColor] = useState(hexaColors[0]);

  return (
    <div className={classes.colorSelectWrapper}>
      <span className={classes.colorLabel}>Cores:</span>
      <div className={classes.colorsContainer}>
        {hexaColors.map((color) => (
          <button
            key={color}
            className={`${classes.colorButton} ${selectedColor === color ? classes.selected : ''}`}
            onClick={() => {
              setSelectedColor(color);
              handleColorSelection(color);
            }}
            style={{ backgroundColor: color }}
            aria-label={`Select ${color}`}
          >
            {selectedColor === color && <span className={classes.checkmark}>✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

