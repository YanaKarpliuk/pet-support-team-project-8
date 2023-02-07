import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.nav`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
 gap: 40px;
 margin-top: 60px;
`;

export const Link = styled(NavLink)`
 font-family: ${(p) => p.theme.fonts.manrope};
   font-size: ${(p) => p.theme.fontSizes.l};
  
 color: ${(p) => p.theme.colors.black};
 letter-spacing: 0.07em;

  &.active {
  color: ${(p) => p.theme.colors.accent};
text-decoration: underline;

`;
