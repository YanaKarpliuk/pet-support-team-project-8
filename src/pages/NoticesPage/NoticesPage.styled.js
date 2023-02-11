import styled from "styled-components";
import theme from "../../theme";

const Section = styled.section`
background-color: ${theme.colors.bg};
height: ${props => props.contents ? "fit-content" : "100vh"};
padding-bottom: 100px;
@media screen and (${theme.media.mobile}) {
    padding-top: 110px;
}

@media screen and (${theme.media.tablet}) {
padding-top: 170px;
}

@media screen and (${theme.media.desktop}) {
padding-top: 152px;
padding-bottom: 200px;
}
`

const Container = styled.div`
margin: 0 auto;
@media screen and (${theme.media.mobile}) {
   padding: 0 20px;
   width: 320px;
}

@media screen and (${theme.media.tablet}) {
padding: 0 32px;
width: 768px;
}

@media screen and (${theme.media.desktop}) {
padding: 0 16px;
width: 1280px;
}
`

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

const CategoriesCont = styled.div`
display: flex;
justify-content: space-between;
align-items: top;
margin-left: auto;
margin-right: auto;

@media screen and (${theme.media.mobile}) {
    margin-bottom: 30px;
}
margin-bottom: 60px;`

const elements = { Section, Header, Container, CategoriesCont }

export default elements