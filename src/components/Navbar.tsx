import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearchText: (searchText: string) => void;
}
const Navbar = ({ onSearchText }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize={"60px"} />
      <SearchInput onSearchText={onSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
