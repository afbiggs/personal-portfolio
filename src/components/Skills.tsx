import { Box, Container, Heading, SimpleGrid, VStack, Text, Icon } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiPython, SiMongodb, SiPostgresql } from 'react-icons/si'

const SkillCard = ({ icon, title, description }: { icon: any; title: string; description: string }) => (
  <VStack
    p={6}
    bg="white"
    rounded="lg"
    boxShadow="md"
    spacing={4}
    align="start"
    _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
  >
    <Icon as={icon} w={10} h={10} color="blue.500" />
    <Text fontWeight="bold" fontSize="lg">{title}</Text>
    <Text color="gray.600">{description}</Text>
  </VStack>
)

const Skills = () => {
  const skills = [
    {
      icon: FaReact,
      title: "Frontend Development",
      description: "React, Next.js, HTML5, CSS3, Responsive Design"
    },
    {
      icon: FaNodeJs,
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs, GraphQL"
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      description: "Type-safe development, interfaces, generics"
    },
    {
      icon: SiJavascript,
      title: "JavaScript",
      description: "ES6+, Modern JavaScript features, DOM manipulation"
    },
    {
      icon: FaDatabase,
      title: "Database",
      description: "SQL, NoSQL, Database design and optimization"
    },
    {
      icon: FaGitAlt,
      title: "Version Control",
      description: "Git, GitHub, GitLab, CI/CD"
    }
  ]

  return (
    <Box
      as="section"
      id="skills"
      py={20}
      bg="gray.50"
    >
      <Container maxW="1200px">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center">
            Skills & Technologies
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Skills 