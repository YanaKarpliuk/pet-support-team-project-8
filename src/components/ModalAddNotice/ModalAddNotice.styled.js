import styled from "styled-components";
import { Field, Form } from 'formik';

const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 40px 80px;

  @media ${p => p.theme.media.mobile} {
    padding: 20px 40px;
  }
`;

const Title = styled.h1`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 36px;
  color: ${p => p.theme.colors.black};
  line-height: 49px;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
    @media ${p => p.theme.media.mobile} {
    margin: 28px;}
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  gap: 12px;
  @media ${p => p.theme.media.mobile} {
    width: 100%;
  }
`;
const Label = styled.label`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.ml};
  
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
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;
  caret-color: ${({ theme }) => theme.colors.accent};
  transition: all 100ms ease-in;

  @media @media ${p => p.theme.media.tablet} {
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

    @media ${p => p.theme.media.mobile} {
      font-size: 18px;
      line-height: 1.38;
      width: 100%;
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

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
  @media ${p => p.theme.media.mobile} {
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin: 0;
    align-items: center;
    text-align: center;
  }
`;

const Btn = styled.button`
  border: ${p => p.theme.borders.box};
  border-radius: ${p => p.theme.radius.normal};
  width: 180px;
  padding: 10px 28px;
  font-family: ${p => p.theme.fonts.manrope};
  font-size: 20px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  letter-spacing: 0.07em;

  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media ${p => p.theme.media.tablet} {
    margin: ${p => p.theme.space[0]}px;
    font-size: 20px;
  }

  @media ${p => p.theme.media.desktop} {
    margin-top: ${p => p.theme.space[0]}px;
  }

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

const steyles = { Forma, Title, Input, Label, InputBox, BtnBox, Btn }

export default steyles