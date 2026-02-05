import { Link } from 'react-router-dom'
import { ProjectBox } from '../main.tsx'

const Experiences = () => {
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

      <div className="m-10 drop-shadow-lg">
        <h1 className="text-5xl font-bold mb-8">My Experiences</h1>
        <div className="flex flex-wrap gap-4">
        <ProjectBox 
        title="Japanese Delegate to AFS Global STEM Acadmies @India"
        description="Completed 4 month entrepreneurship course by UPenn; Travelled in India for 1 month with full scholarship from BP alongside students from 14 countries."
        image="src/assets/experiences/AFSIndia.JPG"
        link="https://www.afs.or.jp/goabroad/global-stem-academies/"></ProjectBox>

        <ProjectBox 
        title="Japanese Delegate to the Asian Science Camp @Thailand"
        description="Travelled to Thailand on full scholarship; Discussed recent innovations with Nobel Prize laureates and student representatives from 28+ countries"
        image="src/assets/experiences/ASCThailand.JPG"
        link="https://asc2025.sut.ac.th"></ProjectBox>
      </div>
      </div>
      <div className="bottom-bar">
      <span className="text-3xl font-bold mb-4">My Social Media</span>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/arisa-tani-a85473337/">
          <img src="src/assets/linkedin.svg" alt="LinkedIn" className="w-12 h-12 mt-2" />
        </a>
        <a href="https://www.instagram.com/arisa.2529/">
          <img src="src/assets/instagram.svg" alt="Instagram" className="w-12 h-12 mt-2" />
        </a>
      </div>
    </div>
    </>
  )
}
export default Experiences