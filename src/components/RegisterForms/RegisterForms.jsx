import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { motion } from 'framer-motion';
import FormError from '../FormError/FormError';
import onNumberFieldChange from '../../utils/onNumberFieldChange';
import schemas from '../../schemas/schemas';
import styles from './RegisterForms.styled';
const { Input, InputPass, Button, BackBtn, InputWrap, InputPassWrap, EyeIconSlash, EyeIcon } =
  styles;
const { firstStepRegisterSchema, secondStepRegisterSchema } = schemas;

const FirstStepRegisterForm = ({ state, handleSubmit }) => {
  const [isShownPass, setIsShownPass] = useState(false);
  const [isShownConfirmPass, setIsShownConfirmPass] = useState(false);

  const togglePassword = () => setIsShownPass(isShown => !isShown);
  const toggleConfirmPassword = () => setIsShownConfirmPass(isShown => !isShown);

  return (
    <motion.div
      initial={{ x: -320, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Formik
        initialValues={state}
        validationSchema={firstStepRegisterSchema}
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
            <InputPassWrap isShownPass={isShownConfirmPass}>
              <InputPass
                type={isShownConfirmPass ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={e => setFieldValue('confirmPassword', e.target.value.trim(), false)}
              />
              <EyeIcon
                color={'#F59256'}
                onClick={toggleConfirmPassword}
                title={isShownConfirmPass ? 'hide password' : 'show password'}
              />
              <EyeIconSlash isShownPass={isShownConfirmPass} />
              {errors.confirmPassword && <FormError name="confirmPassword" />}
            </InputPassWrap>
            <Button type="submit">Next</Button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

const SecondStepRegisterForm = ({
  state,
  handleSubmit,
  setState,
  setIsFirstStepComplete,
  isLoading,
}) => {
  return (
    <motion.div
      initial={{ x: 320, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Formik
        initialValues={state}
        validationSchema={secondStepRegisterSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ errors, values, setFieldValue }) => (
          <Form autoComplete="off">
            <InputWrap isError={errors.name}>
              <Input type="text" name="name" placeholder="Name" />
              {errors.name && <FormError name="name" />}
            </InputWrap>
            <InputWrap isError={errors.location}>
              <Input type="text" name="location" placeholder="City, region" />
              {errors.location && <FormError name="location" />}
            </InputWrap>
            <InputWrap>
              <Input
                type="text"
                name="number"
                placeholder="Mobile phone"
                onFocus={() => {
                  if (!values.number) return setFieldValue('number', '+38(0');
                }}
                onChange={e => onNumberFieldChange(e, setFieldValue)}
              />
              {errors.number && <FormError name="number" />}
            </InputWrap>
            <Button type="submit" secondStep={true} disabled={isLoading}>
              Register
            </Button>
            <BackBtn
              type="button"
              onClick={() => {
                setState({ ...values });
                setIsFirstStepComplete(false);
              }}
              disabled={isLoading}
            >
              Back
            </BackBtn>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

const forms = { FirstStepRegisterForm, SecondStepRegisterForm };
export default forms;
