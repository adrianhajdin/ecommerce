'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Header as HeaderType } from '../../../../payload/payload-types';
import { useAuth } from '../../_providers/Auth';
import { Button } from '../Button';
import { CartLink } from '../CartLink';
import { CMSLink } from '../Link';
import CarouselSideBar from '../_CarouselSidebar';
import classes from './index.module.scss';

// Utiliser dynamic pour désactiver le SSR pour react-burger-menu
const Menu = dynamic(() => import('react-burger-menu').then((mod) => mod.slide), {
  ssr: false,
});

export const SlideBar: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || [];
  const { user } = useAuth();

  const showSettings = (event: React.MouseEvent) => {
    event.preventDefault();
    alert('Settings clicked!');
  };

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '18px',
      height: '25px',
      right: '15px',
      top: '15px',
      zIndex: '1000',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: 'black',
    },
    bmMenuWrap: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
    },
    bmMenu: {
      background: 'white',
      padding: '0em 1.5em',
      fontSize: '1.15em',
      height: '100%',
      overflowY: 'auto',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'block',
      padding: '0.9em',
    },
    bmOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.7)',
      zIndex: '999',
    },
  };

  return (
    <Menu styles={styles} right>
      <Link href="/">
        <Image src="/logo-black.jpg" alt="logo" width={250} height={50} />
      </Link>
      <CarouselSideBar />

      {/* Liens du menu burger */}
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a onClick={showSettings} className="menu-item--small" href="">Settings</a>

      {/* Navigation existante */}
      <nav className={["menu-item", user === undefined && classes.hide].filter(Boolean).join(' ')}>
        {navItems.map(({ link }, i) => (
          <CMSLink key={i} {...link} appearance="none" />
        ))}
        <CartLink />
        {user && <Link href="/account">Account</Link>}
        {!user && (
          <Button
            el="link"
            href="/login"
            label="Login"
            appearance="primary"
            onClick={() => (window.location.href = '/login')}
          />
        )}
        {user && <CartLink />}
      </nav>
    </Menu>
  );
};

export default SlideBar;
