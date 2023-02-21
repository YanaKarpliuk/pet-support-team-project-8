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
  position: relative;
  @media ${p => p.theme.media.mobile} {
    width: 100%;
  }
`;

const InputWrap = styled.div`
  border-radius: ${({ comments }) => (comments ? '20px' : '40px')};
  transition: all 100ms ease-in;

  &:focus-within,
  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.accent};

    @media screen and (min-width: 768px) {
      box-shadow: 0 0 0 1.5px ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Input = styled(Field)`
  width: 100%;
  height: 40px;
  display: flex;
  text-align: flex-start;
  justify-content: start;
  align-items: start;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 0.04em;
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.black};
  padding: 11px 14px 10px 14px;
  border: 1px solid ${p => p.theme.colors.accent};
  outline: none;
  border-radius: 40px;
  cursor: pointer;
  caret-color: ${p => p.theme.colors.accent};

  @media ${p => p.theme.media.tablet} {
    height: 48px;
    font-size: 20px;
    padding: 11px 14px 10px 32px;
    background-color: ${p => p.theme.colors.bg};
  }

  &::placeholder {
    font-family: ${p => p.theme.fonts.manrope};
    font-weight: 400;
    font-size: ${p => p.theme.fontSizes.s};
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
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
  @media ${p => p.theme.media.mobile} {
    flex-direction: column-reverse;
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

const AvatarInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

const AddPhoto = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 182px;
  height: 182px;
  background-color: ${p => p.theme.colors.bg};
  border-radius: 40px;

  ${p =>
    p.preview
      ? `
    background: url(${p.preview}) center center no-repeat;
    background-size: cover;
  `
      : null}
`;

const CategoriesBox = styled.div`
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

const RadioLabel = styled.label`
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

const RadioInput = styled(Field)`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + ${RadioLabel} {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

const SexLabel = styled.label`
  display: grid;
  gap: 12px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 20px;
  text-align: center;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

const SexRadioInput = styled(Field)`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + ${SexLabel} {
    color: ${p => p.theme.colors.accent};
  }
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

const Label = styled.label`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.ml};
`;

const ErrorMsg = styled.div`
  font-family: ${p => p.theme.fonts.manrope};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  color: #e00e0e;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const steyles = {
  Container,
  Forma,
  Title,
  InputWrap,
  Input,
  Label,
  RadioLabel,
  InputBox,
  BtnBox,
  Btn,
  AddPhoto,
  CategoriesBox,
  RadioInput,
  SexRadioInput,
  SexLabel,
  TextBox,
  Text,
  AvatarInput,
  ErrorMsg,
};

export default steyles;
