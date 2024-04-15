import mongoose from 'mongoose';
import { MongoClient } from 'mongodb'

const mongoClient = new MongoClient('mongodb://127.0.0.1:30000')
const mongoInstance = await mongoClient.connect()
export const dbResto = mongoInstance.db('restaurants')

export const mongooseInstance = await mongoose.connect('mongodb://127.0.0.1:30000/restaurants')
