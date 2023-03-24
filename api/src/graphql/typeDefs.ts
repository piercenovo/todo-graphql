import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    hello: String
    projects: [Project]
    project(_id: ID): Project
    tasks: [Task]
    task(_id: ID): Task
  }

  type Mutation {
    createProject(name: String, description: String): Project
    deletedProject(_id: ID!): Project
    updateProject(_id: ID!, name: String!, description: String): Project
    createTask(title: String, projectId: String): Task
    deletedTask(_id: ID!): Task
    updateTask(_id: ID!, title: String!, projectId: ID!): Task
  }  

  type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
    tasks: [Task]
  }

  type Task {
    _id: ID,
    title: String
    project: Project
    createdAt: String
    updatedAt: String
  }
`
