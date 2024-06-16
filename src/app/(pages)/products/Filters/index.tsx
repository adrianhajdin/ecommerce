'use client'

import React, { useEffect, useState } from 'react'

import { Gutter } from '../../../_components/Gutter'
import { PageRange } from '../../../_components/PageRange'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

const getTitlesAndSubtitles = items => {
  const titles = new Set()
  const subtitles = new Set()

  items.forEach(item => {
    titles.add(item.title)
    subtitles.add(item.subtitle)
  })

  return {
    titles: Array.from(titles),
    subtitles: Array.from(subtitles),
  }
}

const getColors = items => {
  const colorSet = new Set()
  items.forEach(item => {
    if (item.color) {
      colorSet.add(item.color)
    }
  })
  return Array.from(colorSet)
}

const FilterMenu = ({ categories, colors, preselectedCategory = null }) => {
  const {
    categoryFilters,
    setCategoryFilters,
    subCategoryFilters,
    setSubCategoryFilters,
    colorFilters,
    setColorFilters,
    sizeFilters,
    setSizeFilters,
    sort,
    setSort,
  } = useFilter()
  const [selectedSort, setSelectedSort] = useState(sort)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const sizes = ['GG', 'G', 'M', 'P', 'PP']
  const { titles, subtitles } = getTitlesAndSubtitles(categories)
  const availableColors = getColors(colors)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Add this line
  const [selectedFilter, setSelectedFilter] = useState(null)

  useEffect(() => {
    if (preselectedCategory && !categoryFilters.includes(preselectedCategory.title)) {
      setCategoryFilters([...categoryFilters, preselectedCategory.title])
    }
  }, [preselectedCategory])

  useEffect(() => {
    if (preselectedCategory && !subCategoryFilters.includes(preselectedCategory.subtitle)) {
      setSubCategoryFilters([...subCategoryFilters, preselectedCategory.subtitle])
    }
  }, [preselectedCategory])

  const handleSortChange = value => {
    setSelectedSort(value)
    setSort(value)
    setIsDropdownOpen(false)
    toggleMobileMenu()
  }

  const handleCategoryFilterChange = category => {
    setCategoryFilters(
      categoryFilters.includes(category)
        ? categoryFilters.filter(c => c !== category)
        : [...categoryFilters, category],
    )
  }

  const handleSubCategoryFilterChange = subCategory => {
    setSubCategoryFilters(
      subCategoryFilters.includes(subCategory)
        ? subCategoryFilters.filter(s => s !== subCategory)
        : [...subCategoryFilters, subCategory],
    )
  }

  const handleColorFilterChange = color => {
    setColorFilters(
      colorFilters.includes(color)
        ? colorFilters.filter(c => c !== color)
        : [...colorFilters, color],
    )
  }

  const handleSizeFilterChange = size => {
    setSizeFilters(
      sizeFilters.includes(size) ? sizeFilters.filter(s => s !== size) : [...sizeFilters, size],
    )
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen) // Add this function
  }

  const dropdownOptions = [
    { value: 'relevance', label: 'Relevância' },
    { value: '-createdAt', label: 'Mais Recente' },
    { value: 'createdAt', label: 'Mais Antigo' },
  ]

  const filters = ['Coleção', 'Categoria', 'Cor', 'Tamanho', 'Ordenar']

  const handleSelectedFilter = filter => {
    setSelectedFilter(filter)
  }
  return (
    <div className={classes.hbar}>
      <Gutter>
        <div className={classes.filterMenu}>
          <div className={classes.pagePathContainer}>
            <span className={classes.home}>Home </span> &gt;{' '}
            <span className={classes.newIn}>New In</span>
          </div>
          <div className={classes.filterMenuButtons}>
            <button className={classes.mobileFilterButton} onClick={toggleMobileMenu}>
              Filtros ▾
            </button>
            <button className={classes.mobileFilterButton} onClick={toggleMobileMenu}>
              Ordenar ▾
            </button>
          </div>

          <div className={classes.pageRangeContainer}>
            <PageRange totalDocs={100} currentPage={1} collection={'Produtos'} limit={10} />
          </div>

          <nav className={`${classes.navMenu} ${isMobileMenuOpen ? classes.open : ''}`}>
            <div className={classes.navHeader}>
              <h2></h2>
              {selectedFilter ? (
                <button className={classes.backButton} onClick={() => setSelectedFilter(null)}>
                  Voltar
                </button>
              ) : (
                <button className={classes.backButton} onClick={toggleMobileMenu}>
                  X
                </button>
              )}
            </div>
            {selectedFilter ? (
              selectedFilter === 'Coleção' ? (
                <div>
                  {titles.map((title, index) => (
                    <div key={index} className={classes.filterOption}>
                      {title}
                      <input
                        type="checkbox"
                        checked={categoryFilters.includes(title)}
                        onChange={() => handleCategoryFilterChange(title)}
                      />
                    </div>
                  ))}
                </div>
              ) : selectedFilter === 'Categoria' ? (
                <div>
                  {subtitles.map((subtitle, index) => (
                    <div key={index} className={classes.filterOption}>
                      <input
                        type="checkbox"
                        checked={subCategoryFilters.includes(subtitle)}
                        onChange={() => handleSubCategoryFilterChange(subtitle)}
                      />
                      {subtitle}
                    </div>
                  ))}
                </div>
              ) : selectedFilter === 'Cor' ? (
                <div>
                  {availableColors.map((color, index) => (
                    <div key={index} className={classes.filterOption}>
                      <input
                        type="checkbox"
                        checked={colorFilters.includes(color)}
                        onChange={() => handleColorFilterChange(color)}
                      />
                      {color}
                    </div>
                  ))}
                </div>
              ) : selectedFilter === 'Tamanho' ? (
                <div>
                  {sizes.map((size, index) => (
                    <div key={index} className={classes.filterOption}>
                      <input
                        type="checkbox"
                        checked={sizeFilters.includes(size)}
                        onChange={() => handleSizeFilterChange(size)}
                      />
                      {size}
                    </div>
                  ))}
                </div>
              ) : selectedFilter === 'Ordenar' ? (
                <div>
                  {dropdownOptions.map(option => (
                    <li
                      key={option.value}
                      className={classes.dropdownOption}
                      onClick={() => handleSortChange(option.value)}
                    >
                      {option.label}
                    </li>
                  ))}
                </div>
              ) : (
                <p></p>
              )
            ) : (
              filters.map((filter, index) => (
                <button key={index} onClick={() => handleSelectedFilter(filter)}>
                  {filter.toUpperCase()}
                </button>
              ))
            )}
          </nav>
          <div className={classes.filterDropdown}>
            <span>Coleção</span>
            <ul className={classes.dropdownList}>
              {titles.map((title, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={categoryFilters.includes(title)}
                    onChange={() => handleCategoryFilterChange(title)}
                  />
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.filterDropdown}>
            <span>Categoria</span>
            <ul className={classes.dropdownList}>
              {subtitles.map((subtitle, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={subCategoryFilters.includes(subtitle)}
                    onChange={() => handleSubCategoryFilterChange(subtitle)}
                  />
                  {subtitle}
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.filterDropdown}>
            <span>Cores</span>
            <ul className={classes.dropdownList}>
              {availableColors.map((color, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={colorFilters.includes(color)}
                    onChange={() => handleColorFilterChange(color)}
                  />
                  {color}
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.filterDropdown}>
            <span>Tamanhos</span>
            <ul className={classes.dropdownList}>
              {sizes.map((size, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={sizeFilters.includes(size)}
                    onChange={() => handleSizeFilterChange(size)}
                  />
                  {size}
                </li>
              ))}
            </ul>
          </div>

          {/* <div className={classes.sortContainer}>
        <label htmlFor="sortDropdown" className={classes.sortLabel}>
          Classificar por:
        </label>
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
      </div> */}
        </div>
      </Gutter>
    </div>
  )
}

export default FilterMenu
