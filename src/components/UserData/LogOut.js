import { useDispatch } from 'react-redux';
import logOut from '../../redux/auth/authOperations';
// import { ReactComponent as LogOutIcon } from '../../images/user/logout2.svg';
import { MdLogout } from 'react-icons/md';

import styles from './LogOut.styled';

const { LogOutBtn } = styles;

const LogOut = () => {
  const dispatch = useDispatch();
  return (
    <LogOutBtn onClick={() => dispatch(logOut())}>
      <MdLogout fill="#F59256" width={18} height={18} />
      <p>Log out</p>
    </LogOutBtn>
  );
};

export default LogOut;
