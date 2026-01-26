import ButtonOption from '../ButtonOption/ButtonOption'

import styles from './SelectionButtonsList.module.css'

interface SelectionButtonsListProps<T extends string> {
  optionsArray: T[]
  currentValue: T
  label?: string
  onChange: (value: T) => void
}

const SelectionButtonsList = <T extends string>({ optionsArray, currentValue, onChange, label }: SelectionButtonsListProps<T>) => {
  return (
    <div>
      <div className={styles.selectionButtons}>
        {label && <p className={styles.label}>{label}</p>}
        <div className={styles.buttons}>
          {optionsArray.map((option) => (

            <ButtonOption
              key={option}
              option={option}
              currentValue={currentValue}
              onChange={onChange} />


          ))}

        </div>

      </div>

    </div>
  )
}

export default SelectionButtonsList