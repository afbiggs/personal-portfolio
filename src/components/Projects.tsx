import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Tennis Ball Machine",
    description: "A self-built, portable tennis ball machine designed to deliver customizable shots with adjustable speed, spin, and feeding rate. Combines mechanical design, electronics, and programming for an affordable alternative to commercial machines.",
    image: "/images/tennis-ball-machine.jpg", // Replace with a real image if available
    technologies: ["C++", "Arduino", "Electronics", "Mechanical Design"],
    github: "https://github.com/afbiggs/Tennis-Ball-Machine",
    live: null
  },
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.com"
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with real-time inventory management",
    image: "https://via.placeholder.com/600x400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two.com"
  }
]

const projectColors = ['#4F46E5', '#7C3AED', '#EC4899'];

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen overflow-hidden">
      {/* Removed local background */}
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                viewport={{ once: true }}
                style={{
                  borderColor: projectColors[index % projectColors.length],
                  boxShadow: `0 0 24px 2px ${projectColors[index % projectColors.length]}55, 0 0 0 2px ${projectColors[index % projectColors.length]}`
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 48px 6px ${projectColors[index % projectColors.length]}, 0 0 0 3px ${projectColors[index % projectColors.length]}`,
                  zIndex: 10,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                className="bg-[#1E1B4B]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform border-2"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-[#CBD5E1] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-[#4F46E5]/20 text-[#CBD5E1] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#CBD5E1] hover:text-[#4F46E5] transition-colors"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[#CBD5E1] hover:text-[#4F46E5] transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 