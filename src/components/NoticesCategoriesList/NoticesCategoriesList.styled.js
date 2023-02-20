import styled from "styled-components";

const List = styled.ul`
display: grid;
justify-content: center;

@media screen and (max-width: 1279px) and (min-width: 768px) {
        grid-template-columns: repeat(2, 336px);
}

@media screen and (min-width: 1280px) {
        grid-template-columns: repeat(4, 288px);
}
 gap: 32px;

`

const elements = { List }

export default elements