import styled from "styled-components";

export const Box = styled.div`
 display: flex;
 width: 100%;
//  height: 80px;
 background-color: ${(p) => p.theme.colors.bg};
 @media ${(p) => p.theme.media.mobile} {
  padding: 12px 20px;
  gap: 10px;
 }
`;

export const MobileBtn = styled.div`
 @media ${(p) => p.theme.media.mobile} {
  display: block;
  position: absolute;
  right: 2%;
  top: 16px;
  cursor: pointer;
  z-index: 10;
 }
 @media ${(p) => p.theme.media.tablet} {
  display: block;
  position: absolute;
  right: 2%;
  top: 16px;
  cursor: pointer;
  z-index: 10;
 }
 @media ${(p) => p.theme.media.desktop} {
  display: none;
 }
`;
export const Menu = styled.div`

  @media ${(p) => p.theme.media.mobile} {
   position: fixed;
   width: 100%;
   height: 100vh;
   top: ${(p) => (p.open ? "10%" : "-100%")};
   text-align: center;
   right:${(p) => (p.open ? 0 : "-100%")};
   transition: all .4s ease;
   background-color: ${(p) => p.theme.colors.bg};

  @media ${(p) => p.theme.media.tablet}{
position: fixed;
   width: 100%;
   height: 100vh;
   top: ${(p) => (p.open ? "10%" : "-100%")};
   text-align: center;
   right:${(p) => (p.open ? 0 : "-100%")};
   transition: all .4s ease;
   background-color: ${(p) => p.theme.colors.bg};
  }
`;
