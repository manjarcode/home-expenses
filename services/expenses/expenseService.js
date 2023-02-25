import dynamoDbClient from '../dynamoDbClient.js'
const TABLE_NAME = 'expenses'

export class ExpenseService {
  list() {
    const params = {
      TableName: TABLE_NAME
    }

    const promise = new Promise((resolve, reject) => {
      dynamoDbClient.scan(params, function (error, data) {
        if (error) {
          reject(error)
        }

        resolve(data.Items)
      })
    })

    return promise
  }

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
      dynamoDbClient.put(params, function (error, data) {
        if (error) {
          reject(error)
        }
        resolve(data.Items)
      })
    })

    return promise
  }

  async delete({id}) {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id
      }
    }

    const promise = new Promise((resolve, reject) => {
      dynamoDbClient.delete(params, function (error, data) {
        if (error) {
          reject(error)
        }
        resolve(data.Items)
      })
    })

    return promise
  }
}

export default ExpenseService
