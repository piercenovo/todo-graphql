import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { CREATE_TASK } from '../../graphql/tasks'

export function TaskForm (): JSX.Element {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ['getProject']
  })
  const params = useParams()

  const handleSubmit = async (event: any): Promise<void> => {
    event.preventDefault()
    await createTask({
      variables: {
        title: event.target.title.value,
        projectId: params.id
      }
    })
    event.target.reset()
    event.target.title.focus()
  }

  return (
    <form onSubmit={handleSubmit} className='mt-2'>
      <input
        className='w-full p-2 rounded-lg mb-2'
        placeholder='Escribe una tarea'
        type="text" name="title" />
      <button className='bg-teal-600 w-full p-2 rounded-lg'>Agregar</button>
    </form>
  )
}
