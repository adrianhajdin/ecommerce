'use client'

import React, { useState } from 'react'
import { useFilter } from '../../../_providers/Filter'
import classes from './index.module.scss'
const getTitlesAndSubtitles = (items) => {
  const titles = new Set();
  const subtitles = new Set();

  items.forEach(item => {
    titles.add(item.title);
    subtitles.add(item.subtitle);
  });

  return {
    titles: Array.from(titles),
    subtitles: Array.from(subtitles)
  };
};

const getColors = (items) => {
  const colorSet = new Set();
  items.forEach(item => {
    if (item.color) {
      colorSet.add(item.color);
    }
  });
  return Array.from(colorSet);
};

const FilterMenu = ({ categories, colors }) => {
  const { categoryFilters, setCategoryFilters, subCategoryFilters, setSubCategoryFilters, colorFilters, setColorFilters, sizeFilters, setSizeFilters, sort, setSort } = useFilter();
  const [selectedSort, setSelectedSort] = useState(sort);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sizes = ['GG', 'G', 'M', 'P', 'PP']
  const { titles, subtitles } = getTitlesAndSubtitles(categories);
  const availableColors = getColors(colors);

  const handleSortChange = (value) => {
    setSelectedSort(value);
    setSort(value);
    setIsDropdownOpen(false);
  };

  const handleCategoryFilterChange = (category) => {
    setCategoryFilters(categoryFilters.includes(category) ? categoryFilters.filter(c => c !== category) : [...categoryFilters, category]);
  };

  const handleSubCategoryFilterChange = (subCategory) => {
    setSubCategoryFilters(subCategoryFilters.includes(subCategory) ? subCategoryFilters.filter(s => s !== subCategory) : [...subCategoryFilters, subCategory]);
  };

  const handleColorFilterChange = (color) => {
    setColorFilters(colorFilters.includes(color) ? colorFilters.filter(c => c !== color) : [...colorFilters, color]);
  };

  const handleSizeFilterChange = (size) => {
    setSizeFilters(sizeFilters.includes(size) ? sizeFilters.filter(s => s !== size) : [...sizeFilters, size]);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownOptions = [
    { value: "relevance", label: "Relevância" },
    { value: "-createdAt", label: "Mais Recente" },
    { value: "createdAt", label: "Mais Antigo" }
  ];

  return (
    <div className={classes.filterMenu}>
      <div className={classes.filterDropdown}>
        <span>Coleção</span>
        <ul className={classes.dropdownList}>
          {titles.map((title, index) => (
            <li key={index} onClick={() => handleCategoryFilterChange(title)}>
              <input type="checkbox" checked={categoryFilters.includes(title)} readOnly />
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.filterDropdown}>
        <span>Subcategoria</span>
        <ul className={classes.dropdownList}>
          {subtitles.map((subtitle, index) => (
            <li key={index} onClick={() => handleSubCategoryFilterChange(subtitle)}>
              <input type="checkbox" checked={subCategoryFilters.includes(subtitle)} readOnly />
              {subtitle}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.filterDropdown}>
        <span>Cores</span>
        <ul className={classes.dropdownList}>
          {availableColors.map((color, index) => (
            <li key={index} onClick={() => handleColorFilterChange(color)}>
              <input type="checkbox" checked={colorFilters.includes(color)} readOnly />
              {color}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.filterDropdown}>
        <span>Tamanhos</span>
        <ul className={classes.dropdownList}>
          {sizes.map((size, index) => (
            <li key={index} onClick={() => handleSizeFilterChange(size)}>
              <input type="checkbox" checked={sizeFilters.includes(size)} readOnly />
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.sortContainer}>
        <label htmlFor="sortDropdown" className={classes.sortLabel}>Classificar por:</label>
        <div className={classes.customDropdown} onClick={toggleDropdown}>
          {dropdownOptions.find(option => option.value === selectedSort)?.label || 'Relevância'}
          {isDropdownOpen && (
            <ul className={classes.dropdownList}>
              {dropdownOptions.map(option => (
                <li
                  key={option.value}
                  className={classes.dropdownOption}
                  onClick={() => handleSortChange(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;