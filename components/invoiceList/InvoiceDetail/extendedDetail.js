import React from 'react'

import PropTypes from 'prop-types'

import {Dialog} from '@mui/material'

export default function InvoiceDetail({expenses, isOpen, onClose}) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {expenses.map(({expense, value, days}) => {
        return (
          <ul>
            <li>
              {expense}: {value}€ ({days} días)
            </li>
          </ul>
        )
      })}
    </Dialog>
  )
}

InvoiceDetail.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      expense: PropTypes.string,
      value: PropTypes.number,
      days: PropTypes.number
    })
  ),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}
