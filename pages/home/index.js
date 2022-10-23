import {useState} from 'react'

import InvoiceService from 'home-expenses-domain/src/invoices/services/InvoiceService.js'

import Button from '@mui/material/Button'

import ExpenseList from '../../components/expenses/expenseList/index.js'
import GuestList from '../../components/guests/guestList/index.js'
import Invoice from '../../components/invoice/index.js'
import useGuests from '../../hooks/useGuests.js'

function HomePage() {
  const [expenses, setExpenses] = useState([])
  const {guests, add, remove} = useGuests([])
  const [invoice, setInvoice] = useState([])

  const onClick = () => {
    const invoiceService = new InvoiceService()
    const result = invoiceService.calculate({expenses, guests})
    setInvoice(result.toJSON())
  }

  return (
    <div>
      <ExpenseList onChange={setExpenses} />
      <GuestList guests={guests} onGuestAdded={add} onGuestDeleted={remove} />
      <Button onClick={onClick} variant="contained">
        Calcular
      </Button>
      <Invoice invoice={invoice} />
    </div>
  )
}

export default HomePage
