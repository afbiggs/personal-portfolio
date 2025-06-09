import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'SQL', icon: FaDatabase, color: 'text-blue-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
];

const skillCategories = [
  {
    label: 'Languages',
    color: '#7C3AED',
    items: ['C++', 'Python', 'JavaScript', 'Bash', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    color: '#4F46E5',
    items: ['React', 'Node.js', 'Express', 'Flask', 'Qt'],
  },
  {
    label: 'Embedded & Hardware',
    color: '#EC4899',
    items: ['Arduino', 'Raspberry Pi', 'STM32', 'GPIO', 'UART', 'I2C'],
  },
  {
    label: 'Tools & DevOps',
    color: '#7C3AED',
    items: ['Git', 'Docker', 'Linux', 'Nginx', 'VS Code', 'Vim'],
  },
  {
    label: 'Security & Networking',
    color: '#4F46E5',
    items: ['Wireshark', 'Nmap', 'Metasploit', 'OpenWRT', 'SSH'],
  },
  {
    label: 'Other Experience',
    color: '#EC4899',
    items: ['Linux system setup', 'custom UIs', 'CNC machine control', 'full-stack development'],
  },
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 mb-56 scroll-mt-[2vh]">
      <div className="container mx-auto px-4 sm:px-8 xl:px-24 max-w-7xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
        <div className="max-w-7xl mx-auto space-y-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.label}
              initial={false}
              animate={{
                boxShadow: openIndex === idx
                  ? `0 0 24px 2px ${cat.color}55, 0 0 0 2px ${cat.color}`
                  : `0 0 8px 0 ${cat.color}33`,
                borderColor: cat.color,
              }}
              className={`rounded-xl border-2 bg-[#18192A]/80 backdrop-blur-md transition-all duration-300 overflow-hidden`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left text-xl font-semibold text-white tracking-wide focus:outline-none group"
                style={{
                  textShadow: openIndex === idx ? `0 0 8px ${cat.color}` : undefined,
                }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={openIndex === idx ? 'animate-glitch' : ''}>{cat.label}</span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 90 : 0 }}
                  className="ml-2 text-2xl text-[#CBD5E1] group-hover:text-white transition-colors"
                >
                  ▶
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-8 pb-6"
                  >
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="text-lg text-[#CBD5E1] py-1 border-l-4 border-transparent hover:border-[#7C3AED] pl-4 transition-all duration-200"
                      >
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 