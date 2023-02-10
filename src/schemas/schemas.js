import * as Yup from 'yup';

const firstStepRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'email must be without spaces')
    .matches(/.+@([\w-]+\.)+\w{2,3}/g, 'invalid email')
    .required('require field'),
  password: Yup.string()
    .min(7, 'password too short (min 7)')
    .max(32, 'password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'password must be without spaces')
    .required('require field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'password must match')
    .required('require field'),
});

const secondStepRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'name too short (min 2)')
    .matches(/(\w+\s*\w+|\w{2,})/, 'name too short (min 2)')
    .required('require field'),
  location: Yup.string()
    .matches(
      /^(\s*[\w-]{2,}(?!,)\s*|\s*[\w-]{2,},\s+([\w-]+\s*)+\s*)$/,
      'invalid format. valid: city or city, region'
    )
    .required('require field'),
  number: Yup.string()
    .matches(/^\+38\(0\d{2}\) \d{3}-\d{2}-\d{2}$/, 'invalid number. valid +38(0xx) xxx-xx-xx')
    .required('require field'),
});

const schemas = { firstStepRegisterSchema, secondStepRegisterSchema };
export default schemas;
