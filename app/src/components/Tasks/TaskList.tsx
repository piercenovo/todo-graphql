import { type GetTasks as Props } from '../../types'
import TaskCard from './TaskCard'

export const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div className='mt-3'>
      {tasks.map(task => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  )
}
