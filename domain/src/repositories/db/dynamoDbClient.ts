import process from 'process'

import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.DB_ACCESS_KEY_ID,
  secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
  region: 'us-east-1'
})

const dynamoDbClient = new AWS.DynamoDB.DocumentClient({ apiVersion: 'latest' })

export default dynamoDbClient
