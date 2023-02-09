import { Link, Box } from "./Nav.styled";
export const Nav = ({ noOpen }) => {
  return (
    <Box>
      <Link to="/news" onClick={noOpen}>
        News
      </Link>
      <Link to="/notices" onClick={noOpen}>
        Find pet
      </Link>
      <Link to="/friends" onClick={noOpen}>
        Our friends
      </Link>
    </Box>
  );
};

export default Nav;
