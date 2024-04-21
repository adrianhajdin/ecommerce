'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { HeaderNav } from '../Nav';
import classes from './index.module.scss'// Garanta que o caminho está correto


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

  const categoriesMap = organizeCategories(categories)
  console.log(categoriesMap)

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
        <Link href="#" onMouseEnter={() => toggleDropdown('newIn')} onMouseLeave={() => toggleDropdown('newIn')} className={classes.buttonLink}>
          <span>New in</span>
          {dropdownStates.newIn && (
            <div className={classes.dropdownMenuVertical}>
            <div className={classes.dropdownColumn}>
              {/* All dropdown items except the last one */}
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PARTES DE CIMA</Link>
              <Link href="/products" className={classes.dropdownItem}>BLUSAS | COLETES</Link>
              <Link href="/products" className={classes.dropdownItem}>BODY</Link>
              <Link href="/products" className={classes.dropdownItem}>CAMISAS</Link>
              <Link href="/products" className={classes.dropdownItem}>BLAZES | CASACOS | JAQUETAS</Link>
              <Link href="/products" className={classes.dropdownItem}>CROPPED</Link>
              <Link href="/products" className={classes.dropdownItem}>T-SHIRT</Link>
            </div>
            <div className={classes.dropdownColumn}>
            <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PARTES DE BAIXO </Link>
              <Link href="/products" className={classes.dropdownItem}> CALÇAS </Link>
              <Link href="/products" className={classes.dropdownItem}> SAIAS </Link>
              <Link href="/products" className={classes.dropdownItem}> SHORTS </Link>
            </div>
            <div className={classes.dropdownColumn}>
             <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PEÇAS ÚNICAS</Link>
              <Link href="/products" className={classes.dropdownItem}> VESTIDOS </Link>
              <Link href="/products" className={classes.dropdownItem}> MACACÃO </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>LINGERIE</Link>
              <Link href="/products" className={classes.dropdownItem}> TOPS </Link>
              <Link href="/products" className={classes.dropdownItem}> CALCINHAS </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>ACESSÓRIOS</Link>
              <Link href="/products" className={classes.dropdownItem}> CINTOS </Link>
              <Link href="/products" className={classes.dropdownItem}> CASA </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>LINHAS | TECIDO </Link>
              <Link href="/products" className={classes.dropdownItem}> ALFAIATARIA </Link>
              <Link href="/products" className={classes.dropdownItem}> CASHMERE </Link>
              <Link href="/products" className={classes.dropdownItem}>COURO</Link>
              <Link href="/products" className={classes.dropdownItem}>JEANS</Link>
              <Link href="/products" className={classes.dropdownItem}>SEDA</Link>
              <Link href="/products" className={classes.dropdownItem}>TRICOT</Link>
            </div>
          </div>
          )}
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
                <Link key={item.id} href={`/products/${item.id}`} className={classes.dropdownItem}>{item.title.toUpperCase()}</Link>
              ))}
            </div>
          ))}
        </div>
      )}
      </Link>
        {/* Em Alta */}
        <Link href="#" onMouseEnter={() => toggleDropdown('emAlta')} onMouseLeave={() => toggleDropdown('emAlta')} className={classes.buttonLink}>
          <span>Em Alta</span>
          {dropdownStates.emAlta && (
            <div className={classes.dropdownMenuVertical}>
            <div className={classes.dropdownColumn}>
              {/* All dropdown items except the last one */}
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PARTES DE CIMA</Link>
              <Link href="/products" className={classes.dropdownItem}>BLUSAS | COLETES</Link>
              <Link href="/products" className={classes.dropdownItem}>BODY</Link>
              <Link href="/products" className={classes.dropdownItem}>CAMISAS</Link>
              <Link href="/products" className={classes.dropdownItem}>BLAZES | CASACOS | JAQUETAS</Link>
              <Link href="/products" className={classes.dropdownItem}>CROPPED</Link>
              <Link href="/products" className={classes.dropdownItem}>T-SHIRT</Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PARTES DE BAIXO </Link>
              <Link href="/products" className={classes.dropdownItem}> CALÇAS </Link>
              <Link href="/products" className={classes.dropdownItem}> SAIAS </Link>
              <Link href="/products" className={classes.dropdownItem}> SHORTS </Link>
            </div>
            <div className={classes.dropdownColumn}>
             <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PEÇAS ÚNICAS</Link>
              <Link href="/products" className={classes.dropdownItem}> VESTIDOS </Link>
              <Link href="/products" className={classes.dropdownItem}> MACACÃO </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>LINGERIE</Link>
              <Link href="/products" className={classes.dropdownItem}> TOPS </Link>
              <Link href="/products" className={classes.dropdownItem}> CALCINHAS </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>ACESSÓRIOS</Link>
              <Link href="/products" className={classes.dropdownItem}> CINTOS </Link>
              <Link href="/products" className={classes.dropdownItem}> CASA </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>LINHAS | TECIDO </Link>
              <Link href="/products" className={classes.dropdownItem}> ALFAIATARIA </Link>
              <Link href="/products" className={classes.dropdownItem}> CASHMERE </Link>
              <Link href="/products" className={classes.dropdownItem}>COURO</Link>
              <Link href="/products" className={classes.dropdownItem}>JEANS</Link>
              <Link href="/products" className={classes.dropdownItem}>SEDA</Link>
              <Link href="/products" className={classes.dropdownItem}>TRICOT</Link>
            </div>
          </div>
          )}
        </Link>
        {/* Sale */}
        <Link href="#" onMouseEnter={() => toggleDropdown('sale')} onMouseLeave={() => toggleDropdown('sale')} className={classes.buttonLink}>
          <span>Sale</span>
          {dropdownStates.sale && (
           <div className={classes.dropdownMenuVertical}>
           <div className={classes.dropdownColumn}>
             {/* All dropdown items except the last one */}
             <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PARTES DE CIMA</Link>
             <Link href="/products" className={classes.dropdownItem}>BLUSAS | COLETES</Link>
             <Link href="/products" className={classes.dropdownItem}>BODY</Link>
             <Link href="/products" className={classes.dropdownItem}>CAMISAS</Link>
             <Link href="/products" className={classes.dropdownItem}>BLAZES | CASACOS | JAQUETAS</Link>
             <Link href="/products" className={classes.dropdownItem}>CROPPED</Link>
             <Link href="/products" className={classes.dropdownItem}>T-SHIRT</Link>
           </div>
           <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PARTES DE BAIXO </Link>
              <Link href="/products" className={classes.dropdownItem}> CALÇAS </Link>
              <Link href="/products" className={classes.dropdownItem}> SAIAS </Link>
              <Link href="/products" className={classes.dropdownItem}> SHORTS </Link>
            </div>
            <div className={classes.dropdownColumn}>
             <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>PEÇAS ÚNICAS</Link>
              <Link href="/products" className={classes.dropdownItem}> VESTIDOS </Link>
              <Link href="/products" className={classes.dropdownItem}> MACACÃO </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>LINGERIE</Link>
              <Link href="/products" className={classes.dropdownItem}> TOPS </Link>
              <Link href="/products" className={classes.dropdownItem}> CALCINHAS </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>ACESSÓRIOS</Link>
              <Link href="/products" className={classes.dropdownItem}> CINTOS </Link>
              <Link href="/products" className={classes.dropdownItem}> CASA </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>LINHAS | TECIDO </Link>
              <Link href="/products" className={classes.dropdownItem}> ALFAIATARIA </Link>
              <Link href="/products" className={classes.dropdownItem}> CASHMERE </Link>
              <Link href="/products" className={classes.dropdownItem}>COURO</Link>
              <Link href="/products" className={classes.dropdownItem}>JEANS</Link>
              <Link href="/products" className={classes.dropdownItem}>SEDA</Link>
              <Link href="/products" className={classes.dropdownItem}>TRICOT</Link>
           </div>
         </div>
         )}
        </Link>
      </div>


    </header>
    
  );
};
