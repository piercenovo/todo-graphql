import { type Task } from '../../types'

const TaskCard: React.FC<Task> = ({ title }) => {
  return (
    <div>
     <h1>{title}</h1>
     <button>Eliminar</button>
    </div>
  )
}

export default TaskCard
