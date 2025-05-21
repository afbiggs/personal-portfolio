import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gray-50 dark:bg-dark-300 transition-colors duration-300">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-dark-200 dark:via-dark-100 dark:to-dark-300 transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-300/10 via-transparent to-transparent dark:from-accent-300/10 transition-colors duration-300"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-300/20 dark:from-primary-400/10 dark:to-accent-300/10 blur-3xl transition-colors duration-300"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="flex flex-col space-y-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-7xl font-extrabold bg-gradient-to-r from-primary-400 via-accent-200 to-primary-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Your Name
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-300 text-white font-semibold hover:from-primary-600 hover:to-accent-400 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg border-2 border-primary-400 text-primary-400 font-semibold hover:bg-primary-400/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
          </motion.div>
          <motion.div 
            className="flex space-x-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-1"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-1"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-1"
            >
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 