import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

import { House } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { SquarePen } from 'lucide-react';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <div className={styles.left}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <NavLink to={'/'}>
                  <House className={styles.homeImg} />
                  Home
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to={'/collection'}>
                  <LibraryBig className={styles.libraryBig} />
                  My collection
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to={'/greeting'}>
                  <SquarePen className={styles.squarePen} />
                  Create
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.right}></div>
        </nav>
      </div>
    </header>
  );
};
