import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserData from '../../components/UserData/UserData';
import MyPets from '../../components/MyPets/MyPets';

import { UserInfoContainer } from './UserPage.styled';
import { getUserData, removeUserPet, getPets } from '../../redux/user/operations';
import {
  getUserPets,
  getUserInfo,
  getPetsLoading,
  getUserLoading,
} from '../../redux/user/selectors';

const UserPage = () => {
  const [viewportWidth, setViewportWidth] = useState(null);
  const dispatch = useDispatch();

  const userInfo = useSelector(getUserInfo);
  const userPets = useSelector(getUserPets);
  const isPetsLoading = useSelector(getPetsLoading);
  const isUserLoading = useSelector(getUserLoading);

  useEffect(() => {
    dispatch(getPets());
    setViewportWidth(window.innerWidth);
  }, [dispatch]);

  const formData = { userInfo, isUserLoading };
  const cardData = { userPets, isPetsLoading };

  return (
    <div>
      {/* <Helmet>
      <title>UserPage</title>
      </Helmet> */}

      <UserInfoContainer>
        <UserData />
        <MyPets userPets={userPets} isPetsLoading={isPetsLoading} viewportWidth={viewportWidth} />
      </UserInfoContainer>
    </div>
  );
};

export default UserPage;
