
import { useAppDispatch, useAppSelector } from '../../../../app/providers/store/store';

import { saveToHistory, setGeneratedGreeting } from '../../../../slices/generationSlice';
import { formatPoetry } from '../../../../utils/helpers/formatPoetry';
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
    let response = await generationGreeting(dataPrompt);

    if (response) {
      if (data.settings.tone === 'poetry') {
        response = formatPoetry(response)
      }
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
        {loading ? "Generating" : 'Generate'}</button>
      {error && <h3 className={styles.error}>{error}</h3>}

    </div>
  )
}

export default GenerateButton