import { Link } from 'react-router-dom'

const About = () => {
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
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      <p className="text-2xl mt-4">Name: Arisa Tani</p>
      <p className="text-2xl mt-4">Made in: USA, Japan, Germany</p>
      <p className="text-2xl mt-4">Age: 18</p>
      <p className="text-2xl mt-4">Currently attending: Hiroo Gakuen Senior High School</p>
      <p className="text-2xl mt-4">Headed to: Lucy Cavendish College @University of Cambridge from September 2026!</p>
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
export default About