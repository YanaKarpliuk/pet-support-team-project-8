import React from 'react';
import styles from './Pet.styled';
import dog from '../../images/user/dog.jpg';
const {
  PetImage,
  PetImgWrap,
  PetInfoWrap,
  PetName,
  PetBirthday,
  PetBreed,
  PetComments,
  InfoTitle,
} = styles;

const Pet = ({ pet: { _id, name, birthday, breed, photoPet, comments } }) => {
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
    </>
  );
};

export default Pet;
