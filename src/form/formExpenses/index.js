import {useState} from 'react'

import InvoiceService from '../../domain/InvoiceService.js'
import Expenses from './expenses.js'
import Guests from './guests.js'

function FormExpenses() {
  const [expenses, setExpenses] = useState([])
  const [guests, setGuests] = useState([])

  const [invoice, setInvoice] = useState()
  console.log(invoice)

  const onClick = () => {
    const invoiceService = new InvoiceService()
    const result = invoiceService.calculate({expenses, guests})
    setInvoice(result)
  }

  return (
    <div>
      <Expenses onChange={setExpenses} />
      <Guests onChange={setGuests} />
      <button onClick={onClick}>Calcular</button>
    </div>
  )
}

export default FormExpenses
