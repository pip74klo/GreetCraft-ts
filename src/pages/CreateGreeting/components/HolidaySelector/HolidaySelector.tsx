import styles from './HolidaySelector.module.css'

import { useAppDispatch, useAppSelector } from '../../../../app/providers/store/store';

import { setHoliday } from '../../../../slices/greetingDataSlice';

import { HOLIDAYS } from '../../../../constants/holydays';
import SelectionButtonsList from '../SelectionButtonsList/SelectionButtonsList';




const HolidaySelector = () => {
  const holiday = useAppSelector(state => state.greetingData.holiday)
  const dispatch = useAppDispatch()

  const holidayNamesList = Object.values(HOLIDAYS)

  const onChangeHoliday = (nameHolyday: string) => {
    setHoliday(nameHolyday)
    dispatch(setHoliday(nameHolyday))
  }

  return (
    <section className={styles.holidaySelector}>
      <p className={styles.title}>1. Выберите праздник:</p>
      <SelectionButtonsList
        optionsArray={holidayNamesList}
        currentValue={holiday}
        onChange={onChangeHoliday} />
    </section>
  )
}

export default HolidaySelector;