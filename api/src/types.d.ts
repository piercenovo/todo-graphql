export interface Project {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface Task {
  id: string
  title: string
  projectId: string
  createdAt: string
  updatedAt: string
}
