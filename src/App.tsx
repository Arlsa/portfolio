import './App.css'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import { Home, About, Projects, Experiences } from './main'

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experiences' element={<Experiences />} />
      </Routes>
    </Router>

  )
}

export default App
