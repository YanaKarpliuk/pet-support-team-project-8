import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import BlankAvatar from '../../images/user/avatar-blank.png';
import { getUserData } from '../../redux/user/operations';
import { InputBirthday } from './Flatpickr';
import schemas from '../../schemas/schemas';

import {
  UserDataWrap,
  Title,
  UserInfo,
  UserAvatarImg,
  UserAfterUpdateInfo,
  UserForm,
  UserKey,
  UserValue,
  LogOutButton,
  LogOutIcon,
  UserFieldEdit,
  UserFieldEditWrap,
  UserKeyLabel,
  UserValueInput,
  UserFieldToUpdate,
  UserAvatarUpdateInput,
  UserAvatarUpdateIcon,
  UserAvatarUpdateWrap,
  UserAvatarLabel,
  UserWrapper,
  UserAvatarWrap,
  UserAvatarButtonUpdate,
  LogOutIconWrap,
  ErrorMessage,
  UserKeyToUpdate,
} from './UserData.styled';

const { userUpdateSchema } = schemas;

const { selectUser } = authSelectors;
const { logOut, updateUserData } = authOperations;

const UserData = () => {
  const [update, setUpdate] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const initialValues = {
    name: user.name,
    email: user.email,
    birthday: user.birthday,
    phone: user.phone,
    city: user.city,
  };

  useEffect(() => {
    dispatch(getUserData())
  }, [dispatch]) // added [dispatch]

  const handleSubmit = data => {
    dispatch(updateUserData(data));
    setUpdate(false);
  };

  const handleChange = e => {
    const avatar = e.target.files[0];
    const formData = new FormData();
    formData.append('avatar', avatar);
    dispatch(updateUserData(formData));
  };

  return (
    <UserDataWrap>
      <Title>My information: </Title>
      <UserInfo>
        <UserWrapper>
          <UserAvatarWrap>
            <UserAvatarImg src={!user.avatarURL ? BlankAvatar : user.avatarURL} alt="Avatar" />
            <UserAvatarButtonUpdate type="button">
              <UserAvatarLabel onChange={handleChange}>
                <UserAvatarUpdateInput type="file" />
                <UserAvatarUpdateWrap>
                  <UserAvatarUpdateIcon />
                </UserAvatarUpdateWrap>
                Edit Photo
              </UserAvatarLabel>
            </UserAvatarButtonUpdate>
          </UserAvatarWrap>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userUpdateSchema}
            isValid
          >
            {({ errors, touched, isValid }) => (
              <UserForm autoComplete="off">
                {update === 'name' ? (
                  <UserKeyLabel>
                    <UserKeyToUpdate>Name:</UserKeyToUpdate>
                    <UserValueInput type="text" name="name" isvalid={isValid.toString()} />
                    {errors.name || touched.name ? (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    ) : null}
                    <UserFieldEditWrap type="submit">
                      <UserFieldToUpdate />
                    </UserFieldEditWrap>
                  </UserKeyLabel>
                ) : (
                  <UserAfterUpdateInfo>
                    <UserKey>Name:</UserKey>
                    <UserValue>{`${initialValues.name}`}</UserValue>
                    <UserFieldEditWrap
                      disabled={!isValid || update}
                      click={update}
                      onClick={() => setUpdate('name')}
                    >
                      <UserFieldEdit />
                    </UserFieldEditWrap>
                  </UserAfterUpdateInfo>
                )}

                {update === 'email' ? (
                  <UserKeyLabel>
                    <UserKeyToUpdate>Email:</UserKeyToUpdate>
                    <UserValueInput type="email" name="email" isvalid={isValid.toString()} />
                    {errors.email || touched.email ? (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    ) : null}
                    <UserFieldEditWrap type="submit">
                      <UserFieldToUpdate />
                    </UserFieldEditWrap>
                  </UserKeyLabel>
                ) : (
                  <UserAfterUpdateInfo>
                    <UserKey>Email:</UserKey>
                    <UserValue>{`${initialValues.email}`}</UserValue>
                    <UserFieldEditWrap
                      click={update}
                      disabled={!isValid || update}
                      onClick={() => setUpdate('email')}
                    >
                      <UserFieldEdit />
                    </UserFieldEditWrap>
                  </UserAfterUpdateInfo>
                )}

                {update === 'birthday' ? (
                  <UserKeyLabel>
                    <UserKeyToUpdate>Birthday:</UserKeyToUpdate>
                    <UserValueInput
                      type="text"
                      name="birthday"
                      placeholder={!initialValues.birthday ? 'add yours' : ''}
                      component={InputBirthday}
                    />
                    {errors.birthday || touched.birthday ? (
                      <ErrorMessage>{errors.birthday}</ErrorMessage>
                    ) : null}
                    <UserFieldEditWrap type="submit">
                      <UserFieldToUpdate />
                    </UserFieldEditWrap>
                  </UserKeyLabel>
                ) : (
                  <UserAfterUpdateInfo>
                    <UserKey>Birthday:</UserKey>
                    <UserValue>
                      {!initialValues.birthday ? 'add yours' : `${initialValues.birthday}`}
                      {/* {!initialValues.birthday ? 'No info' : `${initialValues.birthday}`} */}
                    </UserValue>
                    <UserFieldEditWrap
                      click={update}
                      disabled={!isValid || update}
                      onClick={() => setUpdate('birthday')}
                    >
                      <UserFieldEdit />
                    </UserFieldEditWrap>
                  </UserAfterUpdateInfo>
                )}

                {update === 'phone' ? (
                  <UserKeyLabel>
                    <UserKeyToUpdate>Phone:</UserKeyToUpdate>
                    <UserValueInput type="text" name="phone" isvalid={isValid.toString()} />
                    {errors.phone || touched.phone ? (
                      <ErrorMessage>{errors.phone}</ErrorMessage>
                    ) : null}
                    <UserFieldEditWrap type="submit">
                      <UserFieldToUpdate />
                    </UserFieldEditWrap>
                  </UserKeyLabel>
                ) : (
                  <UserAfterUpdateInfo>
                    <UserKey>Phone:</UserKey>
                    <UserValue>{`${initialValues.phone}`}</UserValue>
                    <UserFieldEditWrap
                      click={update}
                      disabled={!isValid || update}
                      onClick={() => setUpdate('phone')}
                    >
                      <UserFieldEdit />
                    </UserFieldEditWrap>
                  </UserAfterUpdateInfo>
                )}

                {update === 'city' ? (
                  <UserKeyLabel>
                    <UserKeyToUpdate>City:</UserKeyToUpdate>
                    <UserValueInput type="text" name="city" isvalid={isValid.toString()} />
                    {errors.city || touched.city ? (
                      <ErrorMessage>{errors.city}</ErrorMessage>
                    ) : null}
                    <UserFieldEditWrap type="submit">
                      <UserFieldToUpdate />
                    </UserFieldEditWrap>
                  </UserKeyLabel>
                ) : (
                  <UserAfterUpdateInfo>
                    <UserKey>City:</UserKey>
                    <UserValue>{`${initialValues.city}`}</UserValue>
                    <UserFieldEditWrap
                      click={update}
                      disabled={!isValid || update}
                      onClick={() => setUpdate('city')}
                    >
                      <UserFieldEdit />
                    </UserFieldEditWrap>
                  </UserAfterUpdateInfo>
                )}
              </UserForm>
            )}
          </Formik>
        </UserWrapper>
        <LogOutButton type="button" onClick={() => dispatch(logOut())}>
          Log out
          <LogOutIconWrap>
            <LogOutIcon onClick={() => dispatch(logOut())} />
          </LogOutIconWrap>
        </LogOutButton>
      </UserInfo>
    </UserDataWrap>
  );
};

export default UserData;
