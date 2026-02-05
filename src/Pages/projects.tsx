import { Link } from 'react-router-dom'
import { ProjectBox } from '../main'

const Projects = () => {
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
      <h1 className="text-5xl font-bold mb-8">My Projects</h1>
      <div className="flex flex-wrap gap-4">
        <ProjectBox 
        title="Independent Research on Plant Heavy Metal Tolerance"
        description="Selected as one of 20 research proposals by high school students by a government program. Conducted fully funded research under the instruction of Prof. Suetsugu at the Graduate School of Arts and Sciences (University of Tokyo)."
        image="src/assets/molecular-biology-research.jpg"
        link="https://www.utokyo.ac.jp"></ProjectBox>

        <ProjectBox 
        title="Team Research Project on Overproduction of Nattokinase"
        description="Co-founded and co-led a Japanese high school team competing in iGEM 2024. Conducted research on the overproduction of nattokinase and genetic engineering technology of B. subtilis var. natto in Suetsugu lab at Rikkyo University. Mainly in charge of wet lab, especially measurement methods and presentation of experimental results (figure design and writing)."
        image="src/assets/molecular-biology-research.jpg"
        link="https://www.utokyo.ac.jp"></ProjectBox>

        <ProjectBox 
        title="Team Research Project on Overproduction of Nattokinase"
        description="Co-founded and co-led a Japanese high school team competing in iGEM 2024. Conducted research on the overproduction of nattokinase and genetic engineering technology of B. subtilis var. natto in Suetsugu lab at Rikkyo University. Mainly in charge of wet lab, especially measurement methods and presentation of experimental results (figure design and writing)."
        image="src/assets/molecular-biology-research.jpg"
        link="https://www.utokyo.ac.jp"></ProjectBox>

        <ProjectBox 
        title="Team Research Project on Overproduction of Nattokinase"
        description="Co-founded and co-led a Japanese high school team competing in iGEM 2024. Conducted research on the overproduction of nattokinase and genetic engineering technology of B. subtilis var. natto in Suetsugu lab at Rikkyo University. Mainly in charge of wet lab, especially measurement methods and presentation of experimental results (figure design and writing)."
        image="src/assets/molecular-biology-research.jpg"
        link="https://www.utokyo.ac.jp"></ProjectBox>
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
export default Projects