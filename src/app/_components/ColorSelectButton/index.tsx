'use client'

import React, { useState } from 'react';
import classes from './index.module.scss';


export const ColorSelectButton = ({ title = "Cor", colors, onColorSelect }) => {

  const [selectedColor, setSelectedColor] = useState(colors[0].colorHex);
  const [selectedColorName, setSelectedColorName] = useState(colors[0].color);

  const handleSelection = (color) => {
    setSelectedColor(color.colorHex);
    setSelectedColorName(color.color)
    onColorSelect(color);

  };

  return (
    <div className={classes.colorSelectWrapper}>
      <span className={classes.colorLabel}>{title}: {selectedColorName}</span>
      <div className={classes.colorsContainer}>
        {colors.map((colorObj) => (
          <button
            key={colorObj.id}
            className={`${classes.colorButton} ${selectedColor === colorObj.colorHex ? classes.selected : ''}`}
            onClick={() => handleSelection(colorObj)}
            aria-label={`Select ${colorObj.color}`}
          >
            <div className={`${classes.circle}`} style={{ backgroundColor: colorObj.colorHex }}></div>
          </button>
        ))}
      </div>

    </div>
  );
};
