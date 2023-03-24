import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProjectDetails } from './pages/ProjectDetails'
import { Projects } from './pages/Projects'

function App (): JSX.Element {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navigate to="/projects" />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:id' element={<ProjectDetails />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
