import styled from "styled-components";
import theme from "../../theme";

const List = styled.ul`
display: grid;
justify-content: center;

@media screen and (${theme.media.mobile}) {
    gap: 40px;
}

@media screen and (${theme.media.tablet}) {
        grid-template-columns: repeat(2, 336px);
}

@media screen and (${theme.media.desktop}) {
        grid-template-columns: repeat(3, 395px);
}
 gap: 60px 32px;

`

const elements = { List }

export default elements