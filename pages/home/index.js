import {useState} from 'react'

import {Box} from '@mui/material'
import Button from '@mui/material/Button'

import ExpenseList from '../../components/expenses/expenseList/index.js'
import GuestList from '../../components/guests/guestList/index.js'
import Invoice from '../../components/invoice/index.js'
import useGuests from '../../hooks/useGuests.js'

import styles from './index.module.scss'

function HomePage() {
  const [expenses, setExpenses] = useState([])
  const {guests, add, remove} = useGuests([])

  return (
    <Box className={styles.container}>
      <GuestList guests={guests} onGuestAdded={add} onGuestDeleted={remove} />
      <ExpenseList onChange={setExpenses} />
      <Invoice expenses={expenses} guests={guests} />
    </Box>
  )
}

export default HomePage
