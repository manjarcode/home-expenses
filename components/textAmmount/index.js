import cx from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

export default function TextAmmount({name, ammount, paid}) {
  const className = cx(styles.ammount, {
    [styles.paid]: paid
  })
  return (
    <div className={className}>
      <span>{name}:</span>
      <span>{ammount}€</span>
    </div>
  )
}
TextAmmount.propTypes = {
  name: PropTypes.string,
  ammount: PropTypes.number,
  paid: PropTypes.bool
}
