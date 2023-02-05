import { Link } from "./Nav.styled";
export const Nav = () => {

 return (
  <nav style={{ display: "flex", gap: 10 }}>
   <Link to="/news">News</Link>
   <Link to="/notices">Find pet</Link>
   <Link to="/friends">Our friends</Link>
  </nav>
 );
};

export default Nav;
