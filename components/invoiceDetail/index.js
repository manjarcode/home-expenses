import {useState} from 'react'

import PropTypes from 'prop-types'

import styles from './index.module.scss'

export default function InvoiceDetail({expenses}) {
  const [show, setShow] = useState(false)

  const onActionLinkClick = () => {
    setShow(value => !value)
  }
  return (
    <div>
      <span className={styles.actionLink} onClick={onActionLinkClick}>
        Desglose
      </span>
      {show &&
        expenses.map(({expense, value, days}) => {
          return (
            <ul>
              <li>
                {expense}: {value}€ ({days} días)
              </li>
            </ul>
          )
        })}
    </div>
  )
}

InvoiceDetail.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object)
}
