import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalAddSell from '../../components/ModalAddSell/ModalAddSell';
import elements from './AddNoticeButton.styled';
import noticesOperations from '../../redux/notices/noticesOperations';

const { MobBtn, Text, Btn, Cross, MobCross } = elements;
const { addNotice } = noticesOperations

const AddNoticeButton = () => {
  const [active, setActive] = useState(false);
  return (
    <div style={{ flexShrink: 0 }}>
      <MobBtn type="button" onClick={() => setActive(true)}>
        <MobCross /> Add pet
      </MobBtn>
      <Text>
        Add pet
        <Btn type="button" onClick={() => setActive(true)}>
          <Cross />
        </Btn>
      </Text>
      <Modal active={active} setActive={setActive}>
        <ModalAddSell />
      </Modal>
    </div>
  );
};
// return (
//     <div style={{ flexShrink: 0 }}><MobBtn type="button"><MobCross /> Add pet</MobBtn>
//         <Text>Add pet <Btn type="button"><Cross /></Btn></Text></div>

export default AddNoticeButton;
