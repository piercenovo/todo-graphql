import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import http from 'http'
import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'
import { PORT } from './config/general.config'

export async function startApolloServer (): Promise<void> {
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()

  app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server))

  await new Promise<void>(resolve => httpServer.listen({
    port: PORT
  }, resolve))

  console.log(`🚀 Server running on port: ${PORT}`)
}
