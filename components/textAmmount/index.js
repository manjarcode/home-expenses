import PropTypes from 'prop-types'

import styles from './index.module.scss'

export default function TextAmmount({name, ammount}) {
  return (
    <div className={styles.item}>
      <span>{name}:</span>
      <span>{ammount}€</span>
    </div>
  )
}
TextAmmount.propTypes = {
  name: PropTypes.string,
  ammount: PropTypes.number
}
