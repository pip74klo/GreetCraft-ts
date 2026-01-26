import { useAppDispatch, useAppSelector } from '../../../../app/providers/store/store';
// import { setSettingsTone, setSettingsLanguage, setSettingsLength } from '../../../../slices/generationSlice'
import styles from './SettingsPanel.module.css'

import SelectionButtonsList from '../SelectionButtonsList/SelectionButtonsList';
import { SETTINGS, type SettingsLanguageType, type SettingsLengthType, type SettingsToneType } from '../../../../constants/settings';
import { setSettingsLanguage, setSettingsLength, setSettingsTone } from '../../../../slices/greetingDataSlice';


const SettingsPanel = () => {
  const dispatch = useAppDispatch();
  const { tone, language, length } = useAppSelector(state => state.greetingData.settings)

  const toneOptionsList = Object.values(SETTINGS.TONE)
  const languagesOptionsList = Object.values(SETTINGS.LANGUAGE)
  const lengthOptionsList = Object.values(SETTINGS.LENGTH)

  const onChangeTone = (option: SettingsToneType) => {
    dispatch(setSettingsTone(option))
  }
  const onChangeLanguage = (option: SettingsLanguageType) => {
    dispatch(setSettingsLanguage(option))
  }
  const onChangeLength = (option: SettingsLengthType) => {
    dispatch(setSettingsLength(option))
  }

  return (
    <section className={styles.settingsPanel}>
      <p className={styles.title}>3. Settings </p>
      <SelectionButtonsList
        label={'Tone'}
        optionsArray={toneOptionsList}
        currentValue={tone}
        onChange={onChangeTone} />
      <SelectionButtonsList
        label={'Language'}
        optionsArray={languagesOptionsList}
        currentValue={language}
        onChange={onChangeLanguage} />
      <SelectionButtonsList
        label={'Length'}
        optionsArray={lengthOptionsList}
        currentValue={length}
        onChange={onChangeLength} />
    </section>
  )
}

export default SettingsPanel