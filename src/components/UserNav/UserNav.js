import { Box, Link, Icons} from "./UserNav.styled";


const UserNav = ({noOpen}) => {
 return (
  <Box>
   <Link to="/user" onClick={noOpen}>
    <Icons/>
    Account
   </Link>
  </Box>
 );
};

export default UserNav;