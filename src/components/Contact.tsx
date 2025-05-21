import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
  <div className="flex items-center space-x-4">
    <div className="p-3 bg-primary-500 text-white rounded-full">
      <Icon />
    </div>
    <div>
      <p className="font-bold">{title}</p>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-12">
          <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
          <div className="w-full max-w-3xl space-y-8">
            <div className="flex flex-wrap justify-center gap-8">
              <ContactInfo
                icon={FaEnvelope}
                title="Email"
                content="your.email@example.com"
              />
              <ContactInfo
                icon={FaPhone}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                title="Location"
                content="San Francisco, CA"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 