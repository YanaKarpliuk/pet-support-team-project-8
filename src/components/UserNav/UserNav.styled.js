import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
 display: flex;
 gap: 12px;
 justify-content: center;
 margin-top: ${(p) => p.theme.space[5]}px;
 @media ${(p) => p.theme.media.desktop} {

  margin-top: ${(p) => p.theme.space[0]}px;

 }
`;
export const Link = styled(NavLink)`
 display: flex;
 border: ${(p) => p.theme.borders.box};

 border-radius: ${(p) => p.theme.radius.normal};
 //  padding: 8px 28px;
 height: 35px;
 min-width: 164px;
 font-family: ${(p) => p.theme.fonts.manrope};
 font-size: ${(p) => p.theme.fontSizes.s};
 letter-spacing: 0.07em;
 justify-content: center;
 text-align: center;
 align-items: center;

 gap: 12px;
 background-color: ${(p) => p.theme.colors.accent};
 color: ${(p) => p.theme.colors.white};

`;
