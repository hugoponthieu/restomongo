import { MongoClient } from 'mongodb'

const mongoClient = new MongoClient('mongodb://localhost:27107')
export const mongoInstance = await mongoClient.connect()
