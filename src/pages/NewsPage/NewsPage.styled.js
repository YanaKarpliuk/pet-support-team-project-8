import styled from "styled-components"
import theme from "../../theme"

const Container = styled.div`
 background-color: ${theme.colors.bg};
 padding-bottom: 100px;
 margin-top: 67px;

 @media screen and (${theme.media.mobile}) {
  padding-top: 42px;
 }

 @media screen and (${theme.media.tablet}) {
  padding-top: 88px;
  margin-top: 83px;
 }

 @media screen and (${theme.media.desktop}) {
  padding-top: 58px;
  padding-bottom: 200px;
 }
`;

const Header = styled.h1`
@media screen and (${theme.media.mobile}) {
    font-size: 24px;
}

font-family: ${theme.fonts.manrope};
font-weight: ${theme.fontWeights.bold};
font-size: 48px;
line-height: 1.375;


text-align: center;

color: ${theme.colors.black};
`

const elements = { Header, Container }

export default elements