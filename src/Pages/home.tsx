import {Button} from '../main.tsx'
import { Link } from 'react-router-dom'

import profile from '../assets/profile.png'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

const Home = () => {
  return (
    <>
    <header>
      <Link to='/'>
          <span className="text-3xl font-bold">Arisa Tani</span>
      </Link>

      <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/experiences'>Experiences</Link>
      </nav>
    </header>

    <main>
      <img src={profile} alt="Profile Picture" className="w-48 h-48 rounded-full mb-4" />
      <h1 className="text-5xl mt-8 font-bold">Hi, I'm Arisa! I am a...</h1>
      <p className="text-3xl mt-4">High School Student</p>
      <p className="text-3xl mt-4">Molecular Biologist</p>
      <p className="text-3xl mt-4 mb-8">Game Developer</p>
      <Button url={''} text={'Learn more!'} />
    </main>

    <div className="bottom-bar">
      <span className="text-3xl font-bold mb-4">My Social Media</span>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/arisa-tani-a85473337/">
          <img src={linkedin} alt="LinkedIn" className="w-12 h-12 mt-2 snsicon" />
        </a>
        <a href="https://www.instagram.com/arisa.2529/">
          <img src={instagram} alt="Instagram" className="w-12 h-12 mt-2 snsicon" />
        </a>
      </div>
    </div>

    </>
  )
}
export default Home