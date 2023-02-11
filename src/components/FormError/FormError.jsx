import { ErrorMessage } from 'formik';
import ErrorElem from './FormError.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={msg => {
        return <ErrorElem>{msg}</ErrorElem>;
      }}
    />
  );
};
export default FormError;
