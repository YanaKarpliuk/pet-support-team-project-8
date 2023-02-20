import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalAddSell from '../../components/ModalAddSell/ModalAddSell';
import elements from './AddNoticeButton.styled';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { ToastContainer, toast } from 'react-toastify';
import toastAuthNeeded from '../../utils/toastAuthNeeded';

const { MobBtn, Text, Btn, Cross, MobCross } = elements;
const { selectIsLoggedIn } = authSelectors

const AddNoticeButton = () => {
  const [active, setActive] = useState(false);
  const loggedIn = useSelector(selectIsLoggedIn)

  const handleActivation = () => {
    if (!loggedIn) {
      return toast.info("For this operation registration or login needed", toastAuthNeeded)
    }

    setActive(true)
  }

  return (
    <div style={{ flexShrink: 0 }}>
      <ToastContainer />
      <MobBtn type="button" onClick={handleActivation}>
        <MobCross /> Add pet
      </MobBtn>
      <Text>
        Add pet
        <Btn type="button" onClick={handleActivation}>
          <Cross />
        </Btn>
      </Text>
      <Modal active={active} setActive={setActive}>
        <ModalAddSell onCancel={() => setActive(false)} />
      </Modal>
    </div>
  );
};
// return (
//     <div style={{ flexShrink: 0 }}><MobBtn type="button"><MobCross /> Add pet</MobBtn>
//         <Text>Add pet <Btn type="button"><Cross /></Btn></Text></div>

export default AddNoticeButton;
