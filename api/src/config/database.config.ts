import mongoose from 'mongoose'
import { MONGODB_URI } from './general.config'

export const connectDB = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', false)
    const conn = await mongoose.connect(MONGODB_URI)
    console.log(`Mongodb connected: ${conn.connection.name}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
