import { reservedKeywords } from './config.js'
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

  async update<T extends Entity>(item: T): Promise<void> {
    const { id } = item

    const updateExpression = this.updateExpression(item)
    const expressionAttributesNames = this.expressionAttributeNames(item)
    const expressionAttributeValues = this.expressionAttributeValues(item)

    const params = {
      TableName: this.tableName,
      Key: { id },
      UpdateExpression: updateExpression,
      ExpressionAttributeNames: expressionAttributesNames,
      ExpressionAttributeValues: expressionAttributeValues
    }

    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      dynamoDbClient.update(params, function (error) {
        error === null ? resolve() : reject(error)
      })
    })

    return await promise
  }

  private isReservedKeyword (key: string): boolean {
    return reservedKeywords.includes(key.toUpperCase())
  }

  private updateExpression<T extends Entity>(item: T): string {
    const { id, ...props } = item

    const keys = Object.keys(props)

    const queryWithExtraComma = keys.reduce((acc, key) => {
      const sharpedKey = this.isReservedKeyword(key) ? `#${key}` : key
      const dottedKey = `:${key}`

      return `${acc} ${sharpedKey} = ${dottedKey},`
    }, 'set')

    const query = queryWithExtraComma.slice(0, -1)
    return query
  }

  private expressionAttributeNames<T extends Entity>(item: T): any {
    const { id, ...props } = item

    const keys = Object.keys(props)

    const reservedKeys = keys.filter(key => this.isReservedKeyword(key))

    const result = reservedKeys.reduce((obj, key) => {
      const sharpedKey = `#${key}`

      return { ...obj, [sharpedKey]: key }
    }, {})

    return result
  }

  private expressionAttributeValues<T extends Entity>(item: T): any {
    const { id, ...props } = item

    const entries = Object.entries(props)

    const attributeValues = entries.reduce((obj, [key, value]) => {
      const dottedKey = `:${key}`

      return { ...obj, [dottedKey]: value }
    }, {})

    return attributeValues
  }
}
