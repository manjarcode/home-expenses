'use client'
import {Box} from '@mui/material'

import ExpenseList from '../components/expenses/expenseList/index.js'
import GuestList from '../components/guests/guestList/index.js'
import Invoice from '../components/invoice/index.js'
import useExpenses from '../hooks/useExpenses.js'
import useGuests from '../hooks/useGuests.js'

import styles from './page.module.scss'

function HomePage() {
  const {expenses, add: addExpense, remove: removeExpense, update: updateExpense} = useExpenses([])
  const {guests, add: addGuest, remove: removeGuest} = useGuests([])

  return (
    <Box className={styles.container}>
      <GuestList guests={guests} onGuestAdded={addGuest} onGuestDeleted={removeGuest} />
      <ExpenseList
        expenses={expenses}
        onExpenseAdded={addExpense}
        onExpenseDeleted={removeExpense}
        onExpenseUpdated={updateExpense}
      />
      <Invoice expenses={expenses} guests={guests} />
    </Box>
  )
}

export default HomePage
