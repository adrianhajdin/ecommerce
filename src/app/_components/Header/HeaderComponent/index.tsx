// HeaderComponent.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { HeaderNav } from '../Nav';
import classes from './index.module.scss'// Garanta que o caminho está correto

const HeaderComponent = ({ header }) => {
  return (
    <header className={classes.header}>
      {/* Use o componente Link corretamente sem a tag <a> */}
      <Link href="/">
        <Image src="/minimo_1.jpeg" alt="TMínimo 1" width={350} height={80} className={classes.logo} />
      </Link>

      <HeaderNav header={header} />

      <div className={classes.headerIcons}>
        {/* Removido <a> de dentro do Link */}
        <Link href="/products" className={classes.iconLink}>
          <Image src="/search.png" alt="Search" width={100} height={100} />
        </Link>
        <Link href="/orders" className={classes.iconLink}>
          <Image src="/user_profile.png" alt="Orders" width={100} height={100} />
        </Link>
        <Link href="/cart" className={classes.iconLink}>
          <Image src="/cart.png" alt="Cart" width={100} height={100} />
        </Link>
      </div>
      <div className={classes.headerSocialIcons}>
      <a href="https://www.instagram.com" className={classes.iconLink} target="_blank" rel="noopener noreferrer">
        <Image src="/instagram.png" alt="Instagram" width={80} height={80} />
      </a>
      <a href="https://www.tiktok.com" className={classes.iconLink} target="_blank" rel="noopener noreferrer">
        <Image src="/tiktok.png" alt="TikTok" width={80} height={80} />
      </a>
    </div>
    </header>
  );
};

export default HeaderComponent;
