import styled from 'styled-components';

const PetImgWrap = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 500px) {
    margin: 0px auto;
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
`;
const PetName = styled.p`
  padding-left: 1px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 400;
  color: #000000;
`;
const PetBirthday = styled(PetName)``;
const PetBreed = styled(PetName)``;
const PetComments = styled(PetName)`
  padding-left: 0px;
`;
const InfoTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
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
};
export default styles;
