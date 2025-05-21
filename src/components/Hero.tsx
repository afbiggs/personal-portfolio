import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-300/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col space-y-8 items-start">
          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-primary-400 via-accent-200 to-primary-500 bg-clip-text text-transparent">
            Hi, I'm Your Name
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl">
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-300 text-white font-semibold hover:from-primary-600 hover:to-accent-400 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg border-2 border-primary-400 text-primary-400 font-semibold hover:bg-primary-400/10 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
          <div className="flex space-x-4 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 