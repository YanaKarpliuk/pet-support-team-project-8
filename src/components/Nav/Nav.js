import { useLocation } from "react-router-dom";
import { Link, Box } from "./Nav.styled";
export const Nav = ({ noOpen }) => {
  const { pathname } = useLocation()
  const keepactive = () => {
    const active = ['sell', 'own', 'for-free', 'lost-found', 'favorite'].find((endpoint => pathname.includes(endpoint))) ? 'active' : ''
    return active
  }
  return (
    <Box>
      <Link to="/news" onClick={noOpen}>
        News
      </Link>
      <Link to="/notices/sell" onClick={noOpen} className={keepactive()}>
        Find pet
      </Link>
      <Link to="/friends" onClick={noOpen}>
        Our friends
      </Link>
    </Box>
  );
};

export default Nav;
