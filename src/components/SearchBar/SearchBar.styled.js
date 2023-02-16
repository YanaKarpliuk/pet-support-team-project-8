import styled from "styled-components";
import theme from '../../theme';
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Form, Field } from 'formik';

const SearchBarContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (${theme.media.mobile}) {
margin-top: 28px;
margin-bottom: 28px;
}
margin-bottom: 40px;
margin-top: 40px;
`

const StyledForm = styled(Form)`
position: relative;
display: inline-block;

@media screen and (${theme.media.mobile}) {
width: 280px;
};

width: 608px;
`

const Input = styled(Field)`
@media screen and (${theme.media.mobile}) {
height: 40px;
font-size: ${theme.fontSizes.m};
line-height: 1.375;
padding: 9px 0 9px 12px;
padding-right:  calc(5% + 20px)
};
width: 100%;
height: 44px;

@media screen and (${theme.media.tablet}) {
border-radius: 40px;
line-height: 1.35;
};

@media screen and (${theme.media.desktop}) {
line-height: 1.2;
};

background: ${theme.colors.white};

box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border: ${theme.borders.none};
border-radius: 20px;

padding: 8px 0 8px 20px;
padding-right: calc(3% + 24px);

color: #535353;
font-family: ${theme.fonts.manrope};
font-weight: ${theme.fontWeights.normal};
font-size: 20px;
letter-spacing: 0.04em;
outline: none;

&:focus {
    outline: 1px solid rgba(245, 146, 86, 0.5);

   
}
`;

const SearchBtn = styled.button`
display: ${props => props.exist ? 'none' : "block"};
cursor: pointer;
position: absolute;
top: 50%;
right: 0;
padding: 0;
padding-right: 3%;
transform: translate(0, -50%);

@media screen and (${theme.media.mobile}) {
height: 40px;
padding-right: 5%;
};

height: 44px;

background: transparent;

border: ${theme.borders.none};
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
`

const ClearBtn = styled.button`
display: ${props => props.exist ? 'block' : "none"};
cursor: pointer;
position: absolute;
top: 50%;
right: 0;
padding: 0;
padding-right: 3%;
transform: translate(0, -50%);

@media screen and (${theme.media.mobile}) {
height: 40px;
padding-right: 5%;
};
height: 44px;
background: transparent;

border: ${theme.borders.none};
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
  `

const MugnifyingGlass = styled(AiOutlineSearch)`
display: block;
@media screen and (${theme.media.mobile}) {
width: 20px;
height: 20px;
 }

  width: 24px; 
  height: 24px;`

const CrissCross = styled(AiOutlineCloseCircle)`
display: block;
 @media screen and (${theme.media.mobile}) {
width: 20px;
height: 20px;
 }

  width: 24px; 
  height: 24px;
`
const elements = { StyledForm, Input, SearchBtn, SearchBarContainer, MugnifyingGlass, CrissCross, ClearBtn }

export default elements
