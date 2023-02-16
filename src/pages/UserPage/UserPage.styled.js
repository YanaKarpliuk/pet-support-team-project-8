import styled from 'styled-components';
import theme from '../../theme';

export const UserInfoContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  /* padding: 0 20px 30px 20px; */
  /* gap: 48px; */
  background-color: ${theme.colors.bg};
  /* background-color: green; */
  @media screen and (${theme.media.fromTablet}) {
    margin-top: 160px;
    /* padding: 0 20px 30px 32px; */
  }
  @media screen and (${theme.media.desktop}) {
    margin-top: 126px;
    flex-direction: row;
    gap: 32px;
    /* padding: 0 20px 30px 17px; */
  }
`;
