'use client'

// components/HamburgerMenu.js
import React, { useState } from 'react'
import Link from 'next/link'

import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

const HamburgerMenu = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setSelectedCategory(null) // Reset the selected category when menu is toggled
  }

  const handleCategoryClick = title => {
    setSelectedCategory(title)
  }

  const { user } = useAuth()

  // Get distinct titles
  const distinctTitles = [...new Set(categories.map(category => category.title))]

  return (
    <div className={classes.hamburgerMenu}>
      <button className={classes.hamburgerButton} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${classes.navMenu} ${isOpen ? classes.open : ''}`}>
        <div className={classes.navHeader}>
          <h2>MENU</h2>
          {selectedCategory ? (
            <button className={classes.backButton} onClick={() => setSelectedCategory(null)}>
              Voltar
            </button>
          ) : (
            <button className={classes.backButton} onClick={toggleMenu}>
              Voltar
            </button>
          )}
        </div>
        {!selectedCategory && (
          <Link key={'new'} href={`/new`} onClick={toggleMenu}>
            NEW IN
          </Link>
        )}
        {selectedCategory
          ? categories
              .filter(category => category.title === selectedCategory)
              .map(category => (
                <Link key={category.id} href={`/products/${category.slug}`} onClick={toggleMenu}>
                  {category.subtitle.toUpperCase()}
                </Link>
              ))
          : distinctTitles.map((title, index) => (
              <button key={index} onClick={() => handleCategoryClick(title)}>
                {title.toUpperCase()}
              </button>
            ))}
        {!selectedCategory && (
          <>
            <Link key={'hot'} href={`/hot`} onClick={toggleMenu}>
              EM ALTA
            </Link>
            <Link key={'sale'} href={`/sale`} onClick={toggleMenu} className={classes.saleLink}>
              SALE
            </Link>
          </>
        )}

        <div className={classes.accountSection}>
          {user && (
            <Link href="/account" onClick={toggleMenu}>
              Minha Conta
            </Link>
          )}
          {!user && (
            <React.Fragment>
              <Link href="/login" onClick={toggleMenu}>
                Entrar
              </Link>
            </React.Fragment>
          )}
          <Link key={'orders'} href={`/cart`} onClick={toggleMenu}>
            Carrinho
          </Link>
        </div>
        <div className={classes.extraLinks}>
          <Link key={'TikTok'} href={`https://www.instagram.com`} onClick={toggleMenu}>
            TikTok
          </Link>
          <Link key={'Instagram'} href={`https://www.tiktok.com`} onClick={toggleMenu}>
            Instagram
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default HamburgerMenu
