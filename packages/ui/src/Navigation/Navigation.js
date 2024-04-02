'use client';
import React from 'react';
import {Link} from '../Link/Link';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link native href="/">
        Home
      </Link>
      <Link native href="/user">
        Docs
      </Link>
      <Link native href="/web">
        Web
      </Link>
    </nav>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
