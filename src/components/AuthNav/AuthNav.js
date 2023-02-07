// import { NavLink } from 'react-router-dom';
import { Box, Link } from "./AythNav.styled";
const AuthNav = () => {
 return (
  <Box>
   <Link to="/login">LogIn</Link>
   <Link to="/register">Register</Link>
  </Box>
 );
};

export default AuthNav;