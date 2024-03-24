'use client'

import {useEffect, useState} from 'react'

import ExpenseService from '../services/expenseService.js'

// TODO: arreglar esto:

const expenseService = new ExpenseService()

export default function useExpenses() {
  const [expenses, setExpenses] = useState([])

  const listExpenses = () => {
    expenseService
      .list()
      .then(entities => {
        setExpenses(entities)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const add = expense => {
    expenseService
      .add(expense)
      .then(listExpenses)
      .catch(error => {
        console.error(error)
      })
  }

  const remove = id => {
    expenseService
      .remove(id)
      .then(listExpenses)
      .catch(error => {
        console.error(error)
      })
  }

  const update = expense => {
    expenseService
      .update(expense)
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
