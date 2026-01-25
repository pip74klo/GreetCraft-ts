import ButtonOption from '../ButtonOption/ButtonOption'

import styles from './SelectionButtonsList.module.css'

interface SelectionButtonsListProps<T extends string> {
  optionsArray: T[]
  currentValue: T
  onChange: (value: T) => void
}

const SelectionButtonsList = <T extends string>({ optionsArray, currentValue, onChange }: SelectionButtonsListProps<T>) => {
  return (
    <div className={styles.selectionButtons}>
      {optionsArray.map((option) => (
        <ButtonOption
          key={option}
          option={option}
          currentValue={currentValue}
          onChange={onChange} />
      ))}
    </div>
  )
}

export default SelectionButtonsList