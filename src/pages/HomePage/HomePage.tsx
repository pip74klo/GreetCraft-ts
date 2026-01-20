import styles from './HomePage.module.css';

import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
    </div>
  );
};

export default HomePage;
