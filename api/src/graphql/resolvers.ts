import { type Project as ProjectType, type Task as TaskType, type ProjectID, type TaskID } from 'types'

import Project from '../models/project.model'
import Task from '../models/task.model'

export const resolvers = {
  Query: {
    hello: () => 'Hello world',
    projects: async () => await Project.find(),
    project: async (_: any, _id: ProjectID) => await Project.findById(_id),
    tasks: async () => await Task.find(),
    task: async (_: any, _id: TaskID) => await Task.findById(_id)

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
    deletedProject: async (_: any, _id: ProjectID) => {
      const deletedProject = await Project.findByIdAndDelete(_id)
      if (!deletedProject) throw new Error('Project not found')

      await Task.deleteMany({ projectId: deletedProject._id })

      return deletedProject
    },
    updateProject: async (_: any, args: ProjectType) => {
      const updatedProject = await Project.findByIdAndUpdate(args._id, args, { new: true })
      if (!updatedProject) throw new Error('Project not found')
      return updatedProject
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
    },
    deletedTask: async (_: any, _id: TaskID) => {
      const deletedTask = await Task.findByIdAndDelete(_id)
      if (!deletedTask) throw new Error('Task not found')
      return deletedTask
    },
    updateTask: async (_: any, args: TaskType) => {
      const updatedTask = await Task.findByIdAndUpdate(args._id, args, { new: true })
      if (!updatedTask) throw new Error('Project not found')
      return updatedTask
    }
  },
  Project: {
    tasks: async (parent: ProjectType) => await Task.find({ projectId: parent._id })
  },
  Task: {
    project: async (parent: TaskType) => await Project.findById(parent.projectId)
  }
}
