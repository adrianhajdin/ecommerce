'use client'

import React from 'react';
import classes from './index.module.scss';

export const SocialShare = () => {
  // Coloque os links de compartilhamento reais para cada rede social aqui
  const socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://whatsapp.com",
    twitter: "https://twitter.com"
  };

  return (
    <div className={classes.socialShare}>
      <span className={classes.shareText}>Curtiu? Compartilhe esta peça!</span>
      <a href={socialLinks.facebook} className={classes.icon} aria-label="Share on Facebook">
        {/* Ícone do Facebook */}
      </a>
      <a href={socialLinks.instagram} className={classes.icon} aria-label="Share on Instagram">
        {/* Ícone do Instagram */}
      </a>
      <a href={socialLinks.whatsapp} className={classes.icon} aria-label="Share on WhatsApp">
        {/* Ícone do WhatsApp */}
      </a>
      <a href={socialLinks.twitter} className={classes.icon} aria-label="Share on Twitter">
        {/* Ícone do Twitter */}
      </a>
    </div>
  );
};
