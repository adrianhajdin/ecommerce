'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
      <Link
        href="/new"
        className={classes.buttonLink}
      >
        <span>New in</span>
      </Link>

      {/* Peças */}
      <div
        onMouseEnter={() => toggleDropdown('peças', true)}
        onMouseLeave={() => toggleDropdown('peças', false)}
        style={{ position: 'relative' }}
      >
        <Link href="/products" className={classes.buttonLink}>
          <span>Peças</span>
          {dropdownStates.peças && (
            <div
              className={classes.dropdownMenuVertical}
              onMouseEnter={() => toggleDropdown('peças', true)}
              onMouseLeave={() => toggleDropdown('peças', false)}
            >
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
      </div>

      {/* Em Alta */}
      <Link href="/hot" className={classes.buttonLink}>
        <span>Em Alta</span>
      </Link>

      {/* Sale */}
      <Link href="/sale" className={classes.buttonLink}>
        <span>Sale</span>
      </Link>
    </div>
  )
}
