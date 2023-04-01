import dynamoDbClient from './dynamoDbClient.js'

export default class DbAdapter {
  private readonly tableName: string
  private readonly client: AWS.DynamoDB.DocumentClient

  constructor (tableName) {
    this.client = dynamoDbClient
    this.tableName = tableName
  }

  async add (item: any): Promise<void> {
    const params = {
      Item: {
        ...item
      },
      TableName: this.tableName
    }

    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      dynamoDbClient.put(params, function (error: Error) {
        error === null ? resolve() : reject(error)
      })
    })

    return await promise
  }

  async list<T>(mapper: Function): Promise<T[]> {
    const params = {
      TableName: this.tableName
    }

    const promise = new Promise<T[]>((resolve: Function, reject: Function) => {
      dynamoDbClient.scan(params, function (error, data: any) {
        if (error !== null) {
          reject(error)
        }

        const guestsEntities = data.Items.map(mapper)

        resolve(guestsEntities)
      })
    })

    return await promise
  }

  async delete (id: string): Promise<void> {
    const params = {
      TableName: this.tableName,
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
