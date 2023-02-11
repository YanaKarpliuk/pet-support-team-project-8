import styled from "styled-components";

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(17, 17, 17, 0.6);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  opacity: ${p => (p.active ? 1 : 0)};
  pointer-events: ${p => (p.active ? "all" : 'none')};
  transition: 0.5s;
`;

const Content = styled.div`
  border-radius: 40px;
  background: #ffffff;
  // height: 400px;
  // width: 300px;
  transform: ${p => (p.active ? 'scale(1)' : 'scale(0.5)')};
  transition: 0.4s all;

`;

const CloseBtn = styled.div`
  position: fixed;
  cursor: pointer;
  display: flex;
  text-align: center;
  align-items: center;
  top: 16px;
  right: 16px;
  background-color: ${p => p.theme.colors.bg};
  border: none;
  border-radius: ${p => p.theme.radius.round};
  padding: 2px;
`;

const styles ={Backdrop, Content, CloseBtn}
export default styles;