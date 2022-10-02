import {useState} from 'react'

import PropTypes from 'prop-types'

import './index.scss'

const BASE = 'InvoiceDetail'

export default function InvoiceDetail({expenses}) {
  const [show, setShow] = useState(false)

  const onActionLinkClick = () => {
    setShow(value => !value)
  }
  return (
    <div>
      <span className={`${BASE}-actionLink`} onClick={onActionLinkClick}>
        Desglose
      </span>
      {show &&
        expenses.map(({expense, value, dates}) => {
          return (
            <ul>
              <li>
                {expense} : {value} ({dates.length} días)
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
