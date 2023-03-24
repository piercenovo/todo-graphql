import { type Project as Props } from '../types'

export const ProjectCard: React.FC<Props> = ({ name, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
