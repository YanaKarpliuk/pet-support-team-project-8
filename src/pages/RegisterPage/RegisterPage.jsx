import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import toastOptions from '../../utils/toastErrorOptions';
import authOperations from '../../redux/auth/authOperations';
import authStore from '../../redux/auth/authReducer';
import authSelectors from '../../redux/auth/authSelectors';
import forms from '../../components/RegisterForms/RegisterForms';
import styles from './RegisterPage.styled';
const { Container, FormWrap, Title, Text, LinkToLogin, StyledToastContainer } = styles;
const { FirstStepRegisterForm, SecondStepRegisterForm } = forms;
const { selectError, selectIsLoading } = authSelectors;
const { register, login } = authOperations;
const { removeError } = authStore;

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
  const [viewportWidth, setViewportWidth] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error, toastOptions);
      dispatch(removeError());
    }
  }, [error, dispatch]);

  const handleSubmitFirstStep = ({ email: userEmail, password, confirmPassword }) => {
    setFirstStep({ email: userEmail.trim(), password, confirmPassword });
    setIsFirstStepComplete(true);
  };

  const handleSubmitSecondStep = async values => {
    const { name, location, number } = values;
    const phoneNumber = `+${number.replace(/[^\d]/g, '')}`;
    setSecondStep({
      name: name.trim(),
      location: location.trim(),
      number,
    });
    const { email, password } = firstStep;
    const { error } = await dispatch(
      register({ email, password, name, city: location, phone: phoneNumber })
    );
    if (error) {
      return setIsFirstStepComplete(false);
    }
    const { error: loginError } = await dispatch(login({ email, password }));
    if (loginError) {
      return setIsFirstStepComplete(false);
    }
    setSecondStep({ ...secondStepInitialState });
    setFirstStep({ ...firstStepInitialState });
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
            isLoading={isLoading}
          />
        )}
        <Text>
          Already have an account?
          <LinkToLogin to="/login">Login</LinkToLogin>
        </Text>
      </FormWrap>
      {isLoading && <Loader viewportWidth={viewportWidth} />}
      <StyledToastContainer />
    </Container>
  );
};

export default RegisterPage;
