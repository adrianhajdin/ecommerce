'use client'

import React, { useState } from 'react';
import classes from './index.module.scss';

export const ColorSelectButton = ({ title = "Cor", colors }) => {

  const handleColorSelection = (color) => {
    // Aqui você pode lidar com a mudança de cor, talvez atualizar o estado do produto
  };

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className={classes.colorSelectWrapper}>
      <span className={classes.colorLabel}>{title}: {selectedColor.color}</span>
      <div className={classes.colorsContainer}>
        {colors.map((colorObj, index) => (
          <button
            key={colorObj.id}
            className={`${classes.colorButton} ${selectedColor.colorHex === colorObj.colorHex ? classes.selected : ''}`}
            onClick={() => {
              setSelectedColor(colorObj);
              handleColorSelection(colorObj.colorHex);
            }}
            aria-label={`Select ${colorObj.color}`}
          >
            <div className={`${classes.circle}`} style={{ backgroundColor: colorObj.colorHex }}></div>
          </button>
        ))}
      </div>
    </div>
  );
};
