import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', !isDark ? 'dark' : 'light')
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-dark-200/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Your Name
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <div className="relative w-6 h-6">
                <FaSun className={`absolute w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <FaMoon className={`absolute w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <div className="relative w-6 h-6">
                <FaSun className={`absolute w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <FaMoon className={`absolute w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-dark-200/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
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