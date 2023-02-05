import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styles from './RegistrationPage.styled';
const { Container, Title, Input, Form, Button, Text, LinkToLogin } = styles;

const firstStepSchema = Yup.object().shape({
  email: Yup.string()
    .email('invalid email')
    .matches(/^[\w-\d]+@([\w-]+\.)+[\w-]{2,3}$/, 'invalid email')
    .required('require field'),
  password: Yup.string()
    .min(5, 'password too short (min 6)')
    .max(20, 'password too long (max 20)')
    .matches(/\d+/, 'Password must contain number')
    .matches(/[!@#$%^&*()-+]+/, 'Password must contain special char')
    .required('require field'),
});

const secondStepSchema = Yup.object().shape({
  name: Yup.string()
    .email('invalid email')
    .matches(/^[\w-\d]+@([\w-]+\.)+[\w-]{2,3}$/, 'invalid email')
    .required('require field'),
  city: Yup.string().required('require field'),
  number: Yup.string()
    .matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, 'invalid number. Valid format: (123-45-67)')
    .required('require field'),
});

const firstStepInitialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const secondStepInitialState = {
  name: '',
  city: '',
  number: '',
};

const RegistrationPage = () => {
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const [isSecondStepComplete, setIsSecondStepComplete] = useState(false);
  const [firstStep, setFirstStep] = useState(firstStepInitialState);
  const [secondStep, setSecondStep] = useState(secondStepInitialState);
  const [viewportHeight, setViewportHeight] = useState(null);

  useEffect(() => {
    console.log('firstStep', firstStep);
    setViewportHeight(window.innerHeight);
  }, [firstStep]);

  const handleSubmitFirstStep = values => {
    setFirstStep(s => ({ ...s, email: values.email }));
    console.log('VAL', values);
    console.log(firstStep.email);
    if (!values.email || !values.password || !values.confirmPassword)
      return console.log('You have empty fields');
    const email = values.email.trim();
    const password = values.password.trim();
  };

  const handleSubmitSecondStep = () => {};

  return (
    <Container viewportHeight={viewportHeight}>
      <Title>Registration</Title>
      <Formik
        initialValues={firstStepInitialState}
        // validationSchema={firstStepSchema}
        onSubmit={handleSubmitFirstStep}
      >
        {({ errors, touched, setErrors }) => (
          <>
            <Form autoComplete="off">
              <Input type="text" name="email" placeholder="Email" />
              <Input type="text" name="password" placeholder="Password" />
              <Input type="text" name="confirmPassword" placeholder="Confirm Password" />
              <Button type="submit">Next</Button>
            </Form>
            <Text>
              Already have an account?
              <LinkToLogin>Login</LinkToLogin>
              {/* <LinkToLogin to="/login">Login</LinkToLogin> */}
            </Text>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default RegistrationPage;
