// import { NavLink } from 'react-router-dom';
import { Box, Link } from "./AythNav.styled";
const AuthNav = ({noOpen}) => {
 return (
  <Box>
   <Link to="/login" onClick={noOpen}>
    Login
   </Link>
   <Link to="/register" onClick={noOpen}>
    Registration
   </Link>
  </Box>
 );
};

export default AuthNav;