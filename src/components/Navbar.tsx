import { Box, Flex, Button, useColorModeValue } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  return (
    <Box
      position="fixed"
      w="100%"
      bg={useColorModeValue('white', 'gray.800')}
      px={4}
      py={4}
      boxShadow="sm"
      zIndex={1000}
    >
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Box fontWeight="bold" fontSize="xl">Your Name</Box>
        <Flex gap={4}>
          <ScrollLink to="about" smooth={true} duration={500}>
            <Button variant="ghost">About</Button>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500}>
            <Button variant="ghost">Skills</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button variant="ghost">Projects</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button variant="ghost">Contact</Button>
          </ScrollLink>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 