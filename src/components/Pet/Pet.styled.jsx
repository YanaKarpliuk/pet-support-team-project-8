import styled from 'styled-components';
import { ReactComponent as TrashIcon } from '../../images/user/deletePet-icon.svg';

const PetImgWrap = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 500px) {
    margin: 0px auto;
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    margin: 0px;
    border-radius: 40px;
  }
`;

const PetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PetInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding-top: 20px;

  @media screen and (min-width: 500px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - (161px + 32px));
    padding-top: 0px;
  }
`;

const PetName = styled.p`
  padding-left: 1px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 400;
  color: #000000;

  @media screen and (min-width: 768px) {
    padding-left: 0px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
const PetBirthday = styled(PetName)``;
const PetBreed = styled(PetName)``;
const PetComments = styled(PetName)`
  padding-left: 0px;
`;
const InfoTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.normal};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 272px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    & svg {
      fill: ${({ theme }) => theme.colors.accent};
    }
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    top: 20px;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 50%;
    transition: all 150ms ease-out;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0px 5px 10px rgba(65, 65, 65, 0.4);
      & svg {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const DeleteIcon = styled(TrashIcon)`
  fill: rgba(17, 17, 17, 0.6);
  pointer-events: none;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const LoaderWrap = styled.div`
  position: absolute;
  right: 20px;
  top: 272px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    top: 20px;
  }
`;

const styles = {
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
};
export default styles;
