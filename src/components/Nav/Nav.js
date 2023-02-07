import { Link, Box } from "./Nav.styled";
export const Nav = () => {

 return (
  <Box>
   <Link to="/news">News</Link>
   <Link to="/notices">Find pet</Link>
   <Link to="/friends">Our friends</Link>
  </Box>
 );
};

export default Nav;
