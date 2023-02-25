import {ENTITIES} from '../config.js'
import dynamoDbClient from '../dynamoDbClient.js'

const TABLE_NAME = 'home-expenses'

export default class GuestService {
  async list() {
    const params = {
      ExpressionAttributeValues: {
        ':entity': 'guest'
      },
      FilterExpression: 'entity = :entity',
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

  async add({id, name, from, to, currently}) {
    const params = {
      Item: {
        entity: ENTITIES.GUEST,
        id,
        name,
        from,
        to,
        currently
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
        entity: ENTITIES.GUEST,
        id
      }
    }

    const promise = new Promise((resolve, reject) => {
      dynamoDbClient.delete(params, function (error) {
        if (error) {
          reject(error)
        }
        resolve()
      })
    })

    return promise
  }
}
