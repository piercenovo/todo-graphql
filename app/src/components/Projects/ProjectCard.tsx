import { useNavigate } from 'react-router-dom'
import { type Project as Props } from '../../types'

export const ProjectCard: React.FC<Props> = ({ _id, name, description }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => { navigate(`/projects/${_id}`) }}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
