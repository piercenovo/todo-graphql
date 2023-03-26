import { useNavigate } from 'react-router-dom'
import { type Project as Props } from '../../types'

export const ProjectCard: React.FC<Props> = ({ _id, name, description }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => { navigate(`/proyecto/${_id}`) }}
      className='
        bg-zinc-800
        w-full
        rounded-lg
        shadow-sm
        shadow-black
        p-4 mb-2
        hover:bg-zinc-700
        hover:cursor-pointer
      '
    >
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
