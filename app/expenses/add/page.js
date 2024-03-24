'use client'
import {useRouter} from 'next/navigation'
import {v4 as uuid} from 'uuid'

import {Box, Typography} from '@mui/material'

import ExpenseForm from '../../../components/expenses/expenseForm/expenseForm.js'
import useExpenses from '../../../hooks/useExpenses.js'
import routes from '../../routes.js'

export default function ExpenseAddPage() {
  const router = useRouter()
  const {add} = useExpenses()

  const onAcceptHandler = expense => {
    const fullExpense = {...expense, id: uuid()}
    add(fullExpense)
    router.push(routes.home())
  }

  const onCancelHandler = () => {
    router.push(routes.home())
  }

  return (
    <Box>
      <Typography variant="h2">Agregar Gasto</Typography>
      <ExpenseForm onAccept={onAcceptHandler} onCancel={onCancelHandler} />
    </Box>
  )
}
