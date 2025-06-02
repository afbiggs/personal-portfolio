import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const projects = [
  {
    title: "Tennis Ball Machine",
    description: "A self-built, portable tennis ball machine designed to deliver customizable shots with adjustable speed, spin, and feeding rate. Combines mechanical design, electronics, and programming for an affordable alternative to commercial machines.",
    image: "/images/tennis-ball-machine.gif",
    technologies: ["C++", "Arduino", "Electronics", "Mechanical Design"],
    github: "https://github.com/afbiggs/Tennis-Ball-Machine",
    live: null
  },
  {
    title: "Gauer Metal Machine Retrofit",
    description: "Designed and developed a modern touch screen control interface for an outdated non-functioning metal flattening & shearing machine, enabling seamless operation and integration with legacy hardware. Built the front-end UI using React/JavaScript hosted locally on a Raspberry Pi, developed the backend server with Node.js, and implemented control software in C++ running on an ESP32 to process user inputs and control signals. Established real-time communication through serial connections and WebSockets, successfully modernizing the machine's operation while maintaining compatibility with existing hardware.",
    image: "/images/control-system.jpg",
    technologies: ["React", "Node.js", "C++", "ESP32", "Raspberry Pi", "WebSockets", "Serial Communication", "Linux"],
    github: undefined,
    live: undefined
  },
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.com"
  },
  
]

const projectColors = ['#4F46E5', '#7C3AED', '#EC4899'];

const CARD_SIZE = 660; // px, much larger square
const IMAGE_SIZE = 280; // px, larger image area
const CARD_GAP = 32; // px
const VISIBLE_SIDE_CARDS = 2;

const Projects = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setModalImage(null);
  }, []);

  useEffect(() => {
    if (modalImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [modalImage, handleKeyDown]);

  return (
    <section id="projects" className="relative min-h-screen overflow-hidden">
      {/* Modal for full image */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Full Project Preview"
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-[#7C3AED]"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div
            className="relative flex items-center justify-center"
            style={{ height: CARD_SIZE + 40 }} // add a little extra for buttons
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 z-10 p-2 rounded-full bg-[#1E1B4B]/80 text-white hover:bg-[#4F46E5] transition-colors"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 z-10 p-2 rounded-full bg-[#1E1B4B]/80 text-white hover:bg-[#4F46E5] transition-colors"
            >
              <FaChevronRight size={24} />
            </button>
            {/* Carousel Wrapper */}
            <div
              className="overflow-x-hidden w-full flex items-center justify-center"
              style={{ maxWidth: CARD_SIZE + 2 * (CARD_GAP + CARD_SIZE * VISIBLE_SIDE_CARDS) }}
            >
              <motion.div
                className="flex items-center"
                style={{
                  gap: `${CARD_GAP}px`,
                  transform: `translateX(calc(${(CARD_SIZE + CARD_GAP) * -currentIndex}px + 50% - ${CARD_SIZE / 2}px))`,
                  transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                {projects.map((project, index) => {
                  let offset = index - currentIndex;
                  if (offset > projects.length / 2) offset -= projects.length;
                  if (offset < -projects.length / 2) offset += projects.length;
                  if (Math.abs(offset) > VISIBLE_SIDE_CARDS) return null;
                  let scale = 1, opacity = 1;
                  if (offset === 0) {
                    scale = 1;
                    opacity = 1;
                  } else if (Math.abs(offset) === 1) {
                    scale = 0.9;
                    opacity = 0.7;
                  } else if (Math.abs(offset) === 2) {
                    scale = 0.8;
                    opacity = 0.4;
                  }
                  return (
                    <motion.div
                      key={project.title}
                      style={{
                        width: CARD_SIZE,
                        height: CARD_SIZE,
                        flexShrink: 0,
                        borderColor: projectColors[index % projectColors.length],
                        boxShadow: `0 0 24px 2px ${projectColors[index % projectColors.length]}55, 0 0 0 2px ${projectColors[index % projectColors.length]}`,
                        scale,
                        opacity,
                        zIndex: 10 - Math.abs(offset),
                        transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)'
                      }}
                      className="bg-[#1E1B4B]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 border-2 flex flex-col"
                    >
                      <div className="relative w-full flex items-center justify-center bg-black"
                        style={{ height: IMAGE_SIZE, minHeight: IMAGE_SIZE, maxHeight: IMAGE_SIZE }}
                        onClick={() => project.title === 'Tennis Ball Machine' ? setModalImage(project.image) : undefined}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-contain"
                          style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                        />
                        {project.title === 'Tennis Ball Machine' && (
                          <span className="absolute bottom-2 right-2 text-xs text-[#CBD5E1] bg-[#18192A]/80 px-2 py-1 rounded-md border border-[#7C3AED]">Click to enlarge</span>
                        )}
                      </div>
                      <div className="flex-1 p-6 overflow-y-auto min-h-0">
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
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-[#CBD5E1] hover:text-[#4F46E5] transition-colors"
                            >
                              <FaGithub />
                              <span>Code</span>
                            </a>
                          )}
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
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 