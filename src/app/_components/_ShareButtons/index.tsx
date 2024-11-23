'use client'

import React from 'react'
import classes from './index.module.scss'

export const ShareButtons: React.FC<{ url: string; text?: string }> = ({
  url,
  text = 'Check this out!',
}) => {
  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    },
  ]

  return (
    <div className={classes.shareButtons}>
      {shareLinks.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.button}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
