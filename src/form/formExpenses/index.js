import {useState} from 'react'

import InvoiceService from '../../domain/InvoiceService.js'
import Expenses from './expenses.js'
import Guests from './guests.js'

function FormExpenses() {
  const [expenses, setExpenses] = useState([])
  const [guests, setGuests] = useState([])

  const onClick = () => {
    const invoiceService = new InvoiceService()
    invoiceService.calculate({expenses, guests})
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
