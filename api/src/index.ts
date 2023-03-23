import { startApolloServer } from './app'
import { connectDB } from './config/database.config'

connectDB()
startApolloServer()
