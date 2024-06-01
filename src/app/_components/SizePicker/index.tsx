'use client'
import React, { useState } from 'react';
import classes from './index.module.scss';

export const SizePicker = ({ sizes, onSizeSelect }) => {

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };

  return (
    <div>
      <div className={classes.sizeOptions}>
        {sizes.map((size) => (
          <button
            key={size}
            className={`${classes.sizeButton} ${selectedSize === size ? classes.selectedSize : ''}`}
            onClick={() => handleSizeSelection(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
