import ExpenseEntity from '../entities/ExpensesEntity.js'
import { buildExpense } from '../entities/factory.js'

const RESOURCE = '/api/expenses'

export default class ExpenseRepository {
  async list (): Promise<ExpenseEntity> {
    return await fetch(RESOURCE)
      .then(async response => await response.json())
      .then(response => {
        const entities = response.map(data => {
          const { id, name, ammount, paid, from, to } = data
          return buildExpense(id, name, ammount, paid, from, to)
        })
        return entities
      })
  }

  async add (expense: ExpenseEntity): Promise<void> {
    await fetch(RESOURCE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense.toJSON())
    })
  }
}
