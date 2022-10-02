import {useState} from 'react'

import InvoiceService from 'home-expenses-domain/src/InvoiceService.js'

import Invoice from '../../components/invoice/index.js'
import Button from '../button/index.js'
import Expenses from './expenses.js'
import Guests from './guests.js'

function FormExpenses() {
  const [expenses, setExpenses] = useState([])
  const [guests, setGuests] = useState([])

  const [invoice, setInvoice] = useState([])

  const onClick = () => {
    const invoiceService = new InvoiceService()
    const result = invoiceService.calculate({expenses, guests})
    setInvoice(result.toJSON())
  }

  return (
    <div>
      <Expenses onChange={setExpenses} />
      <Guests onChange={setGuests} />
      <Button onClick={onClick}>Calcular</Button>
      <Invoice invoice={invoice} />
    </div>
  )
}

export default FormExpenses
