import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    // Show success or error message to the user
    if (res.ok) {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('There was an error sending your message. Please try again later.');
    }
  };
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   alert('Thank you for your message! I will get back to you soon.')
  //   setFormData({ name: '', email: '', message: '' })
  // }

  return (
    <section id="contact" className="py-20 scroll-mt-[-8vh]">
      <div className="mt-32 sm:mt-42 pt-16 pb-32 px-4 sm:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="block relative w-fit mx-auto">
              Get In Touch
              <span className="block absolute left-0 right-0 -bottom-2 h-1 w-full rounded-full bg-[#7C8CF8]"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#4F46E5]/10 rounded-lg">
                  <FaEnvelope className="text-2xl text-[#4F46E5]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a href="mailto:alexbiggs.dev@gmail.com" className="text-[#CBD5E1] hover:text-[#4F46E5] transition-colors">
                  alexbiggs.dev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#4F46E5]/10 rounded-lg">
                  <FaPhone className="text-2xl text-[#4F46E5]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <a href="tel:+18282759732" className="text-[#CBD5E1] hover:text-[#4F46E5] transition-colors">
                    +1 (828) 275-9732
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#4F46E5]/10 rounded-lg">
                  <FaMapMarkerAlt className="text-2xl text-[#4F46E5]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-[#CBD5E1]">
                    Asheville, NC
                  </p>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#CBD5E1] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[#4F46E5] bg-[#1E1B4B] text-white focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#CBD5E1] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[#4F46E5] bg-[#1E1B4B] text-white focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#CBD5E1] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[#4F46E5] bg-[#1E1B4B] text-white focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-lg hover:from-[#7C3AED] hover:to-[#4F46E5] transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 