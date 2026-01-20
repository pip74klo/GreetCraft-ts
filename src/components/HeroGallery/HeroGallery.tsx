import styles from './HeroGallery.module.css';

import img_1 from '../../assets/images/gallery/image_1.jpg';
import img_2 from '../../assets/images/gallery/image_2.jpg';
import img_3 from '../../assets/images/gallery/image_3.jpg';
import img_5 from '../../assets/images/gallery/image_5.jpg';
import img_4 from '../../assets/images/gallery/image_4.jpg';
import img_6 from '../../assets/images/gallery/image_6.jpg';

const HeroGallery = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.item}>
        <img src={img_1} alt='' />
        <p className={styles.itemDescription}>Happy Birthday</p>
      </div>
      <div className={styles.item}>
        <img src={img_2} alt='' />
        <p className={styles.itemDescription}>Congratulation</p>
      </div>
      <div className={styles.item}>
        <img src={img_3} alt='' />
        <p className={styles.itemDescription}>Happy Women's Day</p>
      </div>
      <div className={styles.item}>
        <img src={img_4} alt='' />
        <p className={styles.itemDescription}>Poetic</p>
      </div>

      <div className={styles.item}>
        <img src={img_5} alt='' />
        <p className={styles.itemDescription}>Wedding Wishes</p>
      </div>

      <div className={styles.item}>
        <img src={img_6} alt='' />
        <p className={styles.itemDescription}>Happy New Year</p>
      </div>
    </div>
  );
};

export default HeroGallery;
