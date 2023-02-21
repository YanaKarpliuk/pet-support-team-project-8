import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.6);
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  opacity: ${p => (p.active ? 1 : 0)};
  pointer-events: ${p => (p.active ? 'all' : 'none')};
  transition: 0.5s;
`;

const Content = styled.div`
  border-radius: 40px;
  background: ${p => p.theme.colors.white};
  transform: ${p => (p.active ? 'scale(1)' : 'scale(0.5)')};
  transition: 0.4s all;
  @media ${p => p.theme.media.mobile} {
    border-radius: 20px;
  }
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
  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;

const styles ={Backdrop, Content, CloseBtn}
export default styles;