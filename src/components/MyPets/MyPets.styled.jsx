import styled from 'styled-components';

const PetsContainerWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.manrope};
  padding-top: 47px;
  margin: 0px 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 20px;
    margin: 0px auto;
  }
  @media screen and (min-width: 1000px) {
    width: 900px;
    margin: 0px auto;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    padding-top: 0px;
    align-items: flex-start;
    margin: 0px 16px 0px 0px;
  }
`;

const PetsTitleAndButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1280px) {
    padding-right: 16px;
    /* margin-top: 20px; */
  }
`;

const PetTitle = styled.h3`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

const AddPetBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;
`;

const AddPetBtnText = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.normal};
  color: #111111;
`;

const AddPetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 150ms ease-out;

  & svg {
    stroke: ${({ theme }) => theme.colors.white};
  }

  &:focus,
  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 5px 10px rgba(65, 65, 65, 0.4);
    transform: scale(1.01);

    & svg {
      stroke: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const PetsLoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 80px;
  }
`;

const NotPets = styled.p`
  font-family: inherit;
  font-size: 22px;
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: center;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    padding-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 130px;
  }
`;

const PetsListContainer = styled.div`
  width: 100%;
`;

const PetsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding-top: 26px;
  padding-bottom: 80px;
`;

const PetItem = styled.li`
  position: relative;
  width: 280px;
  height: auto;
  padding: 20px 20px 40px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  @media screen and (min-width: 500px) {
    width: 350px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;
    width: 100%;
    padding: 20px;
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
`;

const styles = {
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
};
export default styles;
