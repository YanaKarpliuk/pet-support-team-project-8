// import { NavLink } from "react-router-dom";
import { Box, Link} from "./UserNav.styled";
import { HiUserCircle } from "react-icons/hi";

const UserNav = ({noOpen}) => {
 return (
  <Box>
   <Link to="/user" onClick={noOpen}>
    <HiUserCircle size={20} />
    Account
   </Link>
  </Box>
 );
};

export default UserNav;