import {useEffect, useState} from 'react'

import {useCases} from 'home-expenses-domain'

const {listExpensesUseCase} = useCases

export default function useExpenses() {
  const [expenses, setExpenses] = useState([])

  const add = expense => {
    setExpenses([...expenses, expense])
  }

  const remove = () => {}

  useEffect(() => {
    listExpensesUseCase.execute().then(entities => {
      setExpenses(entities)
    })
  }, [setExpenses])

  return {expenses, add, remove}
}
