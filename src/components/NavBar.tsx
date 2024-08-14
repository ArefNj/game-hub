import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/vecteezy_wolf-head-logo-vector-icon-illustration_6640995.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="50px" borderRadius="15px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
