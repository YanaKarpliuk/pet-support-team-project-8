import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Link = styled(NavLink)`


 font-family: ${(p) => p.theme.fonts.manrope};
 color: ${(p) => p.theme.colors.black};
 letter-spacing: 0.07em;
`;
