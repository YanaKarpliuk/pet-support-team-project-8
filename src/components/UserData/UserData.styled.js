import styled from 'styled-components';

const UserDataWrap = styled.div`
  box-sizing: border-box;
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
  }
`;

const styles = { UserDataWrap };
export default styles;
