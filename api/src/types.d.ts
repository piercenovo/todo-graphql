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

export type ProjectID = string
export type TaskID = string
