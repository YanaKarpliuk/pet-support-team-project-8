import styled from "styled-components";
import theme from '../../theme'

const SearchBarContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (${theme.media.mobile}) {
margin-top: 28px;
margin-bottom: 40px;
}

margin-top: 40px;
margin-bottom: 60px;`

const Form = styled.form`
position: relative;
display: inline-block;

@media screen and (${theme.media.mobile}) {
width: 280px;
};

width: 608px;
`

const Input = styled.input`
@media screen and (${theme.media.mobile}) {
height: 40px;
font-size: ${theme.fontSizes.m};
line-height: 1.375;
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

padding: 0 0 0 10px;

color: #535353;
font-family: ${theme.fonts.manrope};
font-weight: ${theme.fontWeights.normal};
font-size: 20px;
letter-spacing: 0.04em;
`;

const SearchBtn = styled.button`
position: absolute;
top: 50%;
right: 0;
transform: translate(0, -50%);

@media screen and (${theme.media.mobile}) {
width: 15%;
height: 40px;
};

width: 7%;
height: 44px;

padding: 0;
background: transparent;

border: ${theme.borders.none};
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;

cursor: pointer;`

const elements = { Form, Input, SearchBtn, SearchBarContainer }

export default elements
