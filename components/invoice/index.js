import {useState} from 'react'

import {useRouter} from 'next/navigation'

import {Button} from '@mui/material'

import InvoiceService from '../../services/invoiceService.js'
import InvoiceList from '../invoiceList/index.js'
import ListCard from '../ListCard/index.js'
import TextAmmount from '../textAmmount/index.js'

const invoiceService = new InvoiceService()

export default function Invoice() {
  const [invoice, setInvoice] = useState([])

  const router = useRouter()

  const handleCalculate = () => {
    invoiceService.calculate().then(response => {
      setInvoice(response)
    })
  }

  const handleUpload = () => {
    router.push('/upload')
  }
  return (
    <ListCard>
      <ListCard.Header>
        <Button onClick={handleUpload} variant="contained">
          Subir Recibo
        </Button>
        <Button onClick={handleCalculate} variant="contained">
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
