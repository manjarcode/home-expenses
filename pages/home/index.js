import {useState} from 'react'

import InvoiceService from 'home-expenses-domain/src/invoices/services/InvoiceService.js'

import Button from '@mui/material/Button'

import Invoice from '../../components/invoice/index.js'
import useGuests from '../../hooks/useGuests.js'
import Expenses from './expenseList/index.js'
import Guests from './guests/index.js'

function HomePage() {
  const [expenses, setExpenses] = useState([])
  const {guests, addGuest} = useGuests([])
  const [invoice, setInvoice] = useState([])

  const onClick = () => {
    const invoiceService = new InvoiceService()
    const result = invoiceService.calculate({expenses, guests})
    setInvoice(result.toJSON())
  }

  return (
    <div>
      <Expenses onChange={setExpenses} />
      <Guests guests={guests} onGuestAdded={addGuest} />
      <Button onClick={onClick} variant="contained">
        Calcular
      </Button>
      <Invoice invoice={invoice} />
    </div>
  )
}

export default HomePage
