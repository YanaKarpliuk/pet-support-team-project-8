import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  // console.log(isLoggedIn);
  // console.log(isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  // <Navigate to={redirectTo}/>
};

export default PrivateRoute;
