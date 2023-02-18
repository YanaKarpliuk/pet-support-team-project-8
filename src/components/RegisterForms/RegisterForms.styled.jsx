import { Field } from 'formik';
import { AiOutlineEye } from 'react-icons/ai';
import styled from 'styled-components';

const InputWrap = styled.div`
  position: relative;
  margin-bottom: ${({ isError }) => (isError ? '30px' : '16px')};
`;

const InputPassWrap = styled.div`
  position: relative;
  color: ${({ isShownPass, theme }) => (isShownPass ? theme.colors.black : theme.colors.accent)};
  &:not(:last-of-type) {
    margin-bottom: ${({ isError }) => (isError ? '30px' : '16px')};
  }
`;

const Input = styled(Field)`
  width: 100%;
  height: 40px;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};
  padding: 11px 14px 12px 14px;
  outline: 1px solid ${({ theme }) => theme.colors.accent};
  border: none;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;
  caret-color: ${({ theme }) => theme.colors.accent};
  transition: all 100ms ease-in;

  @media screen and (min-width: 768px) {
    height: 52px;
    font-size: 20px;
    padding: 14px 14px 13px 32px;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  &::placeholder {
    font-family: inherit;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.38;
    }
  }

  &::-ms-reveal {
    display: none;
  }

  &:focus,
  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.accent};

    @media screen and (min-width: 768px) {
      outline-width: 3px;
    }
  }
`;

const InputPass = styled(Input)`
  color: inherit;
  padding-right: 40px;

  @media screen and (min-width: 768px) {
    padding-right: 50px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  padding: 0px;
  margin-top: ${({ secondStep }) => (secondStep ? '28px' : '40px')};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 150ms ease-out;

  &:focus,
  &:hover {
    outline: none;
    background-color: #fb731e;
    box-shadow: 0px 15px 20px rgba(65, 65, 65, 0.4);
    transform: scale(1.01);
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
  }
`;

const BackBtn = styled(Button)`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.black};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #fb731e;
    box-shadow: 0px 15px 20px rgba(65, 65, 65, 0.4);
    border-color: #fb731e;
    outline: none;
    transform: scale(1.01);
  }

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`;

const EyeIconSlash = styled.span`
  display: ${({ isShownPass }) => (isShownPass ? 'none' : 'inline-block')};
  position: absolute;
  right: 22px;
  top: 6px;
  width: 1.5px;
  height: 28px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
  transform: rotate(40deg);
  pointer-events: none;

  @media screen and (min-width: 768px) {
    right: 30px;
    top: 9px;
    height: 30px;
    transform: rotate(50deg);
  }
`;

const EyeIcon = styled(AiOutlineEye)`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 8px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    right: 15px;
    top: 10px;
  }
`;
const styles = {
  Input,
  InputPass,
  Button,
  BackBtn,
  InputWrap,
  InputPassWrap,
  EyeIconSlash,
  EyeIcon,
};
export default styles;
