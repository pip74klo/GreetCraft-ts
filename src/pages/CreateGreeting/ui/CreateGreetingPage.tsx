import styles from './CreateGreetingPage.module.css';

import HolidaySelector from '../components/HolidaySelector/HolidaySelector';
import RecipientForm from '../components/RecipientForm/RecipientForm';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import GenerateButton from '../components/GenerateButton/GenerateButton';
import GreetingPreview from '../components/GreetingPreview/GreetingPreview';


const CreateGreetingPage = () => {
  return (
    <div className={styles.greetingPage}>
      <h2>Создайте уникальное поздравление</h2>
      <div className={styles.flexGrid}>
        <div className={styles.holiday}>
          <HolidaySelector />
        </div>
        <div className={styles.recipient}>
          <RecipientForm />
        </div>
        <div className={styles.settings}>
          <SettingsPanel />
        </div>
      </div>

      <GenerateButton />
      <GreetingPreview />
    </div>
  );
};

export default CreateGreetingPage;
