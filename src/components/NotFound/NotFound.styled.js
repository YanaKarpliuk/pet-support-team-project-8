import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
background-color: inherit;
height: 100%;
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;

font-family: ${theme.fonts.manrope};
font-weight: ${theme.fontWeights.bold};
font-size: 30px;
line-height: 1.375;
text-align: center;
@media screen and (${theme.media.mobile}) {
    font-size: 20px;
}`

const Face = styled.span`
@media screen and (${theme.media.mobile}) {
    font-size: 24px;
}
font-size: 48px;`

const elements = { Container, Face }

export default elements