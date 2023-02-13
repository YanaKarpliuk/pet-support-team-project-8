import styled from 'styled-components';

const UserPageContainer = styled.div`
  padding-top: 130px;
  background-color: ${p => p.theme.colors.bg};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const UserCardWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

const Title = styled.h2`
  margin-left: 20px;
  font-family: 'Manrope';
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.normal};
  color: ${p => p.theme.colors.black};
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

const UserInfo = styled.div`
  /* box-sizing: border-box;
  width: 280px;
  justify-content: center;
  padding: 20px 16px 20px 16px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 736px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 24px 40px 24px 40px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 24px 40px 0px 40px;
    width: 570px;
  } */
`;

const UserContainer = styled.div`
  /* background-color: red; */

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

// const UserContainer = styled.div`
//   margin-bottom: 48px;

//   @media screen and (min-width: 768px) {
//     padding-left: 0;}

//     @media screen and (min-width: 768px) {
//       margin-bottom: 20px;
//   }
//   @media screen and (min-width: 1280px) {
//     margin-bottom: 0px;
//     margin-right: 32px;
//     width: 411px;

//     border-radius: 0px 40px 40px 0px;
//     box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
// }`

// const UserTitle = styled.h2`
//   font-family: 'Manrope';
//   font-weight: 500;
//   font-size: 20px;
//   line-height: ${p => p.theme.lineHeights.normal};
//   color: #111111;
//   @media screen and (min-width: 768px) {
//     font-size: 28px;
//     /* line-height: {t => }; */
//   }
//   @media screen and (min-width: 1280px) {
//     font-size: 28px;
//     line-height: ${p => p.theme.lineHeights.normal};
//   }
// `;

const PetsContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PetTitle = styled.h3`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.normal};
  color: #111111;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    /* line-height: {t => }; */
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

const AddPetBtnContainer = styled.div``;

const styles = {
  UserPageContainer,
  UserCardWrapper,
  Title,
  UserInfo,
  UserContainer,
  PetsContainerWrapper,
  PetTitle,
  AddPetBtnContainer,
};
export default styles;
