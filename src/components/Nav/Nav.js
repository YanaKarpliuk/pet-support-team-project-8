import { Link, Box } from "./Nav.styled";
export const Nav = (notOpen) => {

 return (
  <Box>
   <Link to="/news" onClick={notOpen}>
    News
   </Link>
   <Link to="/notices" onClick={notOpen}>
    Find pet
   </Link>
   <Link to="/friends" onClick={notOpen}>
    Our friends
   </Link>
  </Box>
 );
};

export default Nav;
