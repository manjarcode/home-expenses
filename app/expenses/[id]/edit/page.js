'use client'
import React, {useEffect, useState} from 'react'

import {useParams, useRouter} from 'next/navigation'

import ExpenseForm from '../../../../components/expenses/expenseForm/expenseForm.js'
import useExpenses from '../../../../hooks/useExpenses.js'
import routes from '../../../routes.js'

export default function ExpenseUpdatePage() {
  const {id} = useParams()
  const [expense, setExpense] = useState(null)
  const {get, update} = useExpenses()
  const router = useRouter()

  useEffect(() => {
    if (!id) return

    get(id).then(setExpense)
  }, [get, id])

  const handleAccept = async item => {
    await update(item)
    router.push(routes.home())
  }

  const handleCancel = () => {
    router.push(routes.home())
  }

  return (
    <div>
      <h1>Editar gasto</h1>
      {expense && <ExpenseForm expense={expense} onAccept={handleAccept} onCancel={handleCancel} />}
    </div>
  )
}
