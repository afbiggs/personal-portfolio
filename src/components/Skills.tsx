import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'

const SkillCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
    <Icon className="w-10 h-10 text-primary-500" />
    <h3 className="text-lg font-bold mt-4">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
)

const Skills = () => {
  const skills = [
    {
      icon: FaReact,
      title: "Frontend Development",
      description: "React, Next.js, HTML5, CSS3, Responsive Design"
    },
    {
      icon: FaNodeJs,
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs, GraphQL"
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      description: "Type-safe development, interfaces, generics"
    },
    {
      icon: SiJavascript,
      title: "JavaScript",
      description: "ES6+, Modern JavaScript features, DOM manipulation"
    },
    {
      icon: FaDatabase,
      title: "Database",
      description: "SQL, NoSQL, Database design and optimization"
    },
    {
      icon: FaGitAlt,
      title: "Version Control",
      description: "Git, GitHub, GitLab, CI/CD"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-12">
          <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 