
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import { Box, MobileBtn, Menu } from "./Header.styled";
import { IoMenu } from "react-icons/io5";
// import UserNav from "../UserNav/UserNav";
const Header = () => {
    return (
     <Box>
      <Logo />
      <Menu>
       <Nav />
       <AuthNav />
      </Menu>
      <MobileBtn>
       <IoMenu size={40} />
      </MobileBtn>
      {/* <UserNav/> */}
      {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
     </Box>
    );
}
export default Header;