import { Field } from 'formik';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import theme from '../../theme';

export const FormWrap = styled.div`
  width: 100%;
  padding: 0px 20px 0px 20px;
  overflow: hidden;

  @media screen and (${theme.media.fromTablet}) {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 608px;
    padding: 60px 80px 40px 80px;
    background-color: ${theme.colors.white};
    margin: 0;
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }

  @media screen and (${theme.media.desktop}) {
    top: 112px;
    transform: translate(50%, 0%);
    width: 618px;
    padding-bottom: 60px;
  }
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.ml};
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.33;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  color: ${theme.colors.black};

  @media screen and (${theme.media.fromTablet}) {
    font-size: 36px;
    font-weight: ${theme.fontWeights.normal};
    line-height: 1.36;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: ${({ isError }) => (isError ? '24px' : '16px')};
`;

export const InputPassWrap = styled.div`
  position: relative;
  color: ${({ isShownPass }) => (isShownPass ? theme.colors.black : theme.colors.accent)};
`;

export const Input = styled(Field)`
  width: 100%;
  height: 40px;
  font-family: inherit;
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.m};
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  padding: 11px 14px 12px 14px;
  outline: 1px solid ${theme.colors.accent};
  border: none;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;
  caret-color: ${theme.colors.accent};
  transition: all 100ms ease-in;

  @media screen and (${theme.media.fromTablet}) {
    height: 52px;
    font-size: 20px;
    padding: 14px 14px 13px 32px;
    background-color: ${theme.colors.bg};
  }

  &::placeholder {
    font-family: inherit;
    font-weight: 400;
    font-size: ${theme.fontSizes.s};
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);

    @media screen and (${theme.media.fromTablet}) {
      font-size: 18px;
      line-height: 1.38;
    }
  }

  &:focus,
  &:hover {
    outline: 2px solid ${theme.colors.accent};

    @media screen and (${theme.media.fromTablet}) {
      outline-width: 3px;
    }
  }
`;

export const InputPass = styled(Input)`
  color: inherit;
  padding-right: 40px;

  @media screen and (${theme.media.fromTablet}) {
    padding-right: 50px;
  }
`;

export const EyeIconSlash = styled.span`
  display: ${({ isShownPass }) => (isShownPass ? 'none' : 'inline-block')};
  position: absolute;
  right: 22px;
  top: 6px;
  width: 1.5px;
  height: 28px;
  border-radius: 2px;
  background-color: ${theme.colors.accent};
  transform: rotate(40deg);
  pointer-events: none;

  @media screen and (min-width: 768px) {
    right: 30px;
    top: 9px;
    height: 30px;
    transform: rotate(50deg);
  }
`;

export const EyeIcon = styled(AiOutlineEye)`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 8px;
  cursor: pointer;

  @media screen and (${theme.media.fromTablet}) {
    width: 30px;
    height: 30px;
    right: 15px;
    top: 10px;
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  line-height: 1.33;
  text-align: center;
  letter-spacing: 0.04em;
  margin-top: 40px;
  color: ${theme.colors.blackSemitransparent};
`;

export const LinkToRegister = styled(Link)`
  color: ${theme.colors.blue};
  text-decoration: underline;
  margin-left: 4px;
  cursor: pointer;
  transition: all 50ms ease-out;

  &:focus,
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  font-weight: ${theme.fontWeights.normal};
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  padding: 0px;
  margin-top: 40px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 150ms ease-out;

  &:focus,
  &:hover {
    outline: none;
    background-color: ${theme.colors.accentHover};
    box-shadow: 0px 15px 20px rgba(65, 65, 65, 0.4);
    transform: scale(1.01);
  }

  @media screen and (${theme.media.fromTablet}) {
    margin-top: 40px;
  }

  @media screen and (${theme.media.desktop}) {
    height: 48px;
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-family: ${theme.fonts.manrope};
    min-width: 100px;
    min-height: 50px;
    background-color: #fde6d8;
    color: ${theme.colors.black};

    @media screen and (${theme.media.fromTablet}) {
      width: 250px;
      min-height: 60px;
    }
    @media screen and (${theme.media.desktop}) {
      width: 300px;
      min-height: 70px;
    }
  }
  --toastify-icon-color-error: #ea0808;
  .Toastify__progress-bar {
    background-color: ${theme.colors.accent};
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    color: ${theme.colors.accent};
  }
`;
