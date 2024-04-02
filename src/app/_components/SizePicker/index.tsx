'use client'
import React, { useState } from 'react';
import classes from './index.module.scss';

export const SizePicker = ({ sizes}) => {

  // colocar nos parametros
  //const sizes = ['PP (XS)', 'P (S)', 'M (M)', 'G (L)'];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div>
      <label className={classes.sizeLabel}>Tamanho </label>
      <div className={classes.sizeOptions}>
        {sizes.map((size) => (
          <button
            key={size}
            className={`${classes.sizeButton} ${selectedSize === size ? classes.selectedSize : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

