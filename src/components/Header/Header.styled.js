import styled from "styled-components";

export const Box = styled.div`
display: flex;
@media ${(p) => p.theme.media.mobile}{
    padding: 12px 20px;
    gap: 10px;}`;

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
//  @media ${(p) => p.theme.media.mobile} {
// //   display: flex;
// // flex-direction: column;
// //   cursor: pointer;
// //   z-index: 10;
//  }
`;