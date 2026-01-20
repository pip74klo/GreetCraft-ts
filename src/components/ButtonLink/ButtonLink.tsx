import type { ReactNode } from 'react';

import styles from './ButtonLink.module.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to: string;
}

const ButtonLink = ({ children, to }: ButtonProps) => {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  );
};

export default ButtonLink;
