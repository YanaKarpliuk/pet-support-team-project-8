import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import forms from '../components/RegisterForms/RegisterForms';
import styles from './RegisterPage.styled';
const { Container, FormWrap, Title, Text, LinkToLogin } = styles;
const { FirstStepRegisterForm, SecondStepRegisterForm } = forms;

const firstStepInitialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const secondStepInitialState = {
  name: '',
  location: '',
  number: '',
};

const RegisterPage = () => {
  const [firstStep, setFirstStep] = useState(firstStepInitialState);
  const [secondStep, setSecondStep] = useState(secondStepInitialState);
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(null);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const handleSubmitFirstStep = ({ email: userEmail, password, confirmPassword }) => {
    setFirstStep({ email: userEmail.trim(), password, confirmPassword });
    setIsFirstStepComplete(true);
  };

  const handleSubmitSecondStep = async values => {
    setSecondStep({
      name: values.name.trim(),
      location: values.location.trim(),
      number: values.number,
    });
  };

  return (
    <Container isFirstStepComplete={isFirstStepComplete} viewportHeight={viewportHeight}>
      <FormWrap isFirstStepComplete={isFirstStepComplete}>
        <Title>Registration</Title>
        {!isFirstStepComplete ? (
          <FirstStepRegisterForm state={firstStep} handleSubmit={handleSubmitFirstStep} />
        ) : (
          <SecondStepRegisterForm
            state={secondStep}
            setState={setSecondStep}
            handleSubmit={handleSubmitSecondStep}
            setIsFirstStepComplete={setIsFirstStepComplete}
          />
        )}
        <Text>
          Already have an account?
          {/* <LinkToLogin to="/login">Login</LinkToLogin> */}
          <LinkToLogin to="/">Login</LinkToLogin>
        </Text>
      </FormWrap>
    </Container>
  );
};

export default RegisterPage;
