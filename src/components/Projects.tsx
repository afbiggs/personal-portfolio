import { Box, Container, Heading, SimpleGrid, VStack, Text, Image, Button, HStack, Tag } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tags, github, live }: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}) => (
  <VStack
    bg="white"
    rounded="lg"
    overflow="hidden"
    boxShadow="md"
    align="start"
    _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
  >
    <Image src={image} alt={title} w="full" h="200px" objectFit="cover" />
    <VStack p={6} spacing={4} align="start" w="full">
      <Heading as="h3" size="md">{title}</Heading>
      <Text color="gray.600">{description}</Text>
      <HStack spacing={2} wrap="wrap">
        {tags.map((tag, index) => (
          <Tag key={index} colorScheme="blue" size="sm">{tag}</Tag>
        ))}
      </HStack>
      <HStack spacing={4} pt={2}>
        <Button
          as="a"
          href={github}
          target="_blank"
          leftIcon={<FaGithub />}
          size="sm"
          variant="outline"
        >
          Code
        </Button>
        <Button
          as="a"
          href={live}
          target="_blank"
          leftIcon={<FaExternalLinkAlt />}
          size="sm"
          variant="outline"
        >
          Live Demo
        </Button>
      </HStack>
    </VStack>
  </VStack>
)

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js that helps users manage their tasks efficiently.",
      image: "https://via.placeholder.com/400x200",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com"
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with real-time inventory management and payment processing.",
      image: "https://via.placeholder.com/400x200",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2-demo.com"
    },
    {
      title: "Project 3",
      description: "A social media dashboard with analytics and real-time updates.",
      image: "https://via.placeholder.com/400x200",
      tags: ["React", "GraphQL", "Apollo", "Docker"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3-demo.com"
    }
  ]

  return (
    <Box
      as="section"
      id="projects"
      py={20}
      bg="white"
    >
      <Container maxW="1200px">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center">
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects 