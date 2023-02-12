import { Helmet } from 'react-helmet';

import LoginForm from '../../components/LoginForm';
import { Container } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
};
export default LoginPage;
