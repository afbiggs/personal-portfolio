import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'SQL', icon: FaDatabase, color: 'text-blue-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-300 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white dark:bg-dark-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <skill.icon className={`text-4xl ${skill.color} mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 