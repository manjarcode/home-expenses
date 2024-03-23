import Factory from 'dynamodb-adapter'
import process from "process"

export default class DynamoDbAdapterFactory {
  static CONFIG = {
    accessKeyId: process.env.DB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
    region: process.env.DB_REGION
  }

  static instance(tableName, partitionKey, sortKey) {
    const client = Factory.create(
      tableName, 
      partitionKey, 
      sortKey, 
      DynamoDbAdapterFactory.CONFIG
    )
    
    return client
  }
}
