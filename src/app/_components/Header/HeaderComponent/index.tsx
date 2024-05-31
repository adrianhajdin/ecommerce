'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import { HeaderNav } from '../Nav';
import classes from './index.module.scss' // Garanta que o caminho está correto

const handleNavigation = url => {
  window.location.href = url
}

const organizeCategories = categories => {
  const catMap = {}
  categories.forEach(cat => {
    if (cat.title) {
      if (!catMap[cat.title]) {
        catMap[cat.title] = []
      }
      catMap[cat.title].push({
        id: cat.id,
        subtitle: cat.subtitle,
        category: cat.category,
        slug: cat.slug,
      })
    }
  })
  return catMap
}

export const HeaderComponent = ({ categories }) => {
  const [dropdownStates, setDropdownStates] = useState({
    peças: false,
    emAlta: false,
    sale: false,
    newIn: false,
  })

  const categoriesMap = organizeCategories(categories)

  const toggleDropdown = buttonName => {
    setDropdownStates(prevStates => ({
      ...prevStates,
      [buttonName]: !prevStates[buttonName], // Toggle specific dropdown
    }))
  }

  return (
    <header className={classes.header}>
      {/* Use Link correctly without <a> */}
      <div className={classes.headerButtons}>
        {/* New in */}
        <Link
          href="/new"
          onMouseEnter={() => toggleDropdown('newIn')}
          onMouseLeave={() => toggleDropdown('newIn')}
          className={classes.buttonLink}
        >
          <span>New In</span>
        </Link>
        <span className={classes.separator}>-</span>
        {/* Peças */}
        <Link
          href="/products"
          onMouseEnter={() => toggleDropdown('peças')}
          onMouseLeave={() => toggleDropdown('peças')}
          className={classes.buttonLink}
        >
          <span>Peças</span>
          {dropdownStates.peças && (
            <div className={classes.dropdownMenuVertical}>
              {Object.entries(categoriesMap).map(([category, items], index) => (
                <div key={index} className={classes.dropdownColumn}>
                  <Link
                    href="/products"
                    className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}
                  >
                    {category.toUpperCase()}
                  </Link>
                  {items.map(item => (
                    <Link
                      key={item.id}
                      href={`/products/${item.slug}`}
                      className={classes.dropdownItem}
                      onClick={e => {
                        e.preventDefault()
                        handleNavigation(`/products/${item.slug}`)
                      }}
                    >
                      {item.subtitle.toUpperCase()}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </Link>
        <span className={classes.separator}>-</span>
        {/* Em Alta */}
        <Link
          href="/hot"
          onMouseEnter={() => toggleDropdown('emAlta')}
          onMouseLeave={() => toggleDropdown('emAlta')}
          className={classes.buttonLink}
        >
          <span>Em Alta</span>
        </Link>
        <span className={classes.separator}>-</span>
        {/* Sale */}
        <Link
          href="/sale"
          onMouseEnter={() => toggleDropdown('sale')}
          onMouseLeave={() => toggleDropdown('sale')}
          className={classes.buttonLink}
        >
          <span>Sale</span>
        </Link>
      </div>
    </header>
  )
}
