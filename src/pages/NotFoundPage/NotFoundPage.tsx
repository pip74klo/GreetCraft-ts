import ButtonLink from '../../components/ButtonLink/ButtonLink';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.info}>
      <h2>Page not found</h2>
      <ButtonLink to={'/'}>Return to home</ButtonLink>
    </div>
  );
};

export default NotFoundPage;
