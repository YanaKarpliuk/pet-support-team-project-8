import styled from "styled-components";
import theme from "../../theme";

const MobBtn = styled.button`
@media screen and (min-width: 767px) {
    display: none;
}

position: absolute;
width: 80px;
height: 80px;
right: 20px;
bottom: 12%;

background: ${theme.colors.accent};
border-radius: 50%;
outline: none;
border: none;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

font-family: ${theme.fonts.manrope};
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.xs};
line-height:1.33;

color: ${theme.colors.white};`

const Text = styled.p`
@media screen and (${theme.media.mobile}) {
    display: none;
}`

const Btn = styled.button``

const elements = { MobBtn, Text, Btn }

export default elements