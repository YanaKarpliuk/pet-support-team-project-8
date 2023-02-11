import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import schemas from '../../schemas/schemas';
import FormError from '../FormError/FormError';
import {
  Button,
  EyeIcon,
  EyeIconSlash,
  FormWrap,
  Input,
  InputPass,
  InputPassWrap,
  InputWrap,
  LinkToRegister,
  Text,
  Title,
} from './LoginForm.styled';

const { LoginSchema } = schemas;

const LoginForm = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [isShownPass, setIsShownPass] = useState(false);
  const [state, setState] = useState(initialState);

  const togglePassword = () => setIsShownPass(isShown => !isShown);

  const handleSubmit = async ({ email: userEmail, password }) => {
    setState({
      email: userEmail.trim(),
      password,
    });
    await console.log(state);
  };

  return (
    <FormWrap>
      <Title>Login</Title>
      <Formik
        initialValues={initialState}
        validationSchema={LoginSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ errors, setFieldValue }) => (
          <Form autoComplete="off">
            <InputWrap isError={errors.email}>
              <Input type="text" name="email" placeholder="Email" />
              {errors.email && <FormError name="email" />}
            </InputWrap>
            <InputPassWrap isError={errors.password} isShownPass={isShownPass}>
              <InputPass
                type={isShownPass ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                onChange={e => setFieldValue('password', e.target.value.trim(), false)}
              />
              <EyeIcon
                color={'#F59256'}
                onClick={togglePassword}
                title={isShownPass ? 'hide password' : 'show password'}
              />
              <EyeIconSlash isShownPass={isShownPass} />
              {errors.password && <FormError name="password" />}
            </InputPassWrap>
            <Button type="submit">Login</Button>
          </Form>
        )}
      </Formik>
      <Text>
        Don't have an account?
        <LinkToRegister to="/register">Register</LinkToRegister>
      </Text>
    </FormWrap>
  );
};

export default LoginForm;
