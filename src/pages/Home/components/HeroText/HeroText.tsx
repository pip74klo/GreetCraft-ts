import styles from './HeroText.module.css';

const HeroText = () => {
  return (
    <>
      <h1
        className={styles.title}
      >{`GreetCraft это уникальные поздравления`}</h1>
      <p className={styles.description}>
        {`Создавайте красивые и искренние поздравления для близких c помощью инструмента на основе искусственного интеллекта — всего за пару кликов.`}
      </p>
    </>
  );
};

export default HeroText;
