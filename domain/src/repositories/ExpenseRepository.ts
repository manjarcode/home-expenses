import Expense from '../domain/models/Expense.js'
import DbAdapter from './db/dbAdapter.js'

const TABLE_NAME = 'expenses'

const dbAdapter = new DbAdapter(TABLE_NAME)

export default class ExpenseRepository {
  async add (expense: Expense): Promise<void> {
    const { id, name, ammount, paid, period } = expense

    const promise = dbAdapter.add({
      id,
      name,
      ammount,
      paid,
      from: period.from.getTime(),
      to: period.to.getTime()
    })
    return await promise
  }

  async list (): Promise<Expense[]> {
    const mapper: Function = item => {
      
      const { id, name, ammount, paid, from, to } = item
      const period = { from, to }
      return Expense.fromPrimitives({id, name, ammount, paid, period})
    }
    const promise = dbAdapter.list<Expense>(mapper)

    return await promise
  }

  async delete (id: string): Promise<void> {
    const promise = dbAdapter.delete(id)

    return await promise
  }

  async update (expense: Expense): Promise<void> {
    const { id, name, ammount, paid, period } = expense
    return await dbAdapter.update({
      id,
      name,
      ammount,
      paid,
      from: period.from.getTime(),
      to: period.to.getTime()
    })
  }
}
