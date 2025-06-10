import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type Project = {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  technologies: string[];
  github?: string;
  live?: string | null;
}

const projects: Project[] = [
  {
    title: "Tennis Ball Machine",
    description: "A self-built, portable tennis ball machine designed to deliver customizable shots with adjustable speed, spin, and feeding rate. Combines mechanical design, electronics, and programming for an affordable alternative to commercial machines.",
    image: "/images/tennis-ball-machine.gif",
    technologies: ["C++", "Arduino", "Electronics", "Mechanical Design", "Embedded Systems Development", ],
    github: "https://github.com/afbiggs/Tennis-Ball-Machine",
    live: null
  },
  {
    title: "Gauer Metal Machine Retrofit",
    description: "Designed and developed a modern touch screen control interface for an outdated non-functioning metal flattening & shearing machine, enabling seamless operation and integration with legacy hardware. Built the front-end UI using React/JavaScript hosted locally on a Raspberry Pi, developed the backend server with Node.js, and implemented control software in C++ running on an ESP32 to process user inputs and control signals. Established real-time communication through serial connections and WebSockets, successfully modernizing the machine's operation while maintaining compatibility with existing hardware.",
    images: [
      "/images/gauer-testing.jpeg",
      "/images/gauerUI.jpeg",
      "/images/controlbox-electronics.jpeg",
      "/images/rear.jpeg",
      "/images/gauer-machine.jpeg",
    ],
    technologies: ["React", "Node.js", "C++", "ESP32", "Raspberry Pi", "UI/UX Design", "WebSockets", "Serial Communication", "Tailscale VPN", "Linux", "System Administration", "Electrical Engineering", "Embedded Systems Development"],
    github: undefined,
    live: undefined
  },
  {
    title: "Readme Generator",
    description: "A professional ReadME generator that allows users to answer prompted questions and receive an auto-generated ReadME file. Built with Node.js, this tool streamlines documentation creation for developers, ensuring consistent and comprehensive project documentation.",
    image: "/images/coming-soon-neon-lights.jpg",
    technologies: ["JavaScript", "Node.js", "Inquirer.js", "File System"],
    github: "https://github.com/afbiggs/Readme-Generator",
    live: null
  },
  {
    title: "Tattoo Artist Portfolio & Booking (Coming Soon)",
    description: "A custom website for a professional tattoo artist, featuring a modern portfolio gallery, integrated scheduling/booking system, and client management tools. Built with a focus on user experience, mobile responsiveness, and seamless appointment handling. Planned tech stack includes React, Node.js, and a cloud database.",
    image: "/images/coming-soon-neon-lights.jpg",
    technologies: ["React", "Node.js", "Booking System", "Responsive Design", "Cloud Database"],
    github: undefined,
    live: undefined
  }
]

const projectColors = ['#4F46E5', '#7C3AED', '#EC4899'];

const CARD_SIZE = 600; // px, wider cards for better readability
const IMAGE_SIZE = 280; // px, larger image area
const CARD_GAP = 32; // px
const VISIBLE_SIDE_CARDS = 2;

const gauerDescriptions = [
  'Initial testing of the control system and UI. The UI & server are hosted locally on a Raspberry Pi and being rendered in a browser window since changes will need to be made. This allows for easy navigation of different system settings within the Linux raspberry pi OS. The server communicates with an ESP32 through serial & WebSockets for the backend control logic. ',
  'Here is the main UI for the Gauer Machine which will auto load on boot through a systemd service script. The UI runs full time in kiosk mode. I set up SSH to allow for remote access to the machine through a secure VPN so I can make changes and updates remotely if needed. ',
  'Shown here are the internal electronics of the control box. The Raspberry Pi, which is absent from this photo, sits in the top left corner and the ESP32 sits directly below it and connects to relays and eventually to the corresponding components on the Gauer itself. All of the electronics and comms are electrically & optically isolated to reduce noise and interference.',
  'This is is the rear of the custom control box which sits on a custom stand. Whips are connected from the control box to the Gauer itself.',
  'Front view of the Gauer Machine which was originally built in the late 60s. On the far left material is shown being fed through the machine. The cream colored box in the was the original control box which is where we tapped into the existing wiring to connect the new control system.',
  'Filler description for Gauer photo 6.'
];

const gauerDescriptionPositions = [
  'bottom', // photo 1
  'left',   // photo 2
  'right',  // photo 3
  'bottom', // photo 4
  'left',   // photo 5
  'right',  // photo 6
];

const Projects = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalGauerIndex, setModalGauerIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gauerIndex, setGauerIndex] = useState(0);
  const [gauerPaused, setGauerPaused] = useState(false);
  const gauerImages = projects[1].images ?? [];

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

  // Auto-cycle Gauer images
  useEffect(() => {
    if (gauerPaused || gauerImages.length === 0) return;
    const interval = setInterval(() => {
      setGauerIndex((prev) => (prev + 1) % gauerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gauerImages.length, gauerPaused]);

  return (
    <section id="projects" className="relative min-h-[95vh] overflow-hidden scroll-mt-[10vh] flex flex-col items-center justify-center mb-32">
      {/* Modal for full image */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => { setModalImage(null); setModalGauerIndex(null); }}
        >
          {modalGauerIndex !== null ? (
            gauerDescriptionPositions[modalGauerIndex] === 'bottom' ? (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-row items-center justify-center w-full">
                  <button
                    className="p-2 rounded-full bg-[#1E1B4B]/80 text-white hover:bg-[#4F46E5] z-50 mr-4"
                    onClick={e => {
                      e.stopPropagation();
                      setModalGauerIndex((prev) => prev === 0 ? gauerImages.length - 1 : (prev! - 1));
                      setModalImage(gauerImages[modalGauerIndex === 0 ? gauerImages.length - 1 : modalGauerIndex! - 1]);
                    }}
                  >
                    <FaChevronLeft size={32} />
                  </button>
                  <img
                    src={modalImage}
                    alt="Full Project Preview"
                    className="max-h-[70vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-[#7C3AED]"
                    onClick={e => e.stopPropagation()}
                  />
                  <button
                    className="p-2 rounded-full bg-[#1E1B4B]/80 text-white hover:bg-[#4F46E5] z-50 ml-4"
                    onClick={e => {
                      e.stopPropagation();
                      setModalGauerIndex((prev) => prev === gauerImages.length - 1 ? 0 : (prev! + 1));
                      setModalImage(gauerImages[modalGauerIndex === gauerImages.length - 1 ? 0 : modalGauerIndex! + 1]);
                    }}
                  >
                    <FaChevronRight size={32} />
                  </button>
                </div>
                <div className="w-full max-w-2xl bg-[#18192A]/90 text-[#CBD5E1] rounded-lg p-4 text-center mt-4 border border-[#4F46E5] shadow-lg self-center">
                  {gauerDescriptions[modalGauerIndex]}
                </div>
              </div>
            ) : (
              <div className="relative flex flex-row items-center justify-center w-full h-full">
                {/* Absolutely positioned left description box */}
                {gauerDescriptionPositions[modalGauerIndex] === 'left' && (
                  <div className="absolute left-24 top-3/2 -translate-y-1/2 w-64 h-64 bg-[#18192A]/90 text-[#CBD5E1] rounded-lg p-4 text-center border border-[#4F46E5] shadow-lg flex items-center justify-center">
                    {gauerDescriptions[modalGauerIndex]}
                  </div>
                )}
                {/* Absolutely positioned right description box */}
                {gauerDescriptionPositions[modalGauerIndex] === 'right' && (
                  <div className="absolute right-24 top-1/2 -translate-y-1/2 w-72 h-74 bg-[#18192A]/90 text-[#CBD5E1] rounded-lg p-4 text-center border border-[#4F46E5] shadow-lg flex items-center justify-center">
                    {gauerDescriptions[modalGauerIndex]}
                  </div>
                )}
                {/* Absolutely positioned second text box for second photo */}
                {modalGauerIndex === 1 && (
                  <div className="absolute bottom-48 right-24 w-64 h-80 bg-[#4F46E5]/90 text-[#CBD5E1] rounded-lg p-3 text-sm border border-[#4F46E5] shadow-lg z-50 flex items-center justify-center">
                    The UI and navigation is intentionally designed to be simple and easy to use. The user initially puts in the desired cut length & quantity. After pressing start, the machine will feed the material where an optical encoder measures the amount of material and then stops when the desired length is reached and then the cut is made. 
                  </div>
                )}
                {/* Centered image and arrows */}
                <div className="flex flex-row items-center justify-center w-full">
                  <button
                    className="p-2 rounded-full bg-[#1E1B4B]/80 text-white hover:bg-[#4F46E5] z-50 mr-4"
                    onClick={e => {
                      e.stopPropagation();
                      setModalGauerIndex((prev) => prev === 0 ? gauerImages.length - 1 : (prev! - 1));
                      setModalImage(gauerImages[modalGauerIndex === 0 ? gauerImages.length - 1 : modalGauerIndex! - 1]);
                    }}
                  >
                    <FaChevronLeft size={32} />
                  </button>
                  <img
                    src={modalImage}
                    alt="Full Project Preview"
                    className="max-h-[70vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-[#7C3AED]"
                    onClick={e => e.stopPropagation()}
                  />
                  <button
                    className="p-2 rounded-full bg-[#1E1B4B]/80 text-white hover:bg-[#4F46E5] z-50 ml-4"
                    onClick={e => {
                      e.stopPropagation();
                      setModalGauerIndex((prev) => prev === gauerImages.length - 1 ? 0 : (prev! + 1));
                      setModalImage(gauerImages[modalGauerIndex === gauerImages.length - 1 ? 0 : modalGauerIndex! + 1]);
                    }}
                  >
                    <FaChevronRight size={32} />
                  </button>
                </div>
              </div>
            )
          ) : (
            <>
              <button
                className="absolute left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#1E1B4B]/80 text-white hover:bg-[#4F46E5] z-50"
                onClick={e => {
                  e.stopPropagation();
                  setModalGauerIndex((prev) => prev === 0 ? gauerImages.length - 1 : (prev! - 1));
                  setModalImage(gauerImages[modalGauerIndex === 0 ? gauerImages.length - 1 : modalGauerIndex! - 1]);
                }}
              >
                <FaChevronLeft size={32} />
              </button>
              <button
                className="absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#1E1B4B]/80 text-white hover:bg-[#4F46E5] z-50"
                onClick={e => {
                  e.stopPropagation();
                  setModalGauerIndex((prev) => prev === gauerImages.length - 1 ? 0 : (prev! + 1));
                  setModalImage(gauerImages[modalGauerIndex === gauerImages.length - 1 ? 0 : modalGauerIndex! + 1]);
                }}
              >
                <FaChevronRight size={32} />
              </button>
              <img
                src={modalImage}
                alt="Full Project Preview"
                className="max-h-[70vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-[#7C3AED] mb-4"
                onClick={e => e.stopPropagation()}
              />
            </>
          )}
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-8 xl:px-24 py-16 sm:py-20 max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl w-full mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="block relative w-fit mx-auto">
              Featured Projects
              <span className="block absolute left-0 right-0 -bottom-2 h-1 w-full rounded-full bg-[#7C8CF8]"></span>
            </span>
          </h2>
          <div
            className="relative flex items-center justify-center w-full overflow-hidden"
            style={{ minHeight: 400 }}
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
              className="flex items-center justify-center w-full"
              style={{ minWidth: 0 }}
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
                  const isTattooCard = project.title.includes('Tattoo Artist');
                  const isGauer = project.title.includes('Gauer');
                  return (
                    <motion.div
                      key={project.title}
                      style={{
                        minHeight: 400,
                        width: '100%',
                        maxWidth: 600,
                        maxHeight: '70vh',
                        flexShrink: 0,
                        borderColor: projectColors[index % projectColors.length],
                        boxShadow: `0 0 24px 2px ${projectColors[index % projectColors.length]}55, 0 0 0 2px ${projectColors[index % projectColors.length]}`,
                        scale,
                        opacity,
                        zIndex: 10 - Math.abs(offset),
                        transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)'
                      }}
                      className="bg-[#1E1B4B]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 border-2 flex flex-col w-full max-w-2xl"
                    >
                      <div
                        className={`relative w-full flex items-center justify-center bg-black${isTattooCard ? '' : ''}`}
                        style={{ height: IMAGE_SIZE, minHeight: IMAGE_SIZE, maxHeight: '40vh' }}
                        onClick={() => {
                          if (project.title === 'Tennis Ball Machine') {
                            if (typeof project.image === 'string') setModalImage(project.image);
                          } else if (isGauer) {
                            const img = gauerImages[gauerIndex];
                            if (typeof img === 'string') {
                              setModalImage(img);
                              setModalGauerIndex(gauerIndex);
                            }
                          }
                        }}
                        onMouseEnter={isGauer ? () => setGauerPaused(true) : undefined}
                        onMouseLeave={isGauer ? () => setGauerPaused(false) : undefined}
                      >
                        {isGauer ? (
                          <img
                            key={gauerImages[gauerIndex]}
                            src={gauerImages[gauerIndex]}
                            alt={project.title}
                            className="w-full h-full object-cover cursor-pointer"
                            style={{
                              width: IMAGE_SIZE,
                              height: IMAGE_SIZE,
                              objectPosition: (
                                gauerImages[gauerIndex].includes('testing')
                                  ? 'center top'
                                  : gauerImages[gauerIndex].includes('gauerUI')
                                  ? 'center top'
                                  : gauerImages[gauerIndex].includes('controlbox-electronics')
                                  ? 'left center'
                                  : gauerImages[gauerIndex].includes('rear')
                                  ? 'center top'
                                  : gauerImages[gauerIndex].includes('gauer-machine')
                                  ? 'right center'
                                  : 'center center'
                              )
                            }}
                          />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className={
                              isTattooCard
                                ? 'w-full h-full object-cover'
                                : 'object-contain'
                            }
                            style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                          />
                        )}
                        {project.title === 'Tennis Ball Machine' && (
                          <span className="absolute bottom-2 right-2 text-xs text-[#CBD5E1] bg-[#18192A]/80 px-2 py-1 rounded-md border border-[#7C3AED]">Click to enlarge</span>
                        )}
                        {isGauer && (
                          <span className="absolute bottom-2 right-2 text-xs text-[#CBD5E1] bg-[#18192A]/80 px-2 py-1 rounded-md border border-[#7C3AED]">Click to enlarge</span>
                        )}
                        {isGauer && (
                          <div className="absolute bottom-2 left-2 flex space-x-2">
                            {gauerImages.map((img, i) => (
                              <button
                                key={img}
                                onClick={e => { e.stopPropagation(); setGauerIndex(i); }}
                                className={`w-3 h-3 rounded-full border border-[#7C3AED] ${gauerIndex === i ? 'bg-[#7C3AED]' : 'bg-[#18192A]'}`}
                                aria-label={`Show image ${i + 1}`}
                              />
                            ))}
                          </div>
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