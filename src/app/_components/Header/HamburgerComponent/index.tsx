'use client'
// components/HamburgerMenu.js
import React, { useState } from 'react'
import Link from 'next/link'

import classes from './index.module.scss'

const HamburgerMenu = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={classes.hamburgerMenu}>
      <button className={classes.hamburgerButton} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <nav className={classes.navMenu}>
          {categories.map(category => (
            <Link key={category.id} href={`/products/${category.slug}`}>
              {category.category}
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}

export default HamburgerMenu
