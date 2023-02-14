import { useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import { Box, MobileBtn, Menu, MenuNav } from './Header.styled';
import { IoMenu, IoClose } from 'react-icons/io5';
import UserNav from '../UserNav/UserNav';
import authSelectors from '../../redux/auth/authSelectors';

const { isLoggedIn } = authSelectors;
const Header = () => {
  const [open, setOpen] = useState(false);
  const notOpen = () => setOpen(!open);
  return (
    <Box>
      {open ? <Logo noOpen={notOpen} /> : <Logo />}
      <MenuNav open={open}>
        <Nav noOpen={notOpen} />
      </MenuNav>

      <Menu open={open}>
        {/* <UserNav noOpen={notOpen} /> */}
        {isLoggedIn ? <UserNav /> : <AuthNav />}
        {/* <AuthNav noOpen={notOpen} /> */}
      </Menu>
      <MobileBtn onClick={() => setOpen(!open)}>
        {open ? <IoClose size={40} /> : <IoMenu size={40} />}
      </MobileBtn>
    </Box>
  );
};
export default Header;
