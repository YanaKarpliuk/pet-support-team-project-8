import styled from "styled-components";
import theme from "../../theme";
import makeHeightViewport from "../../hooks/makeHeightViewport";
import makeHeightAuto from "../../hooks/makeHeightAuto";

const List = styled.ul`
display: grid;
justify-content: center;

${props => {
                if (props.items <= 3 && window.innerWidth >= 1280) {
                        makeHeightViewport()
                } else if (props.items <= 2 && window.innerWidth < 1280 && window.innerWidth >= 768) {
                        makeHeightViewport()
                } else if (props.items <= 1 && window.innerWidth < 768) {
                        makeHeightViewport()
                } else {
                        makeHeightAuto()
                }
        }}

@media screen and (${theme.media.mobile}) {
    gap: 40px;
};

@media screen and (${theme.media.tablet}) {
        grid-template-columns: repeat(2, 336px);
};

@media screen and (${theme.media.desktop}) {
        grid-template-columns: repeat(3, 395px);
};
 gap: 60px 32px;

`

const elements = { List }

export default elements