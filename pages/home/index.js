import {useState} from 'react'

import InvoiceService from 'home-expenses-domain/src/InvoiceService.js'

import Button from '../../components/button/index.js'
import Invoice from '../../components/invoice/index.js'
import Expenses from './expenses.js'
import Guests from './guests.js'

function HomePage() {
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

export default HomePage
