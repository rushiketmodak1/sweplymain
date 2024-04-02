'use client';
import React from 'react';
import NextLink from 'next/link';
import styles from './Link.module.css';

const Link = React.forwardRef(function Link({ children, href, native }, ref) {
  if (native) {
    return (
      <a href={href} className={styles.link} ref={ref}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} passHref>
      <a className={styles.link} ref={ref}>
        {children}
      </a>
    </NextLink>
  );
});

Link.displayName = 'Link';

export { Link }; 