import { AzureFunction } from "@azure/functions"
import {
  ApolloServer,
  CreateHandlerOptions,
  gql
} from "apollo-server-azure-functions"

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello moon!"
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const options: CreateHandlerOptions = {}

const graphqlHandler: AzureFunction = server.createHandler(options)

exports.graphqlHandler = graphqlHandler
