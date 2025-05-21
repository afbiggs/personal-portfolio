import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Full Stack Developer with a keen eye for creating beautiful and functional web applications. 
              With expertise in modern web technologies, I strive to build seamless user experiences that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 