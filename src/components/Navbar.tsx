import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0F1C]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-white relative group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">AB</span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] opacity-0 group-hover:opacity-20 blur-sm"
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-[#CBD5E1] hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.div
                  className="absolute w-6 h-0.5 bg-white"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute w-6 h-0.5 bg-white"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute w-6 h-0.5 bg-white"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-[#CBD5E1] hover:text-white transition-colors relative"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glitch Effect on Scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={scrolled ? {
          opacity: [0, 0.1, 0],
          x: ["0%", "-1%", "1%", "0%"]
        } : {
          opacity: 0,
          x: "0%"
        }}
        transition={{
          duration: 0.2,
          repeat: scrolled ? 1 : 0,
          repeatType: "reverse"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] mix-blend-overlay" />
      </motion.div>
    </motion.nav>
  )
}

export default Navbar 