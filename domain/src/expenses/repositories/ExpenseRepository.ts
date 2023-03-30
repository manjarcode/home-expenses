import dynamoDbClient from '../../db/dynamoDbClient.js'
import ExpenseEntity from '../entities/ExpensesEntity.js'
import { buildExpenseDeprecated } from '../entities/factory.js'

const TABLE_NAME = 'expenses'

export default class ExpenseRepository {
  async add (expense: ExpenseEntity): Promise<void> {
    const { id, name, ammount, paid, period } = expense
    const params = {
      Item: {
        id,
        name,
        ammount,
        paid,
        from: period.from.getTime(),
        to: period.to.getTime()
      },
      TableName: TABLE_NAME
    }

    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      dynamoDbClient.put(params, function (error: Error) {
        error === null ? resolve() : reject(error)
      })
    })

    return await promise
  }

  async list (): Promise<ExpenseEntity[]> {
    const params = {
      TableName: TABLE_NAME
    }

    const promise = new Promise<ExpenseEntity[]>((resolve: Function, reject: Function) => {
      dynamoDbClient.scan(params, function (error, data: any) {
        if (error !== null) { reject(error) }

        // TODO: a lo mejor se puede meter en un mapper
        const expenseEntities = data.Items.map((item: any) => {
          const { id, name, ammount, paid, from, to } = item
          return buildExpenseDeprecated(id, name, ammount, paid, from, to)
        })

        resolve(expenseEntities)
      })
    })

    return await promise
  }

  async delete (id: string): Promise<void> {
    const params = {
      TableName: TABLE_NAME,
      Key: { id }
    }

    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      dynamoDbClient.delete(params, function (error) {
        error === null ? resolve() : reject(error)
      })
    })

    return await promise
  }

  async update (expense: ExpenseEntity): Promise<void> {
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
