import { useMutation } from '@apollo/client'
import { DELETE_TASK } from '../../graphql/tasks'
import { type Task } from '../../types'

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
    <div>
     <h1>{title}</h1>
     <button
      onClick={handleClick}
     >Eliminar</button>
    </div>
  )
}

export default TaskCard
