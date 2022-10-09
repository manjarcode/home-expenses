import dynamoDbClient from '../../../utils/dynamoDbClient.js'
import GuestEntityFactory from '../entities/factory.js'

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

    const items = await promise

    return items.map(item => GuestEntityFactory.guest(item))
  }
}
