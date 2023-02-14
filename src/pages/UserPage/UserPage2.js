import { Helmet } from 'react-helmet';

import UserData from '../../components/UserData2/UserData';
// import UserPets from '../components/PetsElements/UserPets';

import { UserInfoContainer } from './UserPage2.styled';


import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, removeUserPet, getPets } from '../../redux/user/operations';
import { resetIsAddedPetSuccess } from '../../redux/user/slice';
import MyPets from '../../components/MyPets/MyPets';
import {
  getUserPets,
  getUserInfo,
  getUserAvatar,
  getPetsLoading,
  getUserLoading,
  getIsAddedPetSuccess,
  getUserError,
} from '../../redux/user/selectors';
// import UserData from '../../components/UserData/UserData';
import styles from './UserPage.styled';
const { UserPageContainer, UserContainer, UserInfo, UserCardWrapper, Title } = styles;

const UserPage = () => {
  const [viewportWidth, setViewportWidth] = useState(null);
  const dispatch = useDispatch();

  const userInfo = useSelector(getUserInfo);
  const userAvatar = useSelector(getUserAvatar);
  const userPets = useSelector(getUserPets);
  const isPetsLoading = useSelector(getPetsLoading);
  const isUserLoading = useSelector(getUserLoading);
  const error = useSelector(getUserError);
  const isAddedPetSuccess = useSelector(getIsAddedPetSuccess);

  useEffect(() => {
    dispatch(getPets());
    setViewportWidth(window.innerWidth);
  }, [dispatch]);

  useEffect(() => {
    if (isAddedPetSuccess) {
      dispatch(resetIsAddedPetSuccess());
    }
    if (error) {
    }
  }, [dispatch, isAddedPetSuccess, error]);

  const onDeletePet = e => {
    const petToRemove = e.currentTarget.id;
    dispatch(removeUserPet(petToRemove));
  };
  const formData = { userInfo, userAvatar, isUserLoading };
  const cardData = { userPets, onDeletePet, isPetsLoading };

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
