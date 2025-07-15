import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from './About.module.css';

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 100 : -100,
    filter: "blur(10px)"
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)"
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -100 : 100,
    filter: "blur(10px)"
  }),
};

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
      next: "networking",
      accent: "#EC4899"
    },
    {
      id: "networking",
      title: "Networking & Infrastructure",
      content: `My work in infrastructure and networking spans from configuring secure remote access systems to building out complete 
      home lab environments and production-ready server setups. I've deployed full-tunnel VPNs, implemented custom DNS filtering 
      services, and managed Linux-based systems that support both internal tooling and customer-facing applications. Whether it's 
      configuring network topologies, hardening remote endpoints, or containerizing services with Docker, I approach each project 
      with scalability, reliability, and security in mind.`,
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
      content: `Everything I’ve built — from embedded control systems to home-grown networking infrastructure — comes from a place of curiosity 
      and a desire to understand how things work at every level. I’ve worked across the stack, down to the hardware, and up through 
      the network. Whether I’m designing a control system, building a website, spinning up a containerized service, building a custom VPN, 
      or acting on the insane idea to make my own tennis ball machine — I care about doing it right, doing it clean, and learning something 
      new along the way. That’s what keeps me going.`,
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
    <section id="about" className="min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 scroll-mt-[0vh]">
      <div className="container mx-auto px-4 sm:px-8 xl:px-24 max-w-7xl">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            <span className="block relative w-fit mx-auto">
              About Me
              <span className="block absolute left-0 right-0 -bottom-2 h-1 w-full rounded-full bg-[#7C8CF8]"></span>
            </span>
          </h2>

          <div className="relative min-h-[240px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[320px] xl:min-h-[360px]">


            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSection.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className={`bg-[#1E1B4B]/80 backdrop-blur-sm p-8 rounded-lg border-2 h-full flex flex-col justify-between ${
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





// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import styles from './About.module.css';

// const sections = [
//   {
//     id: "about",
//     title: "The Beginning",
//     content: `I began my career with a B.S.B.A. in Business Administration and Management from Appalachian State University, gaining several years of hands-on management experience in the service industry. Over time, I developed a strong passion for technology and decided to pivot my career toward software development.`,
//     next: "web",
//     accent: "#4F46E5"
//   },
//   {
//     id: "web",
//     title: "Web Development",
//     content: `To build a solid technical foundation, I completed a Full Stack Web Development bootcamp through the University of North Carolina at Chapel Hill. There, I discovered a natural aptitude for programming and quickly became confident working across front-end and back-end technologies. My business background has proven invaluable in translating complex requirements into usable applications and managing workflows in collaborative settings.`,
//     next: "embedded",
//     accent: "#7C3AED"
//   },
//   {
//     id: "embedded",
//     title: "Embedded Systems",
//     content: `Beyond formal training, I've pursued self-taught projects in electronics, embedded systems, and C++ programming. I've worked with a variety of microcontrollers and single-board computers, gaining a strong understanding of how software interacts with hardware. This complements my professional work and enhances my ability to build efficient, real-world systems.`,
//     next: "security",
//     accent: "#EC4899"
//   },
//   {
//     id: "security",
//     title: "Cybersecurity",
//     content: `Driven by curiosity and a desire to understand systems deeply, I've explored cybersecurity through developing ethical hacking tools and network testing devices. I continue to study security protocols and best practices, approaching projects with a security-first mindset.`,
//     next: "current",
//     accent: "#4F46E5"
//   },
//   {
//     id: "current",
//     title: "Current Role",
//     content: `I currently work for a robotics company, where I design and develop custom control systems for both legacy machine retrofits and original machinery. My current focus is building a proprietary CNC fiber laser control system — a project that blends embedded systems, user interface design, server-side development, and real-time hardware control. I'm responsible for full-stack development, Linux system configuration, and integrating software across multiple languages and platforms. Every system is tailored to client or product-specific requirements, giving me hands-on experience with complex, end-to-end engineering challenges.`,
//     next: "summary",
//     accent: "#7C3AED"
//   },
//   {
//     id: "summary",
//     title: "Bringing It All Together",
//     content: `What sets me apart is a rare blend of business insight, full-stack development skills, embedded systems experience, and a passion for cybersecurity. I'm adaptable, self-motivated, and open to roles that allow me to continue learning while solving meaningful problems — whether in software, hardware, or both.`,
//     next: null,
//     accent: "#EC4899"
//   }
// ];

// const About = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isGlitching, setIsGlitching] = useState(false);

//   const currentSection = sections[activeIndex];

// const goToIndex = (newIndex: number) => {
//   if (newIndex < 0 || newIndex >= sections.length || newIndex === activeIndex) return;
//   const dir = newIndex > activeIndex ? 1 : -1;
//   setDirection(dir);
//   setIsGlitching(true);
//   setTimeout(() => setIsGlitching(false), 500);
//   setActiveIndex(newIndex);
// };


//   return (
//     <section id="about" className="relative min-h-screen overflow-hidden flex items-center justify-center">
//       <div className="container mx-auto px-4 sm:px-8 xl:px-24 py-24 max-w-7xl">
//         <div className="max-w-7xl mx-auto w-full">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
//             <span className="block relative w-fit mx-auto">
//               About Me
//               <span className="block absolute left-0 right-0 -bottom-2 h-1 w-full rounded-full bg-[#7C8CF8]" />
//             </span>
//           </h2>

//           <div className="relative min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentSection.id}
//                 custom={direction}
//                 initial={{ opacity: 0, x: direction > 0 ? 100 : -100, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, x: direction > 0 ? -100 : 100, filter: "blur(8px)" }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div
//                   className={`bg-[#1E1B4B]/80 backdrop-blur-sm p-8 rounded-lg border-2 transition-all duration-500 ${
//                     isGlitching ? styles.animateGlitch : ''
//                   }`}
//                   style={{
//                     borderColor: currentSection.accent,
//                     boxShadow: `0 0 20px ${currentSection.accent}40`
//                   }}
//                 >
//                   <motion.h3
//                     className="text-2xl font-bold text-white mb-4"
//                     animate={{
//                       textShadow: [
//                         `0 0 5px ${currentSection.accent}`,
//                         `0 0 10px ${currentSection.accent}`,
//                         `0 0 5px ${currentSection.accent}`
//                       ]
//                     }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   >
//                     {currentSection.title}
//                   </motion.h3>
//                   <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8 whitespace-pre-line">
//                     {currentSection.content}
//                   </p>

//                   {/* Navigation */}
//                   <div className="flex justify-between items-center flex-wrap gap-4">
//                     <button
//                       onClick={() => goToIndex(activeIndex - 1)}
//                       className={`px-6 py-2 rounded-lg text-white font-medium ${
//                         activeIndex > 0
//                           ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#4F46E5]'
//                           : 'bg-gray-600 cursor-not-allowed'
//                       }`}
//                     >
//                       Previous
//                     </button>

//                     <div className="flex gap-2">
//                       {sections.map((_, i) => (
//                         <button
//                           key={i}
//                           onClick={() => goToIndex(i)}
//                           className={`w-3 h-3 rounded-full ${
//                             i === activeIndex ? 'bg-[#4F46E5]' : 'bg-[#4F46E5]/30'
//                           }`}
//                         />
//                       ))}
//                     </div>

//                     <button
//                       onClick={() => goToIndex(activeIndex + 1)}
//                       className={`px-6 py-2 rounded-lg text-white font-medium ${
//                         currentSection.next
//                           ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#4F46E5]'
//                           : 'bg-gray-600 cursor-not-allowed'
//                       }`}
//                     >
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import styles from './About.module.css';

// const About = () => {
//   const [activeSection, setActiveSection] = useState("about");
//   const [direction, setDirection] = useState(0);
//   const [isGlitching, setIsGlitching] = useState(false);

//   const sections = [
//     {
//       id: "about",
//       title: "The Beginning",
//       content: `I began my career with a B.S.B.A. in Business Administration and Management from Appalachian State University, 
//       gaining several years of hands-on management experience in the service industry. Over time, I developed a strong passion 
//       for technology and decided to pivot my career toward software development.`,
//       next: "web",
//       accent: "#4F46E5"
//     },
//     {
//       id: "web",
//       title: "Web Development",
//       content: `To build a solid technical foundation, I completed a Full Stack Web Development bootcamp through the University of 
//       North Carolina at Chapel Hill. There, I discovered a natural aptitude for programming and quickly became confident working 
//       across front-end and back-end technologies. My business background has proven invaluable in translating complex requirements 
//       into usable applications and managing workflows in collaborative settings.`,
//       next: "embedded",
//       accent: "#7C3AED"
//     },
//     {
//       id: "embedded",
//       title: "Embedded Systems",
//       content: `Beyond formal training, I've pursued self-taught projects in electronics, embedded systems, and C++ programming. 
//       I've worked with a variety of microcontrollers and single-board computers, gaining a strong understanding of how software 
//       interacts with hardware. This complements my professional work and enhances my ability to build efficient, real-world systems.`,
//       next: "security",
//       accent: "#EC4899"
//     },
//     {
//       id: "security",
//       title: "Cybersecurity",
//       content: `Driven by curiosity and a desire to understand systems deeply, I've explored cybersecurity through developing 
//       ethical hacking tools and network testing devices. I continue to study security protocols and best practices, approaching 
//       projects with a security-first mindset.`,
//       next: "current",
//       accent: "#4F46E5"
//     },
//     {
//       id: "current",
//       title: "Current Role",
//       content: `I currently work for a robotics company, where I design and develop custom control systems for both legacy machine 
//       retrofits and original machinery. My current focus is building a proprietary CNC fiber laser control system — a project that 
//       blends embedded systems, user interface design, server-side development, and real-time hardware control. I'm responsible for 
//       full-stack development, Linux system configuration, and integrating software across multiple languages and platforms. Every 
//       system is tailored to client or product-specific requirements, giving me hands-on experience with complex, end-to-end 
//       engineering challenges.`,
//       next: "summary",
//       accent: "#7C3AED"
//     },
//     {
//       id: "summary",
//       title: "Bringing It All Together",
//       content: `What sets me apart is a rare blend of business insight, full-stack development skills, embedded systems experience, 
//       and a passion for cybersecurity. I'm adaptable, self-motivated, and open to roles that allow me to continue learning while 
//       solving meaningful problems — whether in software, hardware, or both.`,
//       next: null,
//       accent: "#EC4899"
//     }
//   ];

//   const currentIndex = sections.findIndex(s => s.id === activeSection);
//   const currentSection = sections[currentIndex];

//   const handleNext = () => {
//     if (currentSection.next) {
//       setDirection(1);
//       setIsGlitching(true);
//       setTimeout(() => setIsGlitching(false), 500);
//       setActiveSection(currentSection.next);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setDirection(-1);
//       setIsGlitching(true);
//       setTimeout(() => setIsGlitching(false), 500);
//       setActiveSection(sections[currentIndex - 1].id);
//     }
//   };

//   return (
//     <section id="about" className="relative min-h-screen overflow-hidden flex items-center justify-center">
//       {/* Removed local background */}
//       <div className="container mx-auto px-4 sm:px-8 xl:px-24 py-24 max-w-7xl">
//         <div className="max-w-7xl mx-auto w-full">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
//             <span className="block relative w-fit mx-auto">
//               About Me
//               <span className="block absolute left-0 right-0 -bottom-2 h-1 w-full rounded-full bg-[#7C8CF8]"></span>
//             </span>
//           </h2>

//           {/* Interactive Story Flow */}
//           <div className="relative">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={activeSection}
//                 custom={direction}
//                 initial={{ 
//                   opacity: 0,
//                   x: direction > 0 ? 100 : -100,
//                   filter: "blur(10px)"
//                 }}
//                 animate={{ 
//                   opacity: 1,
//                   x: 0,
//                   filter: "blur(0px)"
//                 }}
//                 exit={{ 
//                   opacity: 0,
//                   x: direction > 0 ? -100 : 100,
//                   filter: "blur(10px)"
//                 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative"
//               >
//                 <div className={`bg-[#1E1B4B]/80 backdrop-blur-sm p-8 rounded-lg border-2 ${
//                   isGlitching ? styles.animateGlitch : ''
//                 }`} style={{
//                   borderColor: currentSection.accent,
//                   boxShadow: `0 0 20px ${currentSection.accent}40`
//                 }}>
//                   <motion.h3 
//                     className="text-2xl font-bold text-white mb-4 relative"
//                     animate={{
//                       textShadow: [
//                         `0 0 5px ${currentSection.accent}`,
//                         `0 0 10px ${currentSection.accent}`,
//                         `0 0 5px ${currentSection.accent}`
//                       ]
//                     }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   >
//                     {currentSection.title}
//                   </motion.h3>
//                   <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8">
//                     {currentSection.content}
//                   </p>

//                   {/* Navigation */}
//                   <div className="flex justify-between items-center">
//                     <motion.button
//                       onClick={handlePrevious}
//                       className={`px-6 py-2 rounded-lg text-white font-medium relative overflow-hidden ${
//                         currentIndex > 0 
//                           ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#4F46E5]' 
//                           : 'bg-gray-600 cursor-not-allowed'
//                       }`}
//                       whileHover={currentIndex > 0 ? { scale: 1.05 } : {}}
//                       whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
//                     >
//                       <span className="relative z-10">Previous</span>
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]"
//                         initial={{ x: "-100%" }}
//                         whileHover={{ x: 0 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </motion.button>

//                     <div className="flex gap-2">
//                       {sections.map((section, index) => (
//                         <motion.button
//                           key={section.id}
//                           onClick={() => {
//                             setDirection(index > currentIndex ? 1 : -1);
//                             setIsGlitching(true);
//                             setTimeout(() => setIsGlitching(false), 500);
//                             setActiveSection(section.id);
//                           }}
//                           className={`w-3 h-3 rounded-full relative ${
//                             section.id === activeSection 
//                               ? 'bg-[#4F46E5]' 
//                               : 'bg-[#4F46E5]/30'
//                           }`}
//                           whileHover={{ scale: 1.2 }}
//                         >
//                           {section.id === activeSection && (
//                             <motion.div
//                               className="absolute inset-0 rounded-full"
//                               animate={{
//                                 boxShadow: [
//                                   `0 0 5px ${section.accent}`,
//                                   `0 0 10px ${section.accent}`,
//                                   `0 0 5px ${section.accent}`
//                                 ]
//                               }}
//                               transition={{ duration: 2, repeat: Infinity }}
//                             />
//                           )}
//                         </motion.button>
//                       ))}
//                     </div>

//                     <motion.button
//                       onClick={handleNext}
//                       className={`px-6 py-2 rounded-lg text-white font-medium relative overflow-hidden ${
//                         currentSection.next 
//                           ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#4F46E5]' 
//                           : 'bg-gray-600 cursor-not-allowed'
//                       }`}
//                       whileHover={currentSection.next ? { scale: 1.05 } : {}}
//                       whileTap={currentSection.next ? { scale: 0.95 } : {}}
//                     >
//                       <span className="relative z-10">Next</span>
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]"
//                         initial={{ x: "-100%" }}
//                         whileHover={{ x: 0 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
