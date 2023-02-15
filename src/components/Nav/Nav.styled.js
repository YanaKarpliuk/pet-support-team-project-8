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
 
 @media ${(p) => p.theme.media.desktop} {
  flex-direction: row;
    margin-top: ${(p) => p.theme.space[0]}px;
    gap: 80px;

 }
`;

export const Link = styled(NavLink)`
 font-family: ${p => p.theme.fonts.manrope};
 font-weight: ${p => p.theme.fontWeights.normal};
 font-size: ${p => p.theme.fontSizes.l};
 color: ${p => p.theme.colors.black};
 letter-spacing: 0.07em;

  &:hover {
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
  }

 @media ${p => p.theme.media.mobile} {
  font-size: 32px;
line-height: 44px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

 &.active {
  font-weight: ${p => p.theme.fontWeights.bold};}
 };
 @media ${p => p.theme.media.tablet} {
  margin: ${p => p.theme.space[0]}px;

 }

@media ${p => p.theme.media.desktop} {
  font-size: 20px;
  line-height: 27px;
letter-spacing: 0.04em;
 };

 &.active {
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
   @media ${p => p.theme.media.desktop} {
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
 };

 
`;
