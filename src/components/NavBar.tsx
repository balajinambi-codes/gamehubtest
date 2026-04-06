import { HStack, Image, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
  onToggleSidebar?: () => void; // ✅ ADD THIS
}

const NavBar = ({ onSearch, onToggleSidebar }: Props) => {
  return (
    <HStack padding="10px" gap={3}>
      
      {/* 🔥 Sidebar Toggle Button */}
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Toggle Sidebar"
        onClick={onToggleSidebar}
      />

      {/* Logo */}
      <Image src={logo} boxSize="60px" />

      {/* Search */}
      <SearchInput onSearch={onSearch} />

      {/* Dark Mode */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;