import styles from './HeroText.module.css';

const HeroText = () => {
  return (
    <>
      <h1
        className={styles.title}
      >{`GreetCraft is unique greetings`}</h1>
      <p className={styles.description}>
        {`Create beautiful and heartfelt greetings for your loved ones with this AI-powered tool — in just a few clicks..`}
      </p>
    </>
  );
};

export default HeroText;
