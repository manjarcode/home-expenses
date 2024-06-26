import 'reflect-metadata'
import { injectable} from "inversify"
import Expense from '../domain/models/Expense.js'

import DynamoDbAdapterFactory from './DbAdapterFactory.js'

const TABLE_NAME = 'expenses'

@injectable()
export default class ExpenseRepository {
  #dynamoDbAdapter: any
  constructor() {
    this.#dynamoDbAdapter = DynamoDbAdapterFactory.instance(TABLE_NAME, 'id', null)
  }

  async add (expense: Expense): Promise<void> {
    const { id, name, amount: amount, paid, period } = expense

    const promise = this.#dynamoDbAdapter.add({
      id,
      name,
      amount,
      paid,
      from: period.from.getTime(),
      to: period.to.getTime()
    })
    return await promise
  }

  async get (id: string): Promise<Expense> {
    const [fromDb] = await this.#dynamoDbAdapter.query(id)
    return Expense.fromPrimitives(fromDb)
  }

  async list (): Promise<Expense[]> {
    const fromDb = await this.#dynamoDbAdapter.scan()
    const list = fromDb.map(item => {
      return Expense.fromPrimitives(item)
    })
    return list
  }
  
  async update (expense: Expense): Promise<void> {
    const { id, name, amount, paid, period } = expense
    return await this.#dynamoDbAdapter.update({
      id,
      name,
      amount,
      paid,
      from: period.from.getTime(),
      to: period.to.getTime()
    })
  }

  async delete (id: string): Promise<void> {
    return await this.#dynamoDbAdapter.delete(id)  
  }
}
