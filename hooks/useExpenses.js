import {useEffect, useState} from 'react'

import {useCases} from 'home-expenses-domain'

const {
  listExpensesUseCase,
  addExpenseUseCase,
  removeExpenseUseCase,
  updateExpenseUseCase
} = useCases

export default function useExpenses() {
  const [expenses, setExpenses] = useState([])

  const listExpenses = () => {
    listExpensesUseCase.execute().then(entities => {
      setExpenses(entities)
    })
  }

  const add = expense => {
    addExpenseUseCase
      .execute(expense)
      .then(listExpenses)
      .catch(error => {
        console.error(error)
      })
  }

  const remove = id => {
    removeExpenseUseCase
      .execute(id)
      .then(listExpenses)
      .catch(error => {
        console.error(error)
      })
  }

  const update = expense => {
    updateExpenseUseCase
      .execute(expense)
      .then(listExpenses)
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    listExpenses()
  }, [])

  return {expenses, add, remove, update}
}
