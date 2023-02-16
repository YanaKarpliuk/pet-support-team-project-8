import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

const { selectUser, selectIsLoading, selectIsLoggedIn } = authSelectors;
const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsLoading);
  return { isLoggedIn, isRefreshing, user };
};

export default useAuth;
