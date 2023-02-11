import styled from "styled-components"
import theme from "../../theme"

const Section = styled.section`
background-color: ${theme.colors.bg};
 padding-bottom: 100px;
 min-height: 100vh;
 width: auto;

 @media screen and (${theme.media.mobile}) {
  padding-top: 100px;
 }

 @media screen and (${theme.media.tablet}) {
  padding-top: 160px;
 }

 @media screen and (${theme.media.desktop}) {
  padding-top: 126px;
  padding-bottom: 200px;
 }
`

const Container = styled.div`
 margin: 0 auto;

 @media screen and (${theme.media.mobile}) {
  padding: 0 20px;
 }

 @media screen and (${theme.media.tablet}) {
  padding: 0 32px;
 }

 @media screen and (${theme.media.desktop}) {
  padding: 0 16px;
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

const elements = { Section, Header, Container }

export default elements