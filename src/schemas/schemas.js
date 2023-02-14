import * as Yup from 'yup';

const firstStepRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/.+@([a-zA-Z]+\.)+[a-zA-z]{2,3}/g, 'Invalid email')
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
    .matches(/\S{2,}/, 'name too short (min 2)')
    .matches(/((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/, 'Name must includes only Latin alphabet')
    .required('require field'),
    // .min(2, 'Name too short (min 2)')
    // .matches(/((\s*\S+\s*){2,}|\S{2,})/, 'Name too short (min 2)')
    // .required('Require field'),
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

const schemas = { firstStepRegisterSchema, secondStepRegisterSchema, LoginSchema };
export default schemas;
