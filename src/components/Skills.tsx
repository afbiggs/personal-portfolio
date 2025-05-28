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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <skill.icon className={`text-5xl mb-4 ${skill.color}`} />
                <span className="text-[#CBD5E1] text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 