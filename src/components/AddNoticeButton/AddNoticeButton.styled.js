import styled from "styled-components";
import theme from "../../theme";
import { AiOutlinePlus } from "react-icons/ai"

const MobBtn = styled.button`
z-index: 10;
@media screen and (min-width: 767px) {
    display: none;
}
 cursor: pointer;
position: fixed;
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

color: ${theme.colors.white};

transition: background-color 200ms ease-in-out;

&:hover, &:active {
    background-color: #FF6101
}`

const Text = styled.span`
display: flex;
align-items: center;
font-family: ${theme.fonts.manrope};
font-weight: ${theme.fontWeights.normal};
font-size: 20px;
line-height: 1.35;

color: ${theme.colors.black};

@media screen and (${theme.media.mobile}) {
    display: none;
}`

const Btn = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 44px;
height: 44px;
padding: 0;
margin-left: 12px;
background: ${theme.colors.accent};
border-radius: 50%;
outline: none;
border: none;
cursor: pointer;
transition: background-color 200ms ease-in-out;

&:hover, &:active {
    background-color: #FF6101
}`

const MobCross = styled(AiOutlinePlus)`
display: block;
margin: 0 auto;
width: 32px;
height: 32px;
fill: ${theme.colors.white};`

const Cross = styled(AiOutlinePlus)`
display: block;
width: 24px;
height: 24px;
fill: ${theme.colors.white};`


const elements = { MobBtn, Text, Btn, MobCross, Cross }

export default elements