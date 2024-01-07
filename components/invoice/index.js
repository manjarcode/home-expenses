import {useState} from 'react'

import {Button} from '@mui/material'

import InvoiceService from '../../services/invoiceService.js'
import InvoiceList from '../invoiceList/index.js'
import ListCard from '../ListCard/index.js'
import TextAmmount from '../textAmmount/index.js'

const invoiceService = new InvoiceService()

export default function Invoice() {
  const [invoice, setInvoice] = useState([])

  const onClick = () => {
    invoiceService.calculate().then(response => {
      setInvoice(response)
    })
  }

  return (
    <ListCard>
      <ListCard.Header>
        <Button variant="contained">Subir Recibo</Button>
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
