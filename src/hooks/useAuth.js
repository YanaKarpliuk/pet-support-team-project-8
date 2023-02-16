import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

const { selectUser, selectIsRefreshing, selectIsLoggedIn } = authSelectors;
const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isLoggedIn);
  return { isLoggedIn, isRefreshing, user };
};

export default useAuth;
