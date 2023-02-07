import { useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import { Box, MobileBtn, Menu } from "./Header.styled";
import { IoMenu, IoClose } from "react-icons/io5";
// import UserNav from "../UserNav/UserNav";
const Header = () => {
    const [open, setOpen] = useState(false);
    const notOpen = () => setOpen(!open);
 return (
  <Box>
   <Logo noOpen={notOpen} />
   <Menu open={open}>
    {/* <UserNav /> */}
    <AuthNav noOpen={notOpen} />
    <Nav noOpen={notOpen} />
   </Menu>
   <MobileBtn onClick={() => setOpen(!open)}>
    {open ? <IoClose size={40} /> : <IoMenu size={40} />}
   </MobileBtn>

   {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
  </Box>
 );
};
export default Header;
