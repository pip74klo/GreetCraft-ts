import styles from './ButtonOption.module.css'

interface ButtonOptionProps<T extends string> {
  currentValue: T
  option: T
  onChange: (option: T) => void
}


const ButtonOption = <T extends string>({ currentValue, option, onChange }: ButtonOptionProps<T>) => {
  return (
    <button
      className={option === currentValue ? styles.active : ''}
      key={option}
      onClick={() => onChange(option)}
    >
      {option}
    </button>
  )
}

export default ButtonOption 