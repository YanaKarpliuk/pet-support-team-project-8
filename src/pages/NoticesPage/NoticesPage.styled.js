import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
background-color: ${theme.colors.bg};
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
@media screen and (${theme.media.mobile}) {
    margin-bottom: 30px;
}
margin-bottom: 60px;`

const elements = { Header, Container, CategoriesCont }

export default elements