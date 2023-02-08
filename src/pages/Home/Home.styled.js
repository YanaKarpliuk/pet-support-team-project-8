import styled from "styled-components";
import theme from "../../theme";
import mobileBg from "../../img/bg-mobile.svg";
import desktopBg from "../../img/bg-desktop.svg";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  justify-content: space-between;

  @media screen and (${theme.media.tablet}) {
  }
  @media screen and (${theme.media.desktop}) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const Title = styled.h1`
  align-self: start;
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.l};
  line-height: 44px;

  @media screen and (${theme.media.tablet}) {
    font-size: 68px;
    line-height: 100px;
  }

  @media screen and (${theme.media.desktop}) {
    font-size: 68px;
    line-height: 100px;
    flex: 1;
  }
`;

const ImgWrap = styled.div`
  margin: 0 auto;
  @media screen and (${theme.media.tablet}) {
  }

  @media screen and (${theme.media.desktop}) {
    flex: 1;
  }
`;

const Container = styled.section`
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 100%;
  @media screen and (${theme.media.tablet}) {
  }

  @media screen and (${theme.media.desktop}) {
    background-image: url(${desktopBg});
  }
`;

const elements = { Box, Title, ImgWrap, Container };

export default elements;
