import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/vecteezy_wolf-head-logo-vector-icon-illustration_6640995.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="15px" />
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
