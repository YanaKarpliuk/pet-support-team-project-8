import { useCallback, useEffect } from "react";
import styles from "./Modal.styled"
import { IoClose } from 'react-icons/io5';


const Modal = ({ active, setActive,children }) => {
    const { Backdrop, Content,CloseBtn } = styles;
 
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape') {
          setActive(false);
        }
      },
      [setActive]
    );
    useEffect(() => {
      document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
      });
  
return (
  <Backdrop active={active} onClick={() => setActive(false)}>
    <Content active={active} onClick={e => e.stopPropagation()}>
      <CloseBtn onClick={() => setActive(false)}>
        <IoClose size={25}></IoClose>
      </CloseBtn>
      {children}
    </Content>
  </Backdrop>
);
}

export default Modal