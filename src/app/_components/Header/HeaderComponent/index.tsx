'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

import classes from './index.module.scss'

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

  const timerRef = useRef(null)

  const categoriesMap = organizeCategories(categories)

  const toggleDropdown = (buttonName, state) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (state) {
      setDropdownStates(prevStates => ({
        ...prevStates,
        [buttonName]: true,
      }))
    } else {
      timerRef.current = setTimeout(() => {
        setDropdownStates(prevStates => ({
          ...prevStates,
          [buttonName]: false,
        }))
      }, 200) // Ajuste o tempo conforme necessário
    }
  }

  return (
    <div className={classes.headerButtons}>
      {/* New in */}
      <span className={classes.buttonLink} onClick={() => handleNavigation('/new-in')}>
        New in
      </span>

      {/* Peças */}
      <div
        onMouseEnter={() => toggleDropdown('peças', true)}
        onMouseLeave={() => toggleDropdown('peças', false)}
        style={{ position: 'relative' }}
      >
        <span className={classes.buttonLink} onClick={() => handleNavigation('/products')}>
          Peças
          {dropdownStates.peças && (
            <div
              className={classes.dropdownMenuVertical}
              onMouseEnter={() => toggleDropdown('peças', true)}
              onMouseLeave={() => toggleDropdown('peças', false)}
            >
              {Object.entries(categoriesMap).map(([category, items], index) => (
                <div key={index} className={classes.dropdownColumn}>
                  <span
                    className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}
                    onClick={() => handleNavigation('/products')}
                  >
                    {category.toUpperCase()}
                  </span>
                  {items.map(item => (
                    <span
                      key={item.id}
                      className={classes.dropdownItem}
                      onClick={() => handleNavigation(`/products/${item.slug}`)}
                    >
                      {item.subtitle.toUpperCase()}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          )}
        </span>
      </div>

      {/* Em Alta */}
      <span className={classes.buttonLink} onClick={() => handleNavigation('/hot')}>
        Em Alta
      </span>

      {/* Sale */}
      <span className={classes.buttonLink} onClick={() => handleNavigation('/sale')}>
        Sale
      </span>
    </div>
  )
}
