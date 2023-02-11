import styled from "styled-components";
import theme from "../../theme";
import mobileBg from "../../images/home/bg-mobile.svg";
import desktopBg from "../../images/home/bg-desktop.svg";
import tabletBg from "../../images/home/bg-tablet.svg";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 20px 0;
  height: 100%;
  justify-content: space-between;

  @media screen and (${theme.media.tablet}) {
    padding: 88px 30px 0;
  }

  @media screen and (${theme.media.desktop}) {
    padding: 60px 16px 0;
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
  max-width: 280px;
  position: relative;
  z-index: 1;

  @media screen and (${theme.media.tablet}) {
    font-size: 68px;
    line-height: 100px;
    max-width: 588px;
  }

  @media screen and (${theme.media.desktop}) {
    font-size: 68px;
    line-height: 100px;
    flex: 1;
    max-width: none;
    max-width: 588px;
  }
`;

const ImgWrap = styled.div`
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  right: 0;
  @media screen and (${theme.media.tablet}) {
    & > img {
      max-height: 100%;
    }
    position: absolute;
    bottom: 0;
    right: 10%;
  }

  @media screen and (${theme.media.desktop}) {
    flex: 1;
  }
`;

const Container = styled.section`
  background-color: ${theme.colors.bg};
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 100%;
  margin-top: 67px;

  @media screen and (${theme.media.tablet}) {
    background-image: url(${tabletBg});
    margin-top: 82px;
  }

  @media screen and (${theme.media.desktop}) {
    background-image: url(${desktopBg});
    margin-top: 82px;
  }
`;

const elements = { Box, Title, ImgWrap, Container };

export default elements;
