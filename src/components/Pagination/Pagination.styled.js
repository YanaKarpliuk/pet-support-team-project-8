import styled from "styled-components";
import theme from "../../theme";
import { PaginationItem } from "@mui/material";

const Container = styled.div`
display: ${props => {
        if (props.totalPages === 1) {
            return 'none'
        }
        return 'flex'
    }};
justify-content: center;
margin-top: 30px; `

const LoadItem = styled(PaginationItem)`
font-family: ${theme.fonts.manrope};
font-weight: ${theme.fontWeights.normal};
text-align: center;
letter-spacing: 0.04em;
color: ${theme.colors.black};

@media screen and(${theme.media.mobile}) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.357;
    padding: 8px 28px;
}

font-size: 20px;
line-height: 1.35;

padding: 10px 28px;
background-color: ${theme.colors.white};
border: 2px solid ${theme.colors.accent};
border-radius: 40px;
transition: background-color 200ms, color 200ms;

&.css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root:hover, &.css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root:focus, &.css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
};
&.css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover, &.css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:focus {
    background-color: #FF6101;
    color: ${theme.colors.white};
};
cursor: pointer`;

const elements = { Container, LoadItem }

export default elements