
import { useAppDispatch, useAppSelector } from '../../../../app/providers/store/store';

import { saveToHistory, setGeneratedGreeting } from '../../../../slices/generationSlice';
import { getGenerationPrompt } from '../../../../utils/helpers/getGenerationPrompt';
import useGenerationGreeting from '../../../../utils/hooks/useGenerationGreeting';



import styles from './GenerateButton.module.css'

import { WandSparkles } from 'lucide-react';

const GenerateButton = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.greetingData)
  const { loading, generationGreeting, error } = useGenerationGreeting()

  const onGenerate = async () => {
    const dataPrompt = getGenerationPrompt(data);
    const response = await generationGreeting(dataPrompt);

    if (response) {
      dispatch(setGeneratedGreeting(response))
      dispatch(saveToHistory(response))
    }
  }

  return (
    <div className={styles.generateButton}>
      <button
        className={styles.button}
        onClick={onGenerate}
        disabled={loading}
      >
        <WandSparkles className={loading ? styles.wand : ''} />
        {loading ? "Генерирую" : 'Сгенерировать'}</button>
      <h3 className={styles.error}>{error}</h3>
    </div>
  )
}

export default GenerateButton