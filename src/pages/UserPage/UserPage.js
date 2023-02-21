import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastOptions from '../../utils/toastErrorOptions';

import UserData from '../../components/UserData/UserData';
import { UserInfoContainer } from './UserPage.styled';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../redux/user/operations';
import { resetError } from '../../redux/user/slice';
import MyPets from '../../components/MyPets/MyPets';
import { getUserError } from '../../redux/user/selectors';

const UserPage = () => {
  const [viewportWidth, setViewportWidth] = useState(null);
  const dispatch = useDispatch();
  const error = useSelector(getUserError);

  useEffect(() => {
    dispatch(getPets());
    setViewportWidth(window.innerWidth);
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, toastOptions);
      dispatch(resetError());
    }
  }, [error, dispatch]);

  return (
    <div>
      <Helmet>
        <title>UserPage</title>
      </Helmet>

      <UserInfoContainer>
        <UserData />
        <MyPets viewportWidth={viewportWidth} />
      </UserInfoContainer>
    </div>
  );
};

export default UserPage;
