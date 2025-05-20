import { Box, Container, Heading, Text, SimpleGrid, VStack, Image } from '@chakra-ui/react'

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      py={20}
      bg="white"
    >
      <Container maxW="1200px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={6}>
            <Heading as="h2" size="xl">
              About Me
            </Heading>
            <Text fontSize="lg" color="gray.600">
              I'm a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating intuitive, dynamic user experiences. With expertise in
              both front-end and back-end development, I strive to build applications that are
              not only visually appealing but also highly functional and user-friendly.
            </Text>
            <Text fontSize="lg" color="gray.600">
              My journey in software development began [Your Story]. I've worked on various
              projects ranging from small business websites to complex web applications,
              always focusing on writing clean, maintainable code and following best practices.
            </Text>
            <Text fontSize="lg" color="gray.600">
              When I'm not coding, you can find me [Your Hobbies/Interests]. I believe in
              continuous learning and staying up-to-date with the latest technologies and
              industry trends.
            </Text>
          </VStack>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="https://via.placeholder.com/400x400"
              alt="Profile"
              borderRadius="lg"
              boxShadow="xl"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default About 