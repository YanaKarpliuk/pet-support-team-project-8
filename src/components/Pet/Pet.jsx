import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { getIsDeletePetLoading } from '../../redux/user/selectors';
import { removeUserPet } from '../../redux/user/operations';
import styles from './Pet.styled';
const {
  PetImage,
  PetImgWrap,
  PetInfoWrap,
  PetName,
  PetBirthday,
  PetBreed,
  PetComments,
  InfoTitle,
  DeleteBtn,
  DeleteIcon,
  LoaderWrap,
} = styles;

const Pet = ({
  pet: { _id, name, birthday, breed, photoPet, comments },
  viewportWidth,
  deletePetId,
  setDeletePetId,
}) => {
  const isDeletePetLoading = useSelector(getIsDeletePetLoading);
  const dispatch = useDispatch();

  return (
    <>
      <PetImgWrap>
        <PetImage src={photoPet} alt={name} />
      </PetImgWrap>
      <PetInfoWrap>
        <PetName>
          <InfoTitle>Name: </InfoTitle>
          {name}
        </PetName>
        <PetBirthday>
          <InfoTitle>Date of birth: </InfoTitle>
          {birthday.split('-').reverse().join('.')}
        </PetBirthday>
        <PetBreed>
          <InfoTitle>Breed: </InfoTitle>
          {breed}
        </PetBreed>
        <PetComments>
          <InfoTitle>Comments: </InfoTitle>
          {comments}
        </PetComments>
      </PetInfoWrap>
      {!isDeletePetLoading && (
        <DeleteBtn
          onClick={async () => {
            setDeletePetId(_id);
            await dispatch(removeUserPet(_id));
          }}
          aria-label="delete pet"
        >
          <DeleteIcon />
        </DeleteBtn>
      )}
      {isDeletePetLoading && deletePetId === _id && (
        <LoaderWrap>
          <RotatingLines
            strokeColor="#fc731e"
            strokeWidth="3.7"
            animationDuration="0"
            visible={true}
            width={(() => {
              if (!viewportWidth) return '30';
              if (Number(viewportWidth) <= 767) return '20';
              if (Number(viewportWidth) >= 768) return '44';
            })()}
            ariaLabel="pet delete loading"
          />
        </LoaderWrap>
      )}
    </>
  );
};

export default Pet;
