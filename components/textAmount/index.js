import cx from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

export default function TextAmount({name, amount, paid}) {
  const className = cx(styles.amount, {
    [styles.paid]: paid
  })
  return (
    <div className={className}>
      <span>{name}:</span>
      <span>{amount}€</span>
    </div>
  )
}
TextAmount.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  paid: PropTypes.bool
}
