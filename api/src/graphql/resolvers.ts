import { type Project as ProjectType } from 'types'
import Project from '../models/project.model'

export const resolvers = {
  Query: {
    hello: () => 'Hello world',
    projects: async () => await Project.find()
  },
  Mutation: {
    createProject: async (_: any, { name, description }: ProjectType) => {
      const project = new Project({ name, description })
      const savedProject = await project.save()
      return savedProject
    }
  }
}
