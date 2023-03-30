import {ENTITIES} from '../config.js'
import dynamoDbClient from '../dynamoDbClient.js'

const TABLE_NAME = 'home-expenses'

export default class GuestService {
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
}
