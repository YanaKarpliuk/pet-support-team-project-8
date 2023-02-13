import styled from "styled-components";
import theme from "../../theme";
import { TiHeartFullOutline } from "react-icons/ti";
import { IoTrash } from "react-icons/io5"

const Item = styled.li`
width: 280px;

@media screen and (${theme.media.tablet}) {
    width: 336px;
}
background: ${theme.colors.white};

box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 0px 0px 20px 20px;`

const TextContainer = styled.div`
padding: 20px;
padding-bottom: 32px;`

const ImageContainer = styled.div`
position: relative;
width: 280px;
height: 288px;

@media screen and (${theme.media.tablet}) {
    width: 336px;
}

& > img {
    display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
}`

const Category = styled.span`
position: absolute;
width: 158px;
height: 28px;
left: 0;
top: 20px;

background: rgba(255, 255, 255, 0.6);
border-top-right-radius: ${theme.radius.normal};
border-bottom-right-radius: ${theme.radius.normal};
backdrop-filter: blur(2px);

font-family: ${theme.fonts.inter};
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.xs};
line-height: 1.25;

display: flex;
align-items: center;
justify-content: center;
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
margin-bottom: ${props => props.category === 'sell' ? "20px" : "50px"};
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

color:${theme.colors.black};

& > li:not(:first-child) {
    margin-top: 8px;
}`

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

cursor: pointer;
`

const Heart = styled(TiHeartFullOutline)`
margin: 0 auto;
display: block;
width: 28px;
height: 28px;
fill: rgba(255, 255, 255, 0.6);
stroke: ${theme.colors.accent};
    stroke-width: 2px;
transition: fill 200ms, stroke 200ms;

${AddToFav}:hover &, ${AddToFav}:focus & {
    fill: #FF6101;
    stroke: #FF6101;
} `

const BtnCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;`

const NoticeBtn = styled.button`
padding: 8px 0;
width: 248px;
display: flex;
justify-content: center;
align-items: center;

background: ${theme.colors.white};
border: 2px solid ${theme.colors.accent};
border-radius: ${theme.radius.normal};

font-family:${theme.fonts.manrope};
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.m};
line-height: 1.375;

text-align: center;
letter-spacing: 0.04em;
cursor: pointer;
color: ${theme.colors.accent};
transition: color 200ms, border 200ms;

&:focus, &:hover {
border: 2px solid #FF6101;
color: #FF6101;

}`

const Trash = styled(IoTrash)`
display: block;
width: 20px;
height: 20px;
margin-left: 13px;
`

const elements = { Trash, BtnCont, NoticeBtn, AddToFav, Item, Title, InfoList, Info, TextContainer, Category, ImageContainer, Heart }

export default elements