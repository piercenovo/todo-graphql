import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProjectDetails } from './pages/ProjectDetails'
import { Projects } from './pages/Projects'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <div className='container m-auto h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Navigate to="/projects" />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
