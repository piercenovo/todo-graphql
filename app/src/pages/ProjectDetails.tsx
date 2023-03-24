import { useMutation, useQuery } from '@apollo/client'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TaskForm } from '../components/Tasks/TaskForm'
import { TaskList } from '../components/Tasks/TaskList'
import { DELETE_PROJECT, GET_PROJECT, GET_PROJECTS } from '../graphql/projects'
import { type GetProject } from '../types'

export function ProjectDetails (): JSX.Element {
  const params = useParams()
  const navigate = useNavigate()

  const { data, loading, error } = useQuery<GetProject>(GET_PROJECT, {
    variables: {
      id: params.id
    },
    skip: !params.id
  })

  const [deleteProject, { loading: deleting, error: deleteError }] = useMutation(DELETE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS
      },
      'GetProjects'
    ]
  })

  const handleDelete = async (): Promise<void> => {
    const result = await deleteProject({
      variables: {
        id: params.id
      }
    })
    if (result.data.deletedProject._id) {
      navigate('/projects')
    }
  }

  if (loading) return <span>Cargando...</span>
  if (error) return <span>Error: {error.message}</span>

  return (
    <div className='flex flex-col gap-2 mx-6'>
      {deleteError && (
        <p className="bg-red-500 p-2 mb-2 text-center">{deleteError.message}</p>
      )}
      <Link to='/projects'>
        <button
          className='bg-cyan-600 px-3 py-2 rounded-lg'
          >
          Atrás
        </button>
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
      <button
        onClick={handleDelete}
        className='bg-red-600 rounded-lg px-3 py-2'
        >
          {deleting ? 'Eliminando...' : 'Eliminar'}
      </button>
      <TaskForm />
      <TaskList tasks={data?.project.tasks ?? []} />
    </div>
  )
}
