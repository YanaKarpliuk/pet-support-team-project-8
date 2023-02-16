import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
const { selectIsLoggedIn } = authSelectors;

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { isLoggedIn } = useAuth()
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;

// import { useAuth } from 'hooks';
// import { Navigate } from 'react-router-dom';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
