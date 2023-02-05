// import { NavLink } from 'react-router-dom';
import { Link } from "./AythNav.styled";
const AuthNav = () => {
 return (
  <div style={{ display: "flex", gap: 10 }}>
   <Link to="/login">Log In</Link>
   <Link to="/register">Register</Link>
  </div>
 );
};

export default AuthNav;