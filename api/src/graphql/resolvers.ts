import { type Project as ProjectType, type Task as TaskType } from 'types'

import Project from '../models/project.model'
import Task from '../models/task.model'

export const resolvers = {
  Query: {
    hello: () => 'Hello world',
    projects: async () => await Project.find(),
    tasks: async () => await Task.find()
  },
  Mutation: {
    createProject: async (_: any, { name, description }: ProjectType) => {
      const project = new Project({
        name,
        description
      })
      const savedProject = await project.save()
      return savedProject
    },
    createTask: async (_: any, { title, projectId }: TaskType) => {
      const projectFound = await Project.findById(projectId)
      if (!projectFound) throw new Error('Project not found')

      const task = new Task({
        title,
        projectId
      })
      const savedTask = await task.save()
      return savedTask
    }
  }
}
