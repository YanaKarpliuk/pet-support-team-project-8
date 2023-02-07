import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
 display: flex;
 gap: 12px;
 justify-content: center;
 @media ${(p) => p.theme.media.desktop} {
  gap: 48px;
 }
`;
export const Link = styled(NavLink)`
 border: ${(p) => p.theme.borders.box};
 margin-top: ${(p) => p.theme.space[5]}px;
 border-radius: ${(p) => p.theme.radius.normal};
 padding: 8px 28px;
 font-family: ${(p) => p.theme.fonts.manrope};
 font-size: ${(p) => p.theme.fontSizes.s};
 color: ${(p) => p.theme.colors.black};
 letter-spacing: 0.07em;
 @media ${(p) => p.theme.media.desktop} {
  margin-top: ${(p) => p.theme.space[0]}px;
 }

 &.active {
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.white};
 }
`;