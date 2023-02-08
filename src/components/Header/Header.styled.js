import styled from "styled-components";

export const Box = styled.div`
 display: flex;
 background-color: ${(p) => p.theme.colors.bg};
 @media ${(p) => p.theme.media.mobile} {
  padding: 12px 20px;
  gap: 10px;
  justify-content: space-between;
 }
 @media ${(p) => p.theme.media.tablet} {
  padding: 20px 32px;
  gap: 10px;
  justify-content: space-between;
 }
 @media ${(p) => p.theme.media.desktop} {
  padding: 20px 16px;
  gap: 10px;
 }
`;

export const MobileBtn = styled.div`
 display: block;
 // position: absolute;
 cursor: pointer;

//  @media ${(p) => p.theme.media.tablet} {
//   margin-left: auto;
//  }
 @media ${(p) => p.theme.media.desktop} {
  display: none;
 }
`;
export const Menu = styled.div`
 @media ${(p) => p.theme.media.mobile} {
  position: fixed;
  width: 100%;
  height: 82px;
  top: ${(p) => (p.open ? "64px" : "-100%")};
  text-align: center;
  right: ${(p) => (p.open ? 0 : "-100%")};
  transition: all 0.4s ease;
  background-color: ${(p) => p.theme.colors.bg};
 }

 @media ${(p) => p.theme.media.tablet} {
  margin-left: auto;
  display: ${(p) => (p.open ? "none" : "margin-left: auto")};
 }

 @media ${(p) => p.theme.media.desktop} {
  display: flex;

  width: 100%;
  margin-left: 80px;
  flex-direction: row-reverse;
  justify-content: space-between;
  text-align: center;
  align-items: center;
 }
`;

export const MenuNav = styled.div`
 @media ${(p) => p.theme.media.mobile} {
  position: fixed;
  width: 100%;
  height: 100vh;
padding-top: 42px;
  top: ${(p) => (p.open ? "82px" : "-100%")};
  text-align: center;
  right: ${(p) => (p.open ? 0 : "-100%")};
  transition: all 0.4s ease;
  background-color: ${(p) => p.theme.colors.bg};
 }

 @media ${(p) => p.theme.media.tablet} {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: ${(p) => (p.open ? "72px" : "-100%")};
  text-align: center;
  right: ${(p) => (p.open ? 0 : "-100%")};
  transition: all 0.4s ease;
  background-color: ${(p) => p.theme.colors.bg};
 }

 @media ${(p) => p.theme.media.desktop} {
  display: flex;

  width: 100%;
  margin-left: 80px;

  justify-content: space-between;
  text-align: center;
  align-items: center;
 }
`;