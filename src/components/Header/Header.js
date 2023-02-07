import { useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import { Box, MobileBtn, Menu } from "./Header.styled";
import { IoMenu } from "react-icons/io5";
import UserNav from "../UserNav/UserNav";
const Header = () => {
 const [open, setOpen] = useState(false);
 return (
  <Box open={open} onClick={() => setOpen(!open)}>
   <Logo />
   <Menu open={open}>
    <UserNav />
    {/* <AuthNav /> */}
    <Nav />
   </Menu>
   <MobileBtn onClick={() => setOpen(!open)}>
    <IoMenu size={40} />
   </MobileBtn>

   {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
  </Box>
 );
};
export default Header;
