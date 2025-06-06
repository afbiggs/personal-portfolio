import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useRef, useState, useEffect } from 'react'
import profileImage from '../assets/images/profile-image.jpeg'
import { AnimatePresence } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse movement tracking for 3D effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    mouseX.set(x * 20)
    mouseY.set(y * 20)
  }

  // Auto-changing text effect
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = [
    "Full Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "Problem Solver"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Floating elements animation
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-transparent">
      {/* Terminal Window Frame */}
      <div className="relative w-full max-w-3xl mx-auto rounded-2xl bg-[#18192A]/80 border-2 border-[#7C3AED] shadow-2xl backdrop-blur-lg px-8 py-10 mt-16 mb-8"
        style={{ boxShadow: '0 0 40px 0 #7C3AED55, 0 0 0 2px #4F46E5' }}>
        {/* Faux window controls */}
        <div className="absolute left-0 top-0 flex space-x-2 p-4">
          <span className="w-3 h-3 rounded-full bg-[#EC4899] inline-block shadow-md" />
          <span className="w-3 h-3 rounded-full bg-[#FBBF24] inline-block shadow-md" />
          <span className="w-3 h-3 rounded-full bg-[#22D3EE] inline-block shadow-md" />
        </div>
        {/* Terminal prompt */}
        <div className="mb-6 text-[#CBD5E1] font-mono text-sm opacity-70">[~/alexbiggs]$</div>
        {/* Typing animation for name/title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-mono">
          <span>
            {/* Typing animation */}
            <span className="text-[#7C3AED]">{`>`} </span>
            <span>
              <span>{useTypewriter({ words: ['Alex Biggs'], loop: 1, typeSpeed: 80, deleteSpeed: 0, delaySpeed: 1000 })[0]}</span>
              <Cursor cursorColor="#7C3AED" />
            </span>
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-mono text-[#7C3AED] mb-6">
          <span>{useTypewriter({ words: [titles[currentTitle]], loop: 0, typeSpeed: 60, deleteSpeed: 0, delaySpeed: 2000 })[0]}</span>
          <Cursor cursorColor="#7C3AED" />
        </h2>
        <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8">
          Specializing in web development and embedded systems. <br />
          Building solutions that solve real problems.
        </p>
        <div className="flex flex-wrap gap-6 mb-8">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-[#4F46E5] text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <span className="relative z-10">Contact Me</span>
          </a>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-transparent text-[#CBD5E1] font-semibold rounded-lg border-2 border-[#4F46E5] overflow-hidden hover:scale-105 transition-transform"
          >
            <span className="relative z-10">See My Work</span>
          </a>
        </div>
        <div className="flex gap-8">
          {[
            { icon: FaGithub, href: "https://github.com/yourusername" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
            { icon: FaTwitter, href: "https://twitter.com/yourusername" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CBD5E1] hover:text-[#4F46E5] transition-colors text-3xl"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      {/* Floating Hologram Profile Image */}
      <motion.div
        className="relative group"
        animate={{ y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Neon Glow */}
        <motion.div
          className="absolute -inset-6 rounded-full blur-2xl"
          style={{ background: 'conic-gradient(from 0deg, #4F46E5, #7C3AED, #EC4899, #4F46E5)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Alex Biggs"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#7C3AED] shadow-xl transition-transform duration-300 group-hover:scale-105 relative z-10"
          style={{ boxShadow: '0 0 40px 0 #7C3AED99, 0 0 0 8px #232046' }}
        />
        {/* Scanline effect overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden z-30">
          <div className="w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent animate-scanline" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 