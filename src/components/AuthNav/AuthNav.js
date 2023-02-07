// import { NavLink } from 'react-router-dom';
import { Box, Link } from "./AythNav.styled";
const AuthNav = (notOpen) => {
 return (
  <Box>
   <Link to="/login" onClick={notOpen}>
    LogIn
   </Link>
   <Link to="/register" onClick={notOpen}>
    Register
   </Link>
  </Box>
 );
};

export default AuthNav;