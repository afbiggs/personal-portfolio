import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from './About.module.css';

const About = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [direction, setDirection] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const sections = [
    {
      id: "about",
      title: "The Beginning",
      content: `I began my career with a B.S.B.A. in Business Administration and Management from Appalachian State University, 
      gaining several years of hands-on management experience in the service industry. Over time, I developed a strong passion 
      for technology and decided to pivot my career toward software development.`,
      next: "web",
      accent: "#4F46E5"
    },
    {
      id: "web",
      title: "Web Development",
      content: `To build a solid technical foundation, I completed a Full Stack Web Development bootcamp through the University of 
      North Carolina at Chapel Hill. There, I discovered a natural aptitude for programming and quickly became confident working 
      across front-end and back-end technologies. My business background has proven invaluable in translating complex requirements 
      into usable applications and managing workflows in collaborative settings.`,
      next: "embedded",
      accent: "#7C3AED"
    },
    {
      id: "embedded",
      title: "Embedded Systems",
      content: `Beyond formal training, I've pursued self-taught projects in electronics, embedded systems, and C++ programming. 
      I've worked with a variety of microcontrollers and single-board computers, gaining a strong understanding of how software 
      interacts with hardware. This complements my professional work and enhances my ability to build efficient, real-world systems.`,
      next: "security",
      accent: "#EC4899"
    },
    {
      id: "security",
      title: "Cybersecurity",
      content: `Driven by curiosity and a desire to understand systems deeply, I've explored cybersecurity through developing 
      ethical hacking tools and network testing devices. I continue to study security protocols and best practices, approaching 
      projects with a security-first mindset.`,
      next: "current",
      accent: "#4F46E5"
    },
    {
      id: "current",
      title: "Current Role",
      content: `I currently work for a robotics company, where I design and develop custom control systems for both legacy machine 
      retrofits and original machinery. My current focus is building a proprietary CNC fiber laser control system — a project that 
      blends embedded systems, user interface design, server-side development, and real-time hardware control. I'm responsible for 
      full-stack development, Linux system configuration, and integrating software across multiple languages and platforms. Every 
      system is tailored to client or product-specific requirements, giving me hands-on experience with complex, end-to-end 
      engineering challenges.`,
      next: "summary",
      accent: "#7C3AED"
    },
    {
      id: "summary",
      title: "Bringing It All Together",
      content: `What sets me apart is a rare blend of business insight, full-stack development skills, embedded systems experience, 
      and a passion for cybersecurity. I'm adaptable, self-motivated, and open to roles that allow me to continue learning while 
      solving meaningful problems — whether in software, hardware, or both.`,
      next: null,
      accent: "#EC4899"
    }
  ];

  const currentIndex = sections.findIndex(s => s.id === activeSection);
  const currentSection = sections[currentIndex];

  const handleNext = () => {
    if (currentSection.next) {
      setDirection(1);
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 500);
      setActiveSection(currentSection.next);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 500);
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      {/* Removed local background */}
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 relative"
          >
            <span className="relative">
              About Me
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#4F46E5]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          {/* Interactive Story Flow */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSection}
                custom={direction}
                initial={{ 
                  opacity: 0,
                  x: direction > 0 ? 100 : -100,
                  filter: "blur(10px)"
                }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0,
                  x: direction > 0 ? -100 : 100,
                  filter: "blur(10px)"
                }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`bg-[#1E1B4B]/80 backdrop-blur-sm p-8 rounded-lg border-2 ${
                  isGlitching ? styles.animateGlitch : ''
                }`} style={{
                  borderColor: currentSection.accent,
                  boxShadow: `0 0 20px ${currentSection.accent}40`
                }}>
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 relative"
                    animate={{
                      textShadow: [
                        `0 0 5px ${currentSection.accent}`,
                        `0 0 10px ${currentSection.accent}`,
                        `0 0 5px ${currentSection.accent}`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {currentSection.title}
                  </motion.h3>
                  <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8">
                    {currentSection.content}
                  </p>

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <motion.button
                      onClick={handlePrevious}
                      className={`px-6 py-2 rounded-lg text-white font-medium relative overflow-hidden ${
                        currentIndex > 0 
                          ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#4F46E5]' 
                          : 'bg-gray-600 cursor-not-allowed'
                      }`}
                      whileHover={currentIndex > 0 ? { scale: 1.05 } : {}}
                      whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
                    >
                      <span className="relative z-10">Previous</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    <div className="flex gap-2">
                      {sections.map((section, index) => (
                        <motion.button
                          key={section.id}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setIsGlitching(true);
                            setTimeout(() => setIsGlitching(false), 500);
                            setActiveSection(section.id);
                          }}
                          className={`w-3 h-3 rounded-full relative ${
                            section.id === activeSection 
                              ? 'bg-[#4F46E5]' 
                              : 'bg-[#4F46E5]/30'
                          }`}
                          whileHover={{ scale: 1.2 }}
                        >
                          {section.id === activeSection && (
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              animate={{
                                boxShadow: [
                                  `0 0 5px ${section.accent}`,
                                  `0 0 10px ${section.accent}`,
                                  `0 0 5px ${section.accent}`
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>

                    <motion.button
                      onClick={handleNext}
                      className={`px-6 py-2 rounded-lg text-white font-medium relative overflow-hidden ${
                        currentSection.next 
                          ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#4F46E5]' 
                          : 'bg-gray-600 cursor-not-allowed'
                      }`}
                      whileHover={currentSection.next ? { scale: 1.05 } : {}}
                      whileTap={currentSection.next ? { scale: 0.95 } : {}}
                    >
                      <span className="relative z-10">Next</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
