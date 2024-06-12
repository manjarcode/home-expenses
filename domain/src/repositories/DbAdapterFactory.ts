import process from 'process'

import Factory from 'dynamodb-adapter'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class DynamoDbAdapterFactory {
  static CONFIG = {
    accessKeyId: process.env.DB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
    region: process.env.DB_REGION
  }

  static instance (tableName: string, partitionKey: string, sortKey: string): any {
    const client: any = Factory.create(
      tableName,
      partitionKey,
      sortKey,
      DynamoDbAdapterFactory.CONFIG
    )

    return client
  }
}
