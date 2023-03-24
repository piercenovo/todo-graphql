import { useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects'

const initialState = {
  name: '',
  description: ''
}

export function ProjectForm (): JSX.Element {
  const [project, setProject] = useState(initialState)
  const titleInput = useRef<HTMLInputElement>(null)

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS
      },
      'GetProjects'
    ]
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
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      <input
      type="text"
      name="name"
      placeholder="Escribe un título"
      onChange={handleChange}
      value={project.name}
      ref={titleInput}
      />
      <textarea
      name="description"
      rows={3}
      placeholder="Escribe una descripción"
      onChange={handleChange}
      value={project.description}
      />
      <button disabled={!project.name || !project.description || loading}>Guardar</button>
    </form>
  )
}
