import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalAddSell from '../../components/ModalAddSell/ModalAddSell';
import elements from './AddNoticeButton.styled';

const { MobBtn, Text, Btn, Cross, MobCross } = elements;

const AddNoticeButton = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
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

export default AddNoticeButton;
