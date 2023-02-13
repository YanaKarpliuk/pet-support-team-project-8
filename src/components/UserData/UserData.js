import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { updateUserData } from '../../redux/user/operations';
import UserAvatar from '../UserAvatar/UserAvatar';
import userItemDetails from '../UserItem/UserItemDetails';
import UserItem from '../UserItem/UserItem';
import LogOut from './LogOut';
import styles from './UserData.styled';

const { UserDataWrap } = styles;

const UserData = ({ formData }) => {
  const {
    userInfo: { name, email, birthday, phone, city },
    userAvatar,
    isUserLoading,
    isCurrentLoading,
  } = formData;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({});

  const dispatch = useDispatch();

  const normalizeUserInfo = {
    name,
    email,
    birthday,
    phone,
    city,
  };

  const onSubmit = data => {
    if (data) {
      //   const fieldToChange = createFormData(data);
      const updateField = data => {
        const updatedFormData = new FormData();
        const key = Object.keys(data);
        const value = Object.values(data);

        for (let index = 0; index < key.length; index++) {
          if (key[index] !== 'avatar') {
            if (value[index].trim()) {
              updatedFormData.append(key[index], value[index]);
            }
          } else {
            if (value[index][0] !== undefined) {
              updatedFormData.append(key[index], value[index][0]);
            }
          }
        }
        return updatedFormData;
      };
      dispatch(updateUserData(updateField));
    }
  };

  return (
    <div>
      <div>
        <UserDataWrap>
          {isUserLoading || isCurrentLoading ? (
            <div>"loading" </div>
          ) : (
            <>
              <UserAvatar
                onSubmit={handleSubmit(onSubmit)}
                watch={watch}
                avatar={userAvatar}
                register={register}
              />

              <div>
                {userItemDetails.map((info, index) => (
                  <UserItem
                    onSubmit={handleSubmit(onSubmit)}
                    data={Object.values(normalizeUserInfo)[index]}
                    text={info.text}
                    type={info.type}
                    field={info.field}
                    errors={errors}
                    pattern={info.pattern}
                    register={register}
                    setValue={setValue}
                    key={index}
                  />
                ))}
                {!isUserLoading && !isCurrentLoading && <LogOut />}
              </div>
            </>
          )}
        </UserDataWrap>
      </div>
    </div>
  );
};

export default UserData;
