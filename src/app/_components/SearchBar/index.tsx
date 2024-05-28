import React, { useState } from 'react'
import classes from './index.module.scss'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchClick = () => {
    onSearch(searchQuery)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick()
    }
  }

  return (
    <div className={classes.searchBarContainer}>
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={classes.searchInput}
      />
      <button className={classes.searchButton} onClick={handleSearchClick}>
        <img src="/search.png" alt="Search" className={classes.searchIcon} />
      </button>
    </div>
  )
}

export default SearchBar
