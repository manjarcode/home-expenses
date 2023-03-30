import dynamoDbClient from '../../db/dynamoDbClient.js'
import { buildGuestDeprecated } from '../entities/factory.js'
import GuestEntity from '../entities/GuestEntity.js'

const TABLE_NAME = 'guests'

export default class GuestRepository {
  async add (guest: GuestEntity): Promise<void> {
    const { id, name, period } = guest

    const params = {
      Item: {
        id,
        name,
        from: period.from.getTime(),
        to: period.to.getTime(),
        currently: period.currently
      },
      TableName: TABLE_NAME
    }

    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      dynamoDbClient.put(params, function (error, data) {
        error === null ? resolve() : reject(error)
      })
    })

    return await promise
  }

  async list (): Promise<GuestEntity[]> {
    const params = {
      TableName: TABLE_NAME
    }

    const promise = new Promise<GuestEntity[]>((resolve: Function, reject: Function) => {
      dynamoDbClient.scan(params, function (error, data: any) {
        if (error !== null) {
          reject(error)
        }

        const guestsEntities = data.Items.map(item => {
          const { id, name, from, to, currently } = item
          return buildGuestDeprecated(id, name, from, to, currently)
        })

        resolve(guestsEntities)
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
}
