import dynamoDbClient from '../dynamoDbClient.js'
const TABLE_NAME = 'expenses'

export class ExpenseService {
  async add({id, name, ammount, paid, from, to}) {
    const params = {
      Item: {
        id,
        name,
        ammount,
        paid,
        from,
        to
      },
      TableName: TABLE_NAME
    }

    const promise = new Promise((resolve, reject) => {
      dynamoDbClient.put(params, function (error) {
        error ? reject(error) : resolve()
      })
    })

    return promise
  }

  async list() {
    const params = {
      TableName: TABLE_NAME
    }

    const promise = new Promise((resolve, reject) => {
      dynamoDbClient.scan(params, function (error, data) {
        error ? reject(error) : resolve(data.Items)
      })
    })

    return promise
  }

  async delete({id}) {
    const params = {
      TableName: TABLE_NAME,
      Key: {id}
    }

    const promise = new Promise((resolve, reject) => {
      dynamoDbClient.delete(params, function (error) {
        error ? reject(error) : resolve()
      })
    })

    return promise
  }

  async update({id, name, ammount, paid, from, to}) {
    const params = {
      TableName: TABLE_NAME,
      Key: {id},
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
        ':from': from,
        ':to': to
      }
    }

    const promise = new Promise((resolve, reject) => {
      dynamoDbClient.update(params, function (error) {
        error ? reject(error) : resolve()
      })
    })

    return promise
  }
}

export default ExpenseService
