import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

export async function startApolloServer (){
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await server.start()

  app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server))

  await new Promise<void>(resolve => httpServer.listen({
    port: 4000
  }, resolve))

  console.log(`🚀 Server ready at http://localhost:4000/`);
}
