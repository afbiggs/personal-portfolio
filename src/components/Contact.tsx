import { Box, Container, Heading, VStack, Text, Button, Input, Textarea, HStack, useToast } from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'

const ContactInfo = ({ icon, title, content }: { icon: any; title: string; content: string }) => (
  <HStack spacing={4}>
    <Box
      p={3}
      bg="blue.500"
      color="white"
      rounded="full"
    >
      {icon}
    </Box>
    <VStack align="start" spacing={0}>
      <Text fontWeight="bold">{title}</Text>
      <Text color="gray.600">{content}</Text>
    </VStack>
  </HStack>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Box
      as="section"
      id="contact"
      py={20}
      bg="gray.50"
    >
      <Container maxW="1200px">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center">
            Get In Touch
          </Heading>
          <VStack spacing={8} w="full" maxW="800px">
            <HStack spacing={8} wrap="wrap" justify="center">
              <ContactInfo
                icon={<FaEnvelope />}
                title="Email"
                content="your.email@example.com"
              />
              <ContactInfo
                icon={<FaPhone />}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<FaMapMarkerAlt />}
                title="Location"
                content="San Francisco, CA"
              />
            </HStack>
            <Box
              as="form"
              w="full"
              bg="white"
              p={8}
              rounded="lg"
              boxShadow="md"
              onSubmit={handleSubmit}
            >
              <VStack spacing={4}>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                />
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w="full"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 