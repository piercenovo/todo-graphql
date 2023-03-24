import { ProjectForm } from '../components/Projects/ProjectForm'
import { ProjectList } from '../components/Projects/ProjectList'

export function Projects (): JSX.Element {
  return (
    <div>
      <ProjectForm />
      <ProjectList />
    </div>
  )
}
