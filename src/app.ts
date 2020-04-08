import 'reflect-metadata'
import express from 'express'
import { buildSchemaSync } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'

import ProgramResolver from './graphql/schemas/program'

const port = 3001
const app = express()
export const apiUrl = 'https://dev.odkmedia.io/odc/api/v1'

const graphqlSchema = buildSchemaSync({
  resolvers: [ProgramResolver],
})

const apolloServer = new ApolloServer({
  schema: graphqlSchema,
})

app.get('/wow', (req, res) => {
  res.send('wow!')
})

apolloServer.applyMiddleware({
  app,
  path: '/graphql',
})

app.listen(port, () => {
  console.log(`App is running on port: ${port}`)
})
