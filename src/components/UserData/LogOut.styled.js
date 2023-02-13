import styled from 'styled-components';

const LogOutBtn = styled.button`
  border: none;
  background: none;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* position: absolute; */
  /* right: 24px; */
  flex-shrink: 1;
  :hover {
    color: #f59256;
  }
  @media screen and (min-width: 768px) {
    margin-top: 10px;
    right: 40px;
  }
  @media screen and (min-width: 1280px) {
    /* position: absolute; */
    bottom: 0px;
    /* right: -30%; */
    margin-top: 0px;
  }
`;

const styles = { LogOutBtn };
export default styles;
