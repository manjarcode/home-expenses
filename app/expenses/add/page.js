'use client'
import {useRouter} from 'next/navigation'
import {v4 as uuid} from 'uuid'

import {Box} from '@mui/material'

import ExpenseForm from '../../../components/expenses/expenseForm/expenseForm.js'
import PageTitle from '../../../components/layout/pageTitle/pageTitle.js'
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
      <PageTitle>Nuevo gasto</PageTitle>
      <ExpenseForm onAccept={onAcceptHandler} onCancel={onCancelHandler} />
    </Box>
  )
}
