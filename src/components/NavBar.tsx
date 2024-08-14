import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/vecteezy_wolf-head-logo-vector-icon-illustration_6640995.jpg'
const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' borderRadius='15px'></Image>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar