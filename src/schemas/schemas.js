import * as Yup from 'yup';
import { object, string } from 'yup';

const firstStepRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(/^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g, 'Invalid email')
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email'
    )
    .required('Require field'),
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required('Require field'),
});

const secondStepRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(/((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/, 'Name must includes only Latin alphabet')
    .required('Require field'),
  location: Yup.string()
    .matches(
      /^(\s*[a-zA-Z-]{2,}(?!,)\s*|\s*[a-zA-Z-]{2,},\s+([a-zA-Z-]+\s*)+\s*)$/,
      'Invalid format. valid: city or city, region'
    )
    .required('Require field'),
  number: Yup.string()
    .matches(/^\+38\(0\d{2}\) \d{3}-\d{2}-\d{2}$/, 'Invalid number. valid +38(0xx) xxx-xx-xx')
    .required('Require field'),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/.+@([\w-]+\.)+\w{2,3}/g, 'Invalid email')
    .required('Require field'),
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require field'),
});

const userUpdateSchema = object().shape({
  email: string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(/^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g, 'Invalid email')
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email'
    )
    .required('Email is required'),
  name: string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(/^[a-zA-Z]+([ ][a-zA-Z]+)*$/, 'Name must includes only Latin alphabet')
    .required('Require field'),
  phone: string()
    .min(13, 'Too Short!')
    .matches(/^\+380\d{2}\d{3}\d{2}\d{2}$/, 'Invalid number. valid +38(0xx) xxx-xx-xx')
    .required('Phone is required'),
  city: string()
    .matches(
      /^(\s*[a-zA-Z-]{2,}(?!,)\s*|\s*[a-zA-Z-]{2,},\s+([a-zA-Z-]+\s*)+\s*)$/,
      'Invalid format. valid: City or City, Region'
    )
    .required('City is required'),
  birthday: string()
    .matches(
      /(^(0+?[1-9]|[12][0-9]|3[01])[-\\.](0+?[1-9]|[1][0-12])[-\\.]((19|20)\d\d))/,
      'Error. Example: DD.MM.YYYY'
    )
    .required('Birthday is required')
    .max(10, 'Too long Example: DD.MM.YYYY'),
});

const schemas = {
  firstStepRegisterSchema,
  secondStepRegisterSchema,
  LoginSchema,
  userUpdateSchema,
};
export default schemas;
