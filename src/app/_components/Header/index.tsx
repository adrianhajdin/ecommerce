import React from 'react';
import Link from 'next/link';
import { Header as HeaderType } from '../../../payload/payload-types';
import { fetchHeader } from '../../_api/fetchGlobals';
import { HeaderNav } from './Nav';
import { HeaderComponent } from './HeaderComponent';

import classes from './index.module.scss';

import { fetchDocs } from '../../_api/fetchDocs';
import { Category } from '../../../payload/payload-types';

export async function Header() {
  let header = null;
  let categories = null;

  try {
    categories = await fetchDocs('categories');
  } catch (error) {
    console.log(error);
  }

  try {
    header = await fetchHeader();
  } catch (error) {
    console.log(error);
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <img
          className={classes.logo}
          alt="Minimo 1"
          src="/minimo_1_small.jpeg"
        />
      </Link>
      <div className={classes.separatorV}></div>
      <HeaderComponent categories={categories} />
      <HeaderNav header={header} />
    </header>
  );
}
