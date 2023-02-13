import styled from 'styled-components';
import { Field, Form } from 'formik';

const Container = styled.div`
  padding: 40px 80px;
  width: 100%;
  height: 100%;
  height: 95vh;
  overflow: hidden;
  overflow-y: auto;
  @media ${p => p.theme.media.mobile} {
    padding: 20px 40px;
  }
`;
const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 28px;
  @media ${p => p.theme.media.mobile} {
    gap: 16px;
    width: 240px;
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
    margin: 28px;
  }
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  display: flex;
  text-align: flex-start;
  justify-content: start;
  align-items: start;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: 0.04em;
  background-color: ${p => p.theme.colors.bg};
  color: ${({ theme }) => theme.colors.black};
  padding: 11px 14px 10px 14px;
  outline: 1px solid ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  carent-color: ${({ theme }) => theme.colors.accent};
  transition: all 100ms ease-in;

  @media ${p => p.theme.media.tablet} {
    height: 48px;
    font-size: 20px;
    padding: 11px 14px 10px 32px;
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
const AddPhoto = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 182px;
  height: 182px;
  background-color: ${p => p.theme.colors.bg};
  border-radius: 40px;
`;
const CategoriesBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 448px;
  margin-bottom: 28px;
  @media ${p => p.theme.media.mobile} {
    flex-wrap: wrap;
    gap: 8px;
    width: 240px;
  }
`;

const Option = styled.button`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: center;
  height: 47px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  @media ${p => p.theme.media.mobile} {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.357;
    padding: 8px 28px;
  }

  font-size: 20px;
  line-height: 1.35;

  padding: 10px 28px;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;
  transition: background-color 200ms, color 200ms;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  cursor: pointer;
`;

const TextBox = styled.div`
  width: 443px;
  text-align: center;
  margin-bottom: 28px;
  @media ${p => p.theme.media.mobile} {
    width: 240px;
  }
`;
const Text = styled.span`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.01em;
`;
const LabelMale = styled.label`
  display: grid;
  gap: 12;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 20px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

const steyles = {
  Container,
  Forma,
  Title,
  Input,
  Label,
  InputBox,
  BtnBox,
  Btn,
  AddPhoto,
  CategoriesBox,
  Option,
  TextBox,
  Text,
  LabelMale,
};

export default steyles;
