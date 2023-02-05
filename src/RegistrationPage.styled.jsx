import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';
import img from './images/register/register-Down-BG-image-mobile@1x.svg';

const Container = styled.div`
  font-family: 'Manrope', sans-serif;
  width: 100%;
  height: ${props => props.viewportHeight}px;
  padding-top: 100px;
  background-color: #fdf7f2;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  text-align: center;
  margin: 0;
  color: #111111;
`;

const Form = styled(FormikForm)`
  padding: 40px 20px;
`;

const Input = styled(Field)`
  width: 100%;
  height: 40px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: #000000;
  padding: 11px 14px 12px 14px;
  outline: 1px solid #fc721c;
  border: none;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;
  caret-color: rgba(245, 146, 86, 0.5);
  transition: all 150ms ease-out;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }

  &:focus,
  &:hover {
    outline: 2px solid #fc721c;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  margin-top: 40px;
  color: #ffffff;
  background-color: #f59256;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 150ms ease-out;

  &:focus,
  &:hover {
    background-color: #fb731e;
    box-shadow: 0px 15px 20px rgba(65, 65, 65, 0.4);
    transform: scale(1.01);
  }
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
`;
const LinkToLogin = styled.span`
  color: #3091eb;
  text-decoration: underline;
  margin-left: 4px;
  cursor: pointer;
  transition: all 150ms ease-out;

  &:focus,
  &:hover {
    color: #047ff1;
  }
`;

const styles = { Container, Title, Input, Form, Button, Text, LinkToLogin };
export default styles;
