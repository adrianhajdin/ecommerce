'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { HeaderNav } from '../Nav';
import classes from './index.module.scss'// Garanta que o caminho está correto

const handleNavigation = (url) => {
  window.location.href = url;
};


const organizeCategories = (categories) => {
  const catMap = {};
  categories.forEach(cat => {
    if (cat.parent) {
      if (!catMap[cat.parent.title]) {
        catMap[cat.parent.title] = [];
      }
      catMap[cat.parent.title].push(cat);
    } else {
      // Se é uma macrocategoria e não está no mapa, adiciona sem subcategorias
      catMap[cat.title] = catMap[cat.title] || [];
    }
  });
  return catMap;
};

export  const  HeaderComponent = ({ categories}) => {
  const [dropdownStates, setDropdownStates] = useState({
    peças: false,
    emAlta: false,
    sale: false,
    newIn: false,
  });

  console.log(categories)
  const categoriesMap = organizeCategories(categories)

  const toggleDropdown = (buttonName) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [buttonName]: !prevStates[buttonName], // Toggle specific dropdown
    }));
  };

  return (
    <header className={classes.header}>
      {/* Use Link correctly without <a> */}
      <div className={classes.headerButtons}>
        {/* New in */}
        <Link href="/products" onMouseEnter={() => toggleDropdown('newIn')} onMouseLeave={() => toggleDropdown('newIn')} className={classes.buttonLink}>
          <span>New in</span>
        </Link>

        {/* Peças */}
        <Link href="#" onMouseEnter={() => toggleDropdown('peças')} onMouseLeave={() => toggleDropdown('peças')} className={classes.buttonLink}>
        <span>Peças</span>
        {dropdownStates.peças && (
        <div className={classes.dropdownMenuVertical}>
          {Object.entries(categoriesMap).map(([category, items], index) => (
            <div key={index} className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>{category.toUpperCase()}</Link>
              {items.map((item) => (
        <Link key={item.id} href={`/products/${item.slug}`} className={classes.dropdownItem} onClick={(e) => {
            e.preventDefault();
            handleNavigation(`/products/${item.slug}`);
        }}>
            {item.title.toUpperCase()}
        </Link>
              ))}
            </div>
          ))}
        </div>
      )}
      </Link>
        {/* Em Alta */}
        <Link href="/products" onMouseEnter={() => toggleDropdown('emAlta')} onMouseLeave={() => toggleDropdown('emAlta')} className={classes.buttonLink}>
          <span>Em Alta</span>
        </Link>
        {/* Sale */}
        <Link href="/products" onMouseEnter={() => toggleDropdown('sale')} onMouseLeave={() => toggleDropdown('sale')} className={classes.buttonLink}>
          <span>Sale</span>
        </Link>
      </div>


    </header>
    
  );
};
