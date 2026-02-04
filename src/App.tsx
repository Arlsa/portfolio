import './App.css'
import {Button} from './main.tsx'

function App() {
  return (
    <body>
      
    <header>
      <a href='#'>
        <span className="text-3xl font-bold">Arisa Tani</span>
      </a>

      <nav>
        <a href='#home'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#experiences'>Experiences</a>
      </nav>
    </header>

    <main>
      <img src="src/assets/profile.png" alt="Profile Picture" className="w-48 h-48 rounded-full mb-4" />
      <h1 className="text-5xl mt-8 font-bold">Hi, I'm Arisa! I am a...</h1>
      <p className="text-3xl mt-4">High School Student</p>
      <p className="text-3xl mt-4">Molecular Biologist</p>
      <p className="text-3xl mt-4 mb-8">Game Developer</p>
      <Button url={''} text={'Learn more!'} />
    </main>

    <div className="bottom-bar">
      <span className="text-3xl font-bold">My Social Media</span>
      <a href="https://www.linkedin.com/in/arisa-tani-a85473337/">
        <img src="src/assets/linkedin.svg" alt="LinkedIn" className="w-12 h-12 mt-2" />
     </a>
      <a href="https://www.instagram.com/arisa_tani/">
        <img src="src/assets/instagram.svg" alt="Instagram" className="w-12 h-12 mt-2" />
     </a>
    </div>

    </body>
  )
}

export default App
