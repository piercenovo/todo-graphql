import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../graphql/projects'
import { type GetProjects } from '../types'
import { ProjectCard } from './ProjectCard'

export function ProjectList (): JSX.Element {
  const { data, loading, error } = useQuery<GetProjects>(GET_PROJECTS)

  if (loading) return <span>Cargando...</span>
  if (error) return <span>Error</span>

  return (
    <div>
      {
        data?.projects.map(project => (
          <ProjectCard key={project._id} {...project} />
        ))
      }
    </div>
  )
}
