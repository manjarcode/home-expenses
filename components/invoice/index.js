import {useState} from 'react'

import InvoiceService from 'home-expenses-domain/lib/invoices/services/InvoiceService.js'
import PropTypes from 'prop-types'

import {Button} from '@mui/material'

import InvoiceList from '../invoiceList/index.js'
import ListCard from '../ListCard/index.js'
import TextAmmount from '../textAmmount/index.js'

export default function Invoice({expenses, guests}) {
  const [invoice, setInvoice] = useState([])

  const onClick = () => {
    const invoiceService = new InvoiceService()
    const result = invoiceService.calculate({expenses, guests})
    setInvoice(result.toJSON())
  }

  return (
    <ListCard>
      <ListCard.Header>
        <ListCard.Title> </ListCard.Title>
        <Button onClick={onClick} variant="contained">
          Calcular
        </Button>
      </ListCard.Header>
      <ListCard.List>
        {invoice.map(({name, total, expenses}) => {
          return (
            <ListCard.Item
              primary={<TextAmmount name={name} ammount={total} />}
              secondary={<InvoiceList expenses={expenses} />}
            ></ListCard.Item>
          )
        })}
      </ListCard.List>
    </ListCard>
  )
}

Invoice.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      expense: PropTypes.string,
      value: PropTypes.number,
      days: PropTypes.number
    })
  ),
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      days: PropTypes.number,
      value: PropTypes.number
    })
  )
}
