import { type GetTasks as Props } from '../../types'
import TaskCard from './TaskCard'

export const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  )
}
