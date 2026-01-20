import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { House } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { SquarePen } from 'lucide-react';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <div className={styles.left}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to={'/'}>
                  <House />
                  Home
                </Link>
              </li>
              <li className={styles.item}>
                <Link to={'/collection'}>
                  <LibraryBig />
                  My collection
                </Link>
              </li>
              <li className={styles.item}>
                <Link to={'/greeting'}>
                  <SquarePen />
                  Create
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}></div>
        </nav>
      </div>
    </div>
  );
};
