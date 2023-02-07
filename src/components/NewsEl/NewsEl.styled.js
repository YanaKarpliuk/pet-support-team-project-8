import styled from "styled-components";
import theme from "../../theme";

const ListItem = styled.li`
@media screen and (${theme.media.mobile}) {
    max-width: 280px;
}
    width: 100%;
    
    &::before{
        display: block;
        content: ' ';
        height: 4px;

        @media screen and (${theme.media.mobile}) {
    width: 70%;
}

@media screen and (${theme.media.tablet}) {
        width: 80%;
}

@media screen and (${theme.media.desktop}) {
       width: 85%;
}
        
        background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
border-radius: 40px;
    }`

const FirstHalf = styled.div`
font-family: ${theme.fonts.manrope};
@media screen and (${theme.media.mobile}) {
    margin-bottom: 20px;
}
    margin-bottom: 40px;`

const Title = styled.h2`
color: ${theme.colors.black};
font-weight: ${theme.fontWeights.bold};
font-size: 24px;
line-height: 1.375;
letter-spacing: -0.01em;
margin-bottom: 16px;`

const Text = styled.p`
font-size: ${theme.fontSizes.m};
line-height: 1.375;
color: #111321;`

const SecondHalf = styled.div`
display: flex;
justify-content: space-between;`

const Date = styled.span`
font-family: ${theme.fonts.manrope};
font-size: ${theme.fontSizes.m};
line-height: 1.375;
color: rgba(17, 17, 17, 0.6);
`

const Link = styled.a`
font-family: ${theme.fonts.manrope};
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.m};
line-height: 1.375;
text-align: right;
color: ${theme.colors.accent};
text-decoration-line: underline;
transition: color 200ms ease-in-out;

&:hover, &:active {
    color: #FF6101
}
`

const elements = { ListItem, FirstHalf, Title, Text, SecondHalf, Link, Date }

export default elements