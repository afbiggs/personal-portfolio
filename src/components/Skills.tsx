// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// // import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
// // import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

// // const skills = [
// //   { name: 'React', icon: FaReact, color: 'text-blue-500' },
// //   { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
// //   { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
// //   { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
// //   { name: 'SQL', icon: FaDatabase, color: 'text-blue-400' },
// //   { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
// //   { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
// //   { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
// // ];

// const skillCategories = [
//   {
//     label: 'Languages',
//     color: '#7C3AED',
//     items: ['C++', 'Python', 'JavaScript', 'Bash', 'HTML/CSS'],
//   },
//   {
//     label: 'Frameworks & Libraries',
//     color: '#4F46E5',
//     items: ['React', 'Node.js', 'Express', 'Flask', 'Qt'],
//   },
//   {
//     label: 'Embedded & Hardware',
//     color: '#EC4899',
//     items: ['Arduino', 'Raspberry Pi', 'STM32', 'GPIO', 'UART', 'I2C'],
//   },
//   {
//     label: 'Tools & DevOps',
//     color: '#7C3AED',
//     items: ['Git', 'Docker', 'Linux', 'Nginx', 'VS Code', 'Vim'],
//   },
//   {
//     label: 'Security & Networking',
//     color: '#4F46E5',
//     items: ['Wireshark', 'Nmap', 'Metasploit', 'OpenWRT', 'SSH'],
//   },
//   {
//     label: 'Other Experience',
//     color: '#EC4899',
//     items: ['Linux system setup', 'custom UIs', 'CNC machine control', 'full-stack development'],
//   },
// ];

// const Skills = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <section id="skills" className="py-24 mb-56 scroll-mt-[8vh]">
//       <div className="container mx-auto px-4 sm:px-8 xl:px-24 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
//         <h2 className="text-4xl font-bold text-white mb-12 text-center">
//           <span className="block relative w-fit mx-auto">
//             Skills
//             <span className="block absolute left-0 right-0 -bottom-2 h-1 w-full rounded-full bg-[#7C8CF8]"></span>
//           </span>
//         </h2>
//         <div className="w-full mx-auto space-y-4">
//           {skillCategories.map((cat, idx) => (
//             <motion.div
//               key={cat.label}
//               initial={false}
//               animate={{
//                 boxShadow: openIndex === idx
//                   ? `0 0 24px 2px ${cat.color}55, 0 0 0 2px ${cat.color}`
//                   : `0 0 8px 0 ${cat.color}33`,
//                 borderColor: cat.color,
//               }}
//               className={`rounded-lg border-2 bg-[#18192A]/80 backdrop-blur-md transition-all duration-300 overflow-hidden`}
//             >
//               <button
//                 className="w-full flex justify-between items-center px-4 py-5 text-left text-lg font-semibold text-white tracking-wide focus:outline-none group"
//                 style={{
//                   textShadow: openIndex === idx ? `0 0 8px ${cat.color}` : undefined,
//                 }}
//                 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//               >
//                 <span className={openIndex === idx ? 'animate-glitch' : ''}>{cat.label}</span>
//                 <motion.span
//                   animate={{ rotate: openIndex === idx ? 90 : 0 }}
//                   className="ml-2 text-xl text-[#CBD5E1] group-hover:text-white transition-colors"
//                 >
//                   ▶
//                 </motion.span>
//               </button>
//               <AnimatePresence initial={false}>
//                 {openIndex === idx && (
//                   <motion.ul
//                     initial={{ opacity: 0, scaleY: 0.95 }}
//                     animate={{ opacity: 1, scaleY: 1 }}
//                     exit={{ opacity: 0, scaleY: 0.95 }}
//                     transition={{ duration: 0.25 }}
//                     style={{ originY: 1.5 }}
//                     className="px-4 pb-4"
//                   >
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-3 w-full">
//                       {cat.items.map((item) => (
//                         <li
//                           key={item}
//                           className="text-sm text-[#CBD5E1] py-1.5 px-3 rounded-md bg-[#232046]/50 hover:bg-[#232046] hover:text-white border border-transparent hover:border-[#7C3AED] transition-all duration-200"
//                         >
//                           {item}
//                         </li>
//                       ))}
//                     </div>
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills; 

// import React from 'react';

const skillCategories = [
  {
    label: 'Languages',
    color: 'text-purple-400 border-purple-500',
    items: ['C++', 'Python', 'JavaScript', 'Bash', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    color: 'text-indigo-400 border-indigo-500',
    items: ['React', 'Node.js', 'Express', 'Flask', 'Qt'],
  },
  {
    label: 'Embedded & Hardware',
    color: 'text-pink-400 border-pink-500',
    items: ['Arduino', 'Raspberry Pi', 'STM32', 'ESP32', 'Zephyr RTOS', 'Real-time Linux', 'GPIO', 'UART', 'I2C'],
  },
  {
    label: 'Tools & DevOps',
    color: 'text-purple-400 border-purple-500',
    items: ['Git', 'Docker', 'Linux', 'Nginx', 'VS Code', 'Vim'],
  },
  {
    label: 'Networking & Security',
    color: 'text-indigo-400 border-indigo-500',
    items: ['Wireshark', 'OpenWRT', 'SSH', 'WireGuard', 'pfSense', 'DNSMasq', 'Proxmox', 'Nmap', 'Metasploit'],
  },
  {
    label: 'Other Experience',
    color: 'text-pink-400 border-pink-500',
    items: ['Linux system setup', 'custom UIs', 'CNC machine control', 'full-stack development', '3D printing', 'Fusion 360/CAD'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 scroll-mt-[0vh]">
      <div className="container mx-auto px-4 sm:px-8 xl:px-24 max-w-7xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="block relative w-fit mx-auto">
            Skills
            <span className="block absolute left-0 right-0 -bottom-2 h-1 w-full rounded-full bg-[#7C8CF8]"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="bg-[#18192A]/80 backdrop-blur-md rounded-xl border-2 border-[#7C3AED] shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-[0_0_24px_4px_#7C3AED55] hover:border-[#EC4899] animate-fadeIn"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${cat.color} border-b border-[#4F46E5] pb-2`}>{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={item}
                    className="bg-[#232046] text-[#CBD5E1] text-sm px-3 py-1.5 rounded-md border border-[#4F46E5] transition-all duration-200 ease-in-out hover:border-[#EC4899] hover:text-white hover:shadow-[0_0_8px_2px_#EC489955] hover:bg-[#232046]/80 animate-fadeIn"
                    style={{ animationDelay: `${i * 80 + j * 30}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
