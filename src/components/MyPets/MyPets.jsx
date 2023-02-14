import React from 'react';
import { ReactComponent as PlusIcon } from '../../images/user/addPetBtn-plus-icon.svg';
import { RotatingLines } from 'react-loader-spinner';
import Pet from '../Pet/Pet';
import styles from './MyPets.styled';
const {
  PetsContainerWrapper,
  PetTitle,
  AddPetBtnContainer,
  PetsTitleAndButtonWrap,
  AddPetBtnText,
  AddPetBtn,
  PetsLoaderWrap,
  NotPets,
  PetsListContainer,
  PetsList,
  PetItem,
} = styles;

const MyPets = ({ userPets, isPetsLoading, viewportWidth }) => {
  return (
    <PetsContainerWrapper>
      <PetsTitleAndButtonWrap>
        <PetTitle>My pets:</PetTitle>
        <AddPetBtnContainer>
          <AddPetBtnText>Add pet</AddPetBtnText>
          <AddPetBtn>
            <PlusIcon />
          </AddPetBtn>
        </AddPetBtnContainer>
      </PetsTitleAndButtonWrap>

      <PetsListContainer>
        {isPetsLoading && (
          <PetsLoaderWrap>
            <RotatingLines
              strokeColor="#fc731e"
              strokeWidth="3.7"
              animationDuration="0.8"
              visible={true}
              width={(() => {
                if (!viewportWidth) return '80';
                if (Number(viewportWidth) <= 500) return '70';
                if (Number(viewportWidth) <= 767) return '100';
                if (Number(viewportWidth) >= 768) return '120';
              })()}
              ariaLabel="Loading"
            />
          </PetsLoaderWrap>
        )}
        {!isPetsLoading && userPets.length === 0 && <NotPets>You don't have any pets</NotPets>}
        {!isPetsLoading && userPets.length > 0 && (
          <PetsList>
            {userPets.map(pet => (
              <PetItem key={pet._id}>
                <Pet pet={pet} />
              </PetItem>
            ))}
          </PetsList>
        )}
      </PetsListContainer>
    </PetsContainerWrapper>
  );
};

export default MyPets;
