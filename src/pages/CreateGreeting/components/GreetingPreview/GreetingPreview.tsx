
import { useAppSelector } from '../../../../app/providers/store/store'
import styles from './GreetingPreview.module.css'


const GreetingPreview = () => {
  const generatedGreeting = useAppSelector(state => state.generation.generatedGreeting)

  return (
    <div className={styles.greetingPreview}>
      <h2>Preview</h2>
      <p className={styles.greet}>
        {generatedGreeting ? generatedGreeting : 'Здесь будет сгенерированное поздравление'}
      </p>

    </div>
  )
}

export default GreetingPreview