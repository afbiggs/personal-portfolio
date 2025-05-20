import { Box, Container, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <Box
      as="section"
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg="gray.50"
      pt={20}
    >
      <Container maxW="1200px">
        <VStack spacing={6} align="start">
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Hi, I'm Your Name
          </Heading>
          <Text fontSize="xl" color="gray.600">
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </Text>
          <HStack spacing={4}>
            <Button
              as="a"
              href="#contact"
              colorScheme="blue"
              size="lg"
            >
              Get in Touch
            </Button>
            <Button
              as="a"
              href="#projects"
              variant="outline"
              size="lg"
            >
              View My Work
            </Button>
          </HStack>
          <HStack spacing={4} pt={4}>
            <Button
              as="a"
              href="https://github.com/yourusername"
              target="_blank"
              leftIcon={<FaGithub />}
              variant="ghost"
            >
              GitHub
            </Button>
            <Button
              as="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              leftIcon={<FaLinkedin />}
              variant="ghost"
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="https://twitter.com/yourusername"
              target="_blank"
              leftIcon={<FaTwitter />}
              variant="ghost"
            >
              Twitter
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero 