import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Link = styled(NavLink)`
 border: ${(p) => p.theme.borders.box};
 border-radius: ${(p) => p.theme.radii.normal};
 padding: 8px 28px;
 font-family: ${(p) => p.theme.fonts.manrope};
 color: ${(p) => p.theme.colors.black};
 letter-spacing: 0.07em;
`;