import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* Components */
export {default as Button} from './Components/button.tsx'
export {default as ProjectBox} from './Components/projectbox.tsx'

/* Pages */
export {default as Home} from './Pages/home.tsx'
export {default as About} from './Pages/about.tsx'
export {default as Projects} from './Pages/projects.tsx'
export {default as Experiences} from './Pages/experiences.tsx'