export interface Project {
  _id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
  tasks: Task[]
}

export interface Task {
  _id: string
  title: string
  projectId: string
  createdAt: string
  updatedAt: string
}

export interface GetProjects {
  projects: Project[]
}

export interface GetProject {
  project: Project
}

export interface GetTasks {
  tasks: Task[]
}

export interface GetTask {
  task: Task
}

export type ProjectID = string
export type TaskID = string
