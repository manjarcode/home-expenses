'use client'

import ExpenseList from '../components/expenses/expenseList/expenseList.js'
import GuestList from '../components/guests/guestList/guestList.js'
import Invoice from '../components/invoice/index.js'
import useExpenses from '../hooks/useExpenses.js'
import useGuests from '../hooks/useGuests.js'

function HomePage() {
  const {expenses, add: addExpense, remove: removeExpense, update: updateExpense} = useExpenses([])
  const {guests, add: addGuest, remove: removeGuest} = useGuests([])

  return (
    <>
      <GuestList guests={guests} onGuestAdded={addGuest} onGuestDeleted={removeGuest} />
      <ExpenseList
        expenses={expenses}
        onExpenseAdded={addExpense}
        onExpenseDeleted={removeExpense}
        onExpenseUpdated={updateExpense}
      />
      <Invoice expenses={expenses} guests={guests} />
    </>
  )
}

export default HomePage
