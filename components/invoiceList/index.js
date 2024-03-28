import {useState} from 'react'

import PropTypes from 'prop-types'

import ListCard from '../layout/listCard/listCard.js'
import InvoiceDetail from './InvoiceDetail/extendedDetail.js'

import styles from './index.module.scss'

export default function InvoiceList({expenses}) {
  const [show, setShow] = useState(false)

  const onActionLinkClick = () => {
    setShow(value => !value)
  }
  return (
    <ListCard>
      <span className={styles.actionLink} onClick={onActionLinkClick}>
        Desglose
      </span>
      <InvoiceDetail expenses={expenses} isOpen={show} onClose={() => setShow(false)} />
    </ListCard>
  )
}

InvoiceList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object)
}
