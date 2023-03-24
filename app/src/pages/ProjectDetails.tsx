import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { TaskForm } from '../components/Tasks/TaskForm'
import { TaskList } from '../components/Tasks/TaskList'
import { GET_PROJECT } from '../graphql/projects'
import { type GetProject } from '../types'

export function ProjectDetails (): JSX.Element {
  const params = useParams()
  const { data, loading, error } = useQuery<GetProject>(GET_PROJECT, {
    variables: {
      id: params.id
    },
    skip: !params.id
  })

  if (loading) return <span>Cargando...</span>
  if (error) return <span>Error</span>

  return (
    <div>
      <h1>{data?.project.name}</h1>
      <p>{data?.project.description}</p>
      <button>Eliminar</button>
      <TaskForm />
      <TaskList tasks={data?.project.tasks ?? []} />
    </div>
  )
}
