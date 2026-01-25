import styles from './HeroSection.module.css';

import HeroGallery from '../HeroGallery/HeroGallery';
import HeroText from '../HeroText/HeroText';
import ButtonLink from '../../../../components/ButtonLink/ButtonLink';


const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <HeroText />
      <ButtonLink to={'/greeting'}>Начать</ButtonLink>
      <HeroGallery />
    </div>
  );
};

export default HeroSection;
