
import { useAppDispatch, useAppSelector } from '../../../../app/providers/store/store'

import { setAge, setInterests, setName } from '../../../../slices/greetingDataSlice'

import styles from './RecipientForm.module.css'

const RecipientForm = () => {

  const dispatch = useAppDispatch()
  const { name, age, interests } = useAppSelector(state => state.greetingData)

  const onChangeName = (name: string) => {
    if (name && !name.trim()) return

    dispatch(setName(name))
  }
  const onChangeAge = (age: string) => {
    const minAge = 1
    const maxAge = 120

    if (age && (Number(age) < minAge) || (Number(age) > maxAge)) {
      alert(`Минимальное и максимально допустимое значение  от 1 до 120.
        Введите корректные данные`)
      age = ''
    }

    dispatch(setAge(age))
  }

  const onChangeInterest = (interest: string) => {
    if (interest && !interest.trim()) return

    dispatch(setInterests(interest))
  }


  return (
    <section className={styles.recipientForm}>
      <p className={styles.title}>2. Who is it for ?</p>
      <div className={styles.formInfo}>
        <div className={styles.infoBlock}>
          <div className={styles.infoTop}>
            <div className={styles.infoTopItem}>
              <label>Name</label>
              <input
                className={`${styles.input} ${name.length > 0 ? styles.full : ''}`}
                type='text'
                placeholder={'Ivan'}
                value={name}
                required
                onChange={(e) => onChangeName(e.target.value)}
              />
            </div>

            <div className={styles.infoTopItem}>
              <label>Age</label>
              <input
                className={`${styles.input} ${age.length > 0 ? styles.full : ''}`}
                type='number'
                value={age}
                min={1}
                max={120}
                placeholder='18'
                onChange={(e) => onChangeAge(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <label>Hobbies and interests</label>
          <textarea
            className={`${styles.textarea} ${interests.length > 0 ? styles.full : ''}`}
            rows={3}
            value={interests}
            placeholder='Travel, tennis, movies...'
            onChange={(e) => onChangeInterest(e.target.value)}
          />
        </div>


      </div>

    </section>
  )
}

export default RecipientForm