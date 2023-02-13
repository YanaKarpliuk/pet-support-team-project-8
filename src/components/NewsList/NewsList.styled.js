import styled from "styled-components";
import theme from "../../theme";
import makeHeightViewport from "../../hooks/makeHeightViewport";
import makeHeightAuto from "../../hooks/makeHeightAuto";

const List = styled.ul`
display: grid;
justify-content: center;

@media screen and (${theme.media.mobile}) {
    gap: 40px;
    ${props => {
                if (props.items > 1) {
                        makeHeightAuto()
                } else {
                        makeHeightViewport()
                }
        }}
};

@media screen and (${theme.media.tablet}) {
        grid-template-columns: repeat(2, 336px);
         ${props => {
                if (props.items <= 2) {
                        makeHeightViewport()
                } else {
                        makeHeightAuto()
                }
        }}
};

@media screen and (${theme.media.desktop}) {
        grid-template-columns: repeat(3, 395px);
         ${props => {
                if (props.items <= 3) {
                        makeHeightViewport()
                } else {
                        makeHeightAuto()
                }
        }}
};
 gap: 60px 32px;

`

const elements = { List }

export default elements