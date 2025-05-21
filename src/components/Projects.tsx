import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tags, github, live }: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-primary-100 text-primary-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 pt-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline flex items-center space-x-2"
        >
          <FaGithub />
          <span>Code</span>
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline flex items-center space-x-2"
        >
          <FaExternalLinkAlt />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js that helps users manage their tasks efficiently.",
      image: "https://via.placeholder.com/400x200",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com"
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with real-time inventory management and payment processing.",
      image: "https://via.placeholder.com/400x200",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2-demo.com"
    },
    {
      title: "Project 3",
      description: "A social media dashboard with analytics and real-time updates.",
      image: "https://via.placeholder.com/400x200",
      tags: ["React", "GraphQL", "Apollo", "Docker"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3-demo.com"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-12">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 