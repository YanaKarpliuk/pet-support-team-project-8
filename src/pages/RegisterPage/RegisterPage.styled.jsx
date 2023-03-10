import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import mobileBgImgFirstStep from '../../images/register/register-Down-BG-image-mobile.svg';
import mobileBgImgSecondStep from '../../images/register/register2Step-Down-BG-image-mobile.svg';
import tabletBgImg from '../../images/register/register-Down-BG-image-tablet.svg';
import desktopBgImg from '../../images/register/register-Down-BG-image-desktop.svg';

const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.manrope};
  width: 100%;
  height: ${props => props.viewportHeight - 0.5}px;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.colors.bg};
  background-image: ${({ isFirstStepComplete: t }) =>
    `url(${t ? mobileBgImgSecondStep : mobileBgImgFirstStep})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
    background-image: url(${tabletBgImg});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktopBgImg});
  }
`;

const FormWrap = styled.div`
  width: 100%;
  padding: 0px 20px 0px 20px;

  @media screen and (min-width: 600px) {
    padding-left: 2px;
    padding-right: 2px;
    width: 550px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 608px;
    max-height: ${({ isFirstStepComplete }) => (isFirstStepComplete ? '577px' : '517px')};
    padding: 60px 80px 40px 80px;
    background-color: ${({ theme }) => theme.colors.white};
    margin: 0;
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    overflow: hidden;
  }

  @media screen and (min-width: 1280px) {
    top: ${({ isFirstStepComplete }) => (isFirstStepComplete ? '112px' : '114px')};
    transform: translate(50%, 0%);
    width: 618px;
    max-height: ${({ isFirstStepComplete }) => (isFirstStepComplete ? '605px' : '541px')};
    padding-bottom: 60px;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.33;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: 1.36;
  }
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.33;
  text-align: center;
  letter-spacing: 0.04em;
  margin-top: 40px;
  color: rgba(17, 17, 17, 0.6);
`;

const LinkToLogin = styled(Link)`
  color: #3091eb;
  text-decoration: underline;
  margin-left: 4px;
  cursor: pointer;
  transition: all 50ms ease-out;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-family: ${({ theme }) => theme.fonts.manrope};
    min-width: 100px;
    min-height: 50px;
    background-color: #fde6d8;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width: 768px) {
      width: 250px;
      min-height: 60px;
    }
    @media screen and (min-width: 1280px) {
      width: 300px;
      min-height: 70px;
    }
  }
  --toastify-icon-color-error: #ea0808;
  .Toastify__progress-bar {
    background-color: ${({ theme }) => theme.colors.accent};
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const styles = {
  Container,
  FormWrap,
  Title,
  Text,
  LinkToLogin,
  StyledToastContainer,
};
export default styles;
