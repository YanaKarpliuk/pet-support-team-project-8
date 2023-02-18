import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import authOperations from '../../redux/auth/authOperations';
import authStore from '../../redux/auth/authReducer';
import authSelectors from '../../redux/auth/authSelectors';
import toastOptions from '../../utils/toastErrorOptions';

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
  StyledToastContainer,
  Text,
  Title,
} from './LoginForm.styled';

const { LoginSchema } = schemas;
const { login } = authOperations;
const { selectError, selectIsLoading } = authSelectors;

const { removeError } = authStore;
const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [isShownPass, setIsShownPass] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error, toastOptions);
      dispatch(removeError());
    }
  }, [error, dispatch]);

  const togglePassword = () => setIsShownPass(isShown => !isShown);

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    const normalizedEmail = email.trim().toLowerCase();
    const { error } = await dispatch(login({ email: normalizedEmail, password }));
    if (!error) {
      resetForm();
      return;
    }
  };

  return (
    <FormWrap>
      <Title>Login</Title>
      <motion.div
        initial={{ x: -320, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        animate={{ x: 0, opacity: 1 }}
      >
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
      </motion.div>
      <Text>
        Don't have an account?
        <LinkToRegister to="/register">Register</LinkToRegister>
      </Text>
      {isLoading && <Loader viewportWidth={viewportWidth} />}
      <StyledToastContainer />
    </FormWrap>
  );
};

export default LoginForm;
