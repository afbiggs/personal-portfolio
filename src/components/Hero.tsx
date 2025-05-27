import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useRef, useState } from 'react'
import profileImage from '../assets/images/profile-image.jpeg'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

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

  // Floating elements animation
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#0A0F1C] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1B4B] via-[#0A0F1C] to-[#1E1B4B]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[calc(100vh-5rem)] items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
            style={{
              rotateX: springY,
              rotateY: springX,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="space-y-8">
              {/* Main Content */}
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl md:text-7xl font-bold text-white relative"
                >
                  Alex Biggs
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-[#4F46E5]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-medium text-[#4F46E5]">
                    Full Stack Developer
                  </h2>
                  <p className="text-[#CBD5E1] text-lg leading-relaxed">
                    Specializing in web development and embedded systems. 
                    Building solutions that solve real problems.
                  </p>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                <motion.a
                  href="#contact"
                  className="group relative px-8 py-4 bg-[#4F46E5] text-white font-semibold rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-transparent text-[#CBD5E1] font-semibold rounded-lg border-2 border-[#4F46E5] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">See My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-[#4F46E5]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-8"
              >
                {[
                  { icon: FaGithub, href: "https://github.com/yourusername" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
                  { icon: FaTwitter, href: "https://twitter.com/yourusername" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CBD5E1] hover:text-[#4F46E5] transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="text-3xl" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
            style={{
              rotateX: springY,
              rotateY: springX,
              transformStyle: "preserve-3d",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Cyberpunk Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #4F46E5, #7C3AED, #EC4899, #4F46E5)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Image Container with Padding */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-[#0A0F1C]">
                <motion.img
                  src={profileImage}
                  alt="Alex Biggs"
                  className="w-full h-full object-cover"
                  animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Neon Glow */}
              <motion.div
                className="absolute -inset-1 rounded-full"
                style={{
                  background: "radial-gradient(circle at center, #4F46E5, transparent 70%)",
                  filter: "blur(8px)"
                }}
                animate={isHovered ? {
                  opacity: 0.5,
                  scale: 1.1
                } : {
                  opacity: 0.2,
                  scale: 1
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Glitch Effect */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                animate={isHovered ? {
                  opacity: [0, 0.1, 0],
                  x: ["0%", "-2%", "2%", "0%"]
                } : {
                  opacity: 0,
                  x: "0%"
                }}
                transition={{
                  duration: 0.2,
                  repeat: isHovered ? 2 : 0,
                  repeatType: "reverse"
                }}
              >
                <div className="absolute inset-0 bg-[#4F46E5] mix-blend-overlay" />
              </motion.div>

              {/* Digital Noise Overlay */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  mixBlendMode: "overlay"
                }}
                animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 