import { useQuery } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
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
  if (error) return <span>Error: {error.message}</span>

  return (
    <div className='flex flex-col gap-2 mx-6'>
      <Link to='/projects'>
        <button className='bg-cyan-600 px-3 py-2 rounded-lg'>Atrás</button>
      </Link>
      <div
        className='
          bg-zinc-900
          py-6 px-8
          rounded-lg
          flex flex-col
          items-center
          justify-between
          gap-2
          w-full
          '>
        <h1 className='text-2xl'>{data?.project.name}</h1>
        <p className=' max-w-[20rem]'><span className='text-gray-400'>Descripción: </span>{data?.project.description}</p>
      </div>
      <button className='bg-red-600 rounded-lg px-3 py-2'>Eliminar</button>
      <TaskForm />
      <TaskList tasks={data?.project.tasks ?? []} />
    </div>
  )
}
