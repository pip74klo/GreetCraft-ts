
import { useAppSelector } from '../../../../app/providers/store/store'
import styles from './GreetingPreview.module.css'


const GreetingPreview = () => {
  const generatedGreeting = useAppSelector(state => state.generation.generatedGreeting)

  return (
    <div className={styles.greetingPreview}>
      <h2 className={styles.title}>Your congratulations!</h2>
      <div className={styles.greet}>
        {generatedGreeting ? <p className={styles.congratulations}>{generatedGreeting}</p> : 'Здесь будет сгенерированное поздравление'}
      </div>

    </div>
  )
}

export default GreetingPreview