import styled from 'styled-components';

const LoaderWrap = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(47, 36, 28, 0.7);
  overflow-y: hidden;
`;

const styles = { LoaderWrap };
export default styles;
