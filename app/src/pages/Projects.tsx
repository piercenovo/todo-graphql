import { ProjectForm } from '../components/ProjectForm'
import { ProjectList } from '../components/ProjectList'

export function Projects (): JSX.Element {
  return (
    <div>
      <ProjectForm />
      <ProjectList />
    </div>
  )
}
