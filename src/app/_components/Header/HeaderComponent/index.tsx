'use client'

import React, { useRef, useState } from 'react'

import Link from 'next/link'
import classes from './index.module.scss'

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

  const handleNavigation = url => {
    window.location.href = url
  }

  return (
    <div className={classes.headerButtons}>
      {/* New in */}
      <Link href="/new-in" passHref >
        <span className={classes.buttonLink}>New in</span>
      </Link>

      {/* Peças */}
      <div
        onMouseEnter={() => toggleDropdown('peças', true)}
        onMouseLeave={() => toggleDropdown('peças', false)}
        style={{ position: 'relative' }}
      >
        <Link href="/products" >
        <span className={classes.buttonLink} >
        
          Peças
          {dropdownStates.peças && (
            <div
              className={classes.dropdownMenuVertical}
              onMouseEnter={() => toggleDropdown('peças', true)}
              onMouseLeave={() => toggleDropdown('peças', false)}
            >
              {Object.entries(categoriesMap).map(([category, items], index) => (
                <div key={index} className={classes.dropdownColumn}>
                  <Link href={`/products/${items[0].slug}`} passHref>
                    <span className={`${classes.dropdownItem} ${classes.boldUnderlineDropdownItem}`}>
                      {category.toUpperCase()}
                    </span>
                  </Link>
                  {items.map(item => (
                    <Link key={item.id} href={`/products/${item.slug}`} passHref onClick={() => handleNavigation(`/products/${item.slug}`)}>
                      <span className={classes.dropdownItem}>
                        {item.subtitle.toUpperCase()}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </span>
        </Link>
      </div>

      {/* Em Alta */}
      <Link href="/hot" passHref>
        <span className={classes.buttonLink}>Em Alta</span>
      </Link>

      {/* Sale */}
      <Link href="/sale" passHref>
        <span className={classes.buttonLink}>Sale</span>
      </Link>
    </div>
  )
}