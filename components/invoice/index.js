import {useState} from 'react'

import {Button} from '@mui/material'

import InvoiceService from '../../services/invoiceService.js'
import InvoiceList from '../invoiceList/index.js'
import ListCard from '../layout/listCard/listCard.js'
import TextAmount from '../textAmount/index.js'

const invoiceService = new InvoiceService()

export default function Invoice() {
  const [invoice, setInvoice] = useState([])

  const handleCalculate = () => {
    invoiceService.calculate().then(response => {
      setInvoice(response)
    })
  }

  return (
    <ListCard>
      <ListCard.Header>
        <Button onClick={handleCalculate} variant="contained">
          Calcular
        </Button>
      </ListCard.Header>
      <ListCard.List>
        {invoice.map(({name, total, expenses}) => {
          return (
            <ListCard.Item
              primary={<TextAmount name={name} amount={total} />}
              secondary={<InvoiceList expenses={expenses} />}
            ></ListCard.Item>
          )
        })}
      </ListCard.List>
    </ListCard>
  )
}
