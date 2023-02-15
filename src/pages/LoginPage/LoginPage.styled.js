import styled from 'styled-components';
import theme from '../../theme';
import desktopBgImg from '../../images/register/register-Down-BG-image-desktop.svg';
import mobileBgImg from '../../images/register/register-Down-BG-image-mobile.svg';
import tabletBgImg from '../../images/register/register-Down-BG-image-tablet.svg';

export const Container = styled.div`
  font-family: ${theme.fonts.manrope};
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: ${theme.colors.bg};
  background-image: url(${mobileBgImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

  @media screen and (min-width: 768px) {
    padding-top: 276px;
    background-image: url(${tabletBgImg});
  }

  @media screen and (min-width: 1280px) {
    padding-top: 148px;
    background-image: url(${desktopBgImg});
  }
`;
