import {useState} from 'react'

import Invoice from '../../components/invoice/index.js'
import InvoiceService from '../../domain/InvoiceService.js'
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
      <button onClick={onClick}>Calcular</button>
      <Invoice invoice={invoice} />
    </div>
  )
}

export default FormExpenses
