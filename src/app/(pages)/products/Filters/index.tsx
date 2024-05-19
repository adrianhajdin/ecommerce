'use client'

import React from 'react'

import { useEffect } from 'react'

import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { HR } from '../../../_components/HR'
import { RadioButton } from '../../../_components/Radio'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

import { useState } from 'react'

const FilterMenu = () => {
  const { sort, setSort } = useFilter();
  const [selectedSort, setSelectedSort] = useState(sort);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortChange = (value) => {
    setSelectedSort(value);
    setSort(value);
    setIsDropdownOpen(false);
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
        <span>Tamanho</span>
        <ul className={classes.dropdownList}>
          <li>Pequeno</li>
          <li>Médio</li>
          <li>Grande</li>
        </ul>
      </div>
      <div className={classes.filterDropdown}>
        <span>Cor</span>
        <ul className={classes.dropdownList}>
          <li>Vermelho</li>
          <li>Verde</li>
          <li>Azul</li>
        </ul>
      </div>
      <div className={classes.filterDropdown}>
        <span>Gênero</span>
        <ul className={classes.dropdownList}>
          <li>Masculino</li>
          <li>Feminino</li>
          <li>Unissex</li>
        </ul>
      </div>
      <div className={classes.filterDropdown}>
        <span>Categoria</span>
        <ul className={classes.dropdownList}>
          <li>Jeans Feminino</li>
          <li>Plus Size Feminino</li>
        </ul>
      </div>
      <div className={classes.filterDropdown}>
        <span>Sub Categoria</span>
        <ul className={classes.dropdownList}>
          <li>Opção 1</li>
          <li>Opção 2</li>
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

// const Filters = ({ categories, preselectedCategory = null }) => {
//   const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter();
//   const [selectedCategory, setSelectedCategory] = useState(preselectedCategory || '');
//   const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState(sort);

//   const handleCategoryChange = (event) => {
//     const value = event.target.value;
//     setSelectedCategory(value);
//     setCategoryFilters([value]);
//   };

//   const handleSortChange = (event) => {
//     const value = event.target.value;
//     setSelectedSort(value);
//     setSort(value);
//   };

//   const toggleCategoryDropdown = () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen);

//   return (
//     <div className={classes.filters}>
//       <div className={classes.filterRow}>
//         <div className={classes.dropdown}>
//           <h6 className={classes.title} onClick={toggleCategoryDropdown}>
//             Categoria <span>{isCategoryDropdownOpen ? '-' : '+'}</span>
//           </h6>
//           {isCategoryDropdownOpen && (
//             <div className={classes.categories}>
//               {categories.map(category => {
//                 const isSelected = categoryFilters.includes(category.id);
//                 return (
//                   <Checkbox
//                     key={category.id}
//                     label={category.subtitle}
//                     value={category.id}
//                     isSelected={isSelected}
//                     onClickHandler={() => handleCategoryChange({ target: { value: category.id } })}
//                   />
//                 );
//               })}
//             </div>
//           )}
//         </div>
//         <div className={classes.sort}>
//           <select value={selectedSort} onChange={handleSortChange} className={classes.sortDropdown}>
//             <option value="" disabled selected>Ordene por</option>
//             <option value="-createdAt">Ordene por: Mais Recente</option>
//             <option value="createdAt">Ordene por: Mais Antigo</option>
//           </select>
//         </div>
//       </div>
//       <HR className={classes.hr} />
//     </div>
//   );
// }

// export default Filters;

