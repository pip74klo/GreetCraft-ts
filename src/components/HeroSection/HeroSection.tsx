import ButtonLink from '../ButtonLink/ButtonLink';
import HeroGallery from '../HeroGallery/HeroGallery';
import HeroText from '../HeroText/HeroText';
import styles from './HeroSection.module.css';

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
