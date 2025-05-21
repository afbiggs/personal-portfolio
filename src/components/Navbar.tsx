import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full z-50 bg-dark-200/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-white">
            Your Name
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-dark-200/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-primary-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-gray-300 hover:text-primary-400 transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-300 hover:text-primary-400 transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-primary-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 