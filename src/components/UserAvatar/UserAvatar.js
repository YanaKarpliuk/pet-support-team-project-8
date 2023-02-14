import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingUpdate } from '../../redux/user/selectors';
import { toggleIsDisablet } from '../../redux/user/slice';
import { ReactComponent as UploadIcon } from '../../images/user/uploadAvatar.svg';
import { ReactComponent as UploadSubmit } from '../../images/user/editField.svg';
import styles from './UserAvatar.styled';
const { AvatarImg, AvatarContainer, AvatarEdit, AvatarEditLab, AvatarEditLabel, AvatarEditText } =
  styles;

export const UserAvatar = ({ avatar, watch, register, onSubmit }) => {
  const [edited, setEdited] = useState(false);

  const isLoadingUpdate = useSelector(getLoadingUpdate);
  const dispatch = useDispatch();

  const newImage = watch('avatar');

  useEffect(() => {
    if (isLoadingUpdate) {
      setEdited(false);
    }
  }, [isLoadingUpdate]);

  useEffect(() => {
    if (newImage && newImage[0]) {
      setEdited(true);
      dispatch(toggleIsDisablet());
    }
  }, [dispatch, newImage]);

  return (
    <form onSubmit={onSubmit}>
      <AvatarContainer>
        <div>
          <AvatarImg src={newImage && newImage[0] ? URL.createObjectURL(newImage[0]) : avatar} />
        </div>
        <div>
          {newImage && newImage[0] && edited ? (
            <button type="submit">
              <UploadSubmit fill="#F59256" width={23} height={23} />
              <p>submit</p>
            </button>
          ) : (
            <div>
              <AvatarEditLab htmlFor="avatar">
                <UploadIcon fill="#F59256" width={18} height={18} />
                <AvatarEditText>Edit photo</AvatarEditText>
              </AvatarEditLab>
              <AvatarEdit type="file" name="avatar" {...register('avatar')} id="avatar" />
            </div>
          )}
        </div>
      </AvatarContainer>
    </form>
  );
};

export default UserAvatar;
