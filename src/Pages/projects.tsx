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
        image="src/assets/projects/tani_jspp4.pdf"
        link="https://plant-photobiology.wixsite.com/website/ニュース"></ProjectBox>

        <ProjectBox 
        title="Team Research Project on Overproduction of Nattokinase"
        description="Co-founded and co-led a Japanese high school team competing in iGEM 2024. Conducted research on the overproduction of nattokinase and genetic engineering technology of B. subtilis var. natto in Suetsugu lab at Rikkyo University. Mainly in charge of wet lab, especially measurement methods and presentation of experimental results (figure design and writing)."
        image="src/assets/projects/2024mbsj_igem.pdf"
        link="https://2024.igem.wiki/grand-tokyo/"></ProjectBox>

        <ProjectBox 
        title="Original App/Rhythm Game for Japanese traditional instrument Koto"
        description="Noticing a lack of resources for learning the Japanese traditional instrument koto, I created an original app with a virtual koto, recording features, and rhythm game, with Unity and C#. Published on App Store. Won the Best Design Award at the Tokyo Metropolitan High School Mobile App Contest 2022."
        image="src/assets/projects/Okotone.001.png"
        link="https://www.utokyo.ac.jp"></ProjectBox>

        <ProjectBox 
        title="Promo Video for Minami-Sanriku Town Tourism @Recruit Ltd. Internship"
        description="Selected as intern. Traveled to Minami-Sanriku and produced promotion video of the city (revival from the 2011 tsunami, philosophy of people and deep connection to ocean) to be used by Ministry of Foreign Affairs."
        image="src/assets/molecular-biology-research.jpg"
        link="https://www.youtube.com/watch?v=hlQwcpxj4XU"></ProjectBox>
      </div>
    </div>

    <div className="bottom-bar">
      <span className="text-3xl font-bold mb-4">My Social Media</span>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/arisa-tani-a85473337/">
          <img src="src/assets/linkedin.svg" alt="LinkedIn" className="w-12 h-12" />
        </a>
        <a href="https://www.instagram.com/arisa.2529/">
          <img src="src/assets/instagram.svg" alt="Instagram" className="w-12 h-12" />
        </a>
      </div>
    </div>
    </>
  )
}
export default Projects