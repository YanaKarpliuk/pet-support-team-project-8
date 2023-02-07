import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Log = styled(NavLink)`
 font-family: ${(p) => p.theme.fonts.logo};
 color: ${(p) => p.theme.colors.black};
 font-size: 28px;
 line-height: 42px;
 letter-spacing: 0.07em;
  @media ${(p) => p.theme.media.desktop} {
  font-size: 32px;}
  
`;
export const LogAccent = styled.span`
 font-family: ${(p) => p.theme.fonts.logo};
 font-size: 28px;
 line-height: 42px;
 letter-spacing: 0.07em;
 color: ${(p) => p.theme.colors.accent};
 @media ${(p) => p.theme.media.desktop} {
  font-size: 32px;
 }
`;
