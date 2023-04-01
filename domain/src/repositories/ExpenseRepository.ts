import Expense from '../domain/models/Expense.js'
import { buildExpenseDeprecated } from '../domain/models/factory/expense.js'
import DbAdapter from './db/dbAdapter.js'
import dynamoDbClient from './db/dynamoDbClient.js'

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
      return buildExpenseDeprecated(id, name, ammount, paid, from, to)
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

    const params = {
      TableName: TABLE_NAME,
      Key: { id },
      UpdateExpression:
        'set #name = :name, ammount = :ammount, paid = :paid, #from = :from, #to = :to',
      ExpressionAttributeNames: {
        '#name': 'name',
        '#from': 'from',
        '#to': 'to'
      },
      ExpressionAttributeValues: {
        ':name': name,
        ':ammount': ammount,
        ':paid': paid,
        ':from': period.from.getTime(),
        ':to': period.to.getTime()
      }
    }

    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      dynamoDbClient.update(params, function (error) {
        error === null ? resolve() : reject(error)
      })
    })

    return await promise
  }
}
