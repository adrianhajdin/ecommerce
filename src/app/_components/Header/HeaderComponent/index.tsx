// HeaderComponent.jsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Dropdown from 'react-simple-dropdown';
// import { HeaderNav } from '../Nav';
import classes from './index.module.scss'// Garanta que o caminho está correto

const HeaderComponent = ({ header }) => {
  const [dropdownStates, setDropdownStates] = useState({
    peças: false,
    emAlta: false,
    sale: false,
    newIn: false,
  });

  const toggleDropdown = (buttonName) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [buttonName]: !prevStates[buttonName], // Toggle specific dropdown
    }));
  };

  return (
    <header className={classes.header}>
      {/* Use Link correctly without <a> */}
      <Link href="/">
        <Image src="/minimo_1.jpeg" alt="TMínimo 1" width={300} height={300} className={classes.logo} />
      </Link>

      <div className={classes.headerButtons}>
        {/* New in */}
        <Link href="#" onMouseEnter={() => toggleDropdown('newIn')} onMouseLeave={() => toggleDropdown('newIn')} className={classes.buttonLink}>
          <span>New in</span>
          {dropdownStates.newIn && (
            <div className={classes.dropdownMenuVertical}>
            <div className={classes.dropdownColumn}>
              {/* All dropdown items except the last one */}
              <Link href="/products" className={classes.dropdownItem}>BLUSAS | COLETES</Link>
              <Link href="/products" className={classes.dropdownItem}>BODY</Link>
              <Link href="/products" className={classes.dropdownItem}>CAMISAS</Link>
              <Link href="/products" className={classes.dropdownItem}>BLAZES | CASACOS | JAQUETAS</Link>
              <Link href="/products" className={classes.dropdownItem}>CROPPED</Link>
              <Link href="/products" className={classes.dropdownItem}>T-SHIRT</Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={classes.dropdownItem}> CALÇAS </Link>
              <Link href="/products" className={classes.dropdownItem}> SAIAS </Link>
              <Link href="/products" className={classes.dropdownItem}> SHORTS </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={classes.dropdownItem}> VESTIDOS </Link>
              <Link href="/products" className={classes.dropdownItem}> MACACÃO </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={classes.dropdownItem}> TOPS </Link>
              <Link href="/products" className={classes.dropdownItem}> CALCINHAS </Link>
            </div>
            <div className={classes.dropdownColumn}>
              <Link href="/products" className={classes.dropdownItem}> CINTOS </Link>
              <Link href="/products" className={classes.dropdownItem}> CASA </Link>
            </div>
            <div className={classes.dropdownColumn}>
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
          <div className={classes.dropdownMenuVertical}> {/* Apply vertical positioning class */}
            <Link href="/products" className={classes.dropdownItem}>
              Produto A
            </Link>
            <Link href="/products" className={classes.dropdownItem}>
              Produto B
            </Link>
          </div>
        )}
        </Link>

        {/* Em Alta */}
        <Link href="#" onMouseEnter={() => toggleDropdown('emAlta')} onMouseLeave={() => toggleDropdown('emAlta')} className={classes.buttonLink}>
          <span>Em Alta</span>
          {dropdownStates.emAlta && (
            <div className={classes.dropdownMenuVertical}> {/* Use a different class for vertical positioning */}
              <Link href="/products" className={classes.dropdownItem}>
                Produto A
              </Link>
              <Link href="/products" className={classes.dropdownItem}>
                Produto B
              </Link>
            </div>
          )}
        </Link>

        {/* Sale */}
        <Link href="#" onMouseEnter={() => toggleDropdown('sale')} onMouseLeave={() => toggleDropdown('sale')} className={classes.buttonLink}>
          <span>Sale</span>
          {dropdownStates.sale && (
            <div className={classes.dropdownMenuVertical}>
              <Link href="/products" className={classes.dropdownItem}>
                Produto A
              </Link>
              <Link href="/products" className={classes.dropdownItem}>
                Produto B
              </Link>
            </div>
          )}
        </Link>
      </div>

      <div className={classes.headerIcons}>
        {/* Removed <a> within Link */}
        <Link href="/products" className={classes.iconLink}>
          <Image src="/search.png" alt="Search" width={500} height={500} layout="fixed"/>
        </Link>
        <Link href="/orders" className={classes.iconLink}>
          <Image src="/user_profile.png" alt="Orders" width={500} height={500} layout="fixed" />
        </Link>
        <Link href="/cart" className={classes.iconLink}>
          <Image src="/cart.png" alt="Cart" width={500} height={500} layout="fixed"/>
        </Link>
      </div>
      <div className={classes.headerSocialIcons}>
        <a href="https://www.instagram.com" className={classes.iconLink} target="_blank" rel="noopener noreferrer">
          <Image src="/instagram.png" alt="Instagram" width={500} height={500} layout="fixed"/>
        </a>
        <a href="https://www.tiktok.com" className={classes.iconLink} target="_blank" rel="noopener noreferrer">
          <Image src="/tiktok.png" alt="TikTok" width={500} height={500} layout="fixed"/>
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;