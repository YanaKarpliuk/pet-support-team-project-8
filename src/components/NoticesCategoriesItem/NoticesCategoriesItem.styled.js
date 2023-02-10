import styled from "styled-components";
import theme from "../../theme";
import { BsHeart } from "react-icons/bs";

const Item = styled.li`
width: 280px;
height: 606px;

background: ${theme.colors.white};

box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 0px 0px 20px 20px;`

const TextContainer = styled.div`
padding: 20px;`

const ImageContainer = styled.div`
position: relative;`

const Category = styled.span`
position: absolute;
width: 158px;
height: 28px;
left: 0;
top: 20px;

background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(2px);

font-family: ${theme.fonts.inter};
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.xs};
line-height: 1.25;

text-align: center;
letter-spacing: 0.04em;

color: ${theme.colors.black};
`

const Title = styled.h2`
font-family:${theme.fonts.manrope};
font-weight: ${theme.fontWeights.bold};
font-size: 28px;
line-height: 1.357;
letter-spacing: -0.01em;
margin-bottom: 20px;
color:${theme.colors.black};`

const Info = styled.div`
display: flex;
align-items: center;
text-align: center;
gap: 40px;
`

const InfoList = styled.ul`
font-family:${theme.fonts.manrope};
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.m};
line-height: 1.375;

display: flex;
flex-direction: column;
align-items: flex-start;
text-align: center;

color:${theme.colors.black};`

const AddToFav = styled.button`
position: absolute;
width: 44px;
padding: 0;
height: 44px;
right: 12px;
top: 12px;
border: none;
border-radius: ${theme.radius.round};
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(2px);
`

const Heart = styled(BsHeart)`
margin: 0 auto;
display: block;
width: 28px;
height: 28px;
fill: rgba(255, 255, 255, 0.6);
stroke: ${theme.colors.accent};
backdrop-filter: blur(50px);`

const elements = { AddToFav, Item, Title, InfoList, Info, TextContainer, Category, ImageContainer, Heart }

export default elements