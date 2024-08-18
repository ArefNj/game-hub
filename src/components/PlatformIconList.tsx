import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { SiAtari, SiSega, SiD3Dotjs, SiCommodore } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    sega: SiSega,
    "3do": SiD3Dotjs,
    "commodore-amiga": SiCommodore,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          key={platform.id}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
