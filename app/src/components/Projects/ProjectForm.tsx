import { useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PROJECT } from '../../graphql/projects'

const initialState = {
  name: '',
  description: ''
}

export function ProjectForm (): JSX.Element {
  const [project, setProject] = useState(initialState)
  const titleInput = useRef<HTMLInputElement>(null)

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: ['getProjects']
  })

  const handleChange = (event: any): void => {
    setProject({
      ...project,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    createProject({
      variables: {
        name: project.name,
        description: project.description
      }
    })
    setProject(initialState)
    titleInput.current!.focus()
  }

  return (
    <form
     className='w-full md:w-2/4'
     onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      <input
      type="text"
      name="name"
      placeholder="Escribe un título"
      onChange={handleChange}
      value={project.name}
      ref={titleInput}
      className='rounded-lg shadow-md p-4 mb-3 w-full'
      />
      <textarea
      name="description"
      rows={3}
      placeholder="Escribe una descripción"
      onChange={handleChange}
      value={project.description}
      className='rounded-lg shadow-md p-4 block w-full mb-3'
      />
      <button
        className='bg-teal-600 px-4 py-1 rounded-lg text-lg mb-3 disabled:bg-zinc-400'
        disabled={!project.name || !project.description || loading}>Guardar</button>
    </form>
  )
}
