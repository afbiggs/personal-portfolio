import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-50 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-6 items-start">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Hi, I'm Your Name
          </h1>
          <p className="text-xl text-gray-600">
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="btn btn-outline"
            >
              View My Work
            </a>
          </div>
          <div className="flex space-x-4 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center space-x-2"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center space-x-2"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center space-x-2"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 