import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Your Name</div>
          <div className="flex gap-4">
            <ScrollLink to="about" smooth={true} duration={500}>
              <button className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors">
                About
              </button>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500}>
              <button className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors">
                Skills
              </button>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>
              <button className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors">
                Projects
              </button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <button className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors">
                Contact
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 