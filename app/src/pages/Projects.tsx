import { ProjectForm } from '../components/Projects/ProjectForm'
import { ProjectList } from '../components/Projects/ProjectList'

export function Projects (): JSX.Element {
  return (
    <div className='bg-zinc-900 rounded-lg shadow-lg p-10 h-4/5 mx-6 w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl flex flex-col justify-center'>
      <h1 className='text-2xl font-bold pb-2 mb-4'>Administrador de proyectos</h1>
      <div className='flex flex-col md:flex-row justify-between gap-x-1 w-full'>
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  )
}
