import {useEffect, useState} from 'react'

import {useCases} from 'home-expenses-domain'

const {listExpensesUseCase, addExpenseUseCase, removeExpenseUseCase} = useCases

export default function useExpenses() {
  const [expenses, setExpenses] = useState([])

  const add = expense => {
    addExpenseUseCase
      .execute(expense)
      .then(() => {
        setExpenses([...expenses, expense])
      })
      .catch(error => {
        console.error(error)
      })
  }

  const remove = id => {
    removeExpenseUseCase
      .execute(id)
      .then(() => {
        setExpenses(expenses => expenses.filter(expense => expense.id !== id))
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    listExpensesUseCase.execute().then(entities => {
      setExpenses(entities)
    })
  }, [setExpenses])

  return {expenses, add, remove}
}
