'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'
import SearchBar from '../../SearchBar'
import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  // Handler for search action
  const handleSearch = (query: string) => {
    console.log(`Search query: ${query}`)
    // Implement the search functionality here
  }

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  return (
    <div>
      <nav
        className={[
          classes.nav,
          // fade the nav in on user load to avoid flash of content and layout shift
          // Vercel também faz isso em seu próprio cabeçalho de site, veja https://vercel.com
          user === undefined && classes.hide,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="none" />
        })}
        <Link href="https://www.instagram.com" target="_blank">
          <img src="/instagram.png" alt="Instagram" className={classes.socialIcon} />
        </Link>
        <Link href="https://www.tiktok.com" target="_blank">
          <img src="/tiktok.png" alt="TikTok" className={classes.socialIcon} />
        </Link>
        <button className={classes.searchToggle} onClick={toggleSearchBar}>
          <img src="/search.png" alt="Search" className={classes.socialIcon} />
        </button>
        {user && (
          <Link href="/account">
            <img
              className={classes.socialIcon}
              alt="Minha Conta"
              src="/user_profile.png"
            />
          </Link>
        )}
        {!user && (
          <React.Fragment>
            <Link href="/login">
              <img src="/login.png" alt="Login" className={classes.socialIcon} />
            </Link>
          </React.Fragment>
        )}
        <CartLink />
      </nav>
      {isSearchVisible && (
        <div className={classes.searchBarWrapper}>
          <SearchBar onSearch={handleSearch} />
        </div>
      )}
    </div>
  )
}