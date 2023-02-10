import styled from "styled-components";
import theme from "../../theme";

const List = styled.ul`
display: grid;
justify-content: center;

/* @media screen and (${theme.media.mobile}) {
    gap: 32px;
} */

@media screen and (${theme.media.tablet}) {
        grid-template-columns: repeat(2, 336px);
}

@media screen and (${theme.media.desktop}) {
        grid-template-columns: repeat(4, 288px);
}
 gap: 32px;

`

const elements = { List }

export default elements