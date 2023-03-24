import { useMutation } from '@apollo/client'
import { DELETE_TASK } from '../../graphql/tasks'
import { type Task } from '../../types'
import { TrashIcon } from '@heroicons/react/24/outline'

const TaskCard: React.FC<Task> = ({ title, _id }) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ['getProject']
  })

  const handleClick = (): void => {
    deleteTask({
      variables: {
        id: _id
      }
    })
  }

  return (
    <div className='bg-zinc-900 px-5 py-3 mb-2 flex justify-between gap-2 rounded-lg'>
      <h3 className='text-sm'>{title}</h3>
      <button
        className=''
        onClick={handleClick}>
          <TrashIcon className='h-5 w-5 text-gray-400' />
        </button>
    </div>
  )
}

export default TaskCard
