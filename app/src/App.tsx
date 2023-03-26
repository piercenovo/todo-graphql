import { Routes, Route, HashRouter } from 'react-router-dom'
import { ProjectDetails } from './pages/ProjectDetails'
import { Projects } from './pages/Projects'

function App (): JSX.Element {
  return (
    <HashRouter>
      <div className='container m-auto h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Projects />} />
          <Route path='/proyecto/:id' element={<ProjectDetails />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
