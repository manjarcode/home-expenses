import {ENTITIES} from '../config.js'
import dynamoDbClient from '../dynamoDbClient.js'

export default class GuestRepository {
  async list() {
    const params = {
      ExpressionAttributeValues: {
        ':entity': 'guest'
      },
      FilterExpression: 'entity = :entity',
      TableName: 'home-expenses'
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
      TableName: 'home-expenses'
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
}
