import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import forms from './AddForms';
import { addUserPet } from '../../redux/user/operations';
import styles from '../ModalAddNotice/ModalAddNotice.styled';
const { Container, Title } = styles;
const { FirstStepAdd, SecondStepAdd } = forms;

const infoInitialState = {
  name: '',
  birthday: '',
  breed: '',
  comments: '',
};

const ModalAddNotice = () => {
  const [info, setInfo] = useState(infoInitialState);
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitFirstStep = async ({ name, birthday, breed }) => {
    setInfo(info => ({
      ...info,
      name,
      birthday,
      breed,
    }));

    setIsFirstStepComplete(true);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

  const handleSubmitSecondStep = async (values, { resetForm }) => {
    const { photoPet, comments } = values;

    setInfo(info => ({
      ...info,
      photoPet,
      comments,
    }));

    const formData = new FormData();
    formData.append('name', info.name);
    formData.append('birthday', formatDate(new Date(info.birthday)));
    formData.append('breed', info.breed);
    formData.append('comments', comments);
    formData.append('photoPet', photoPet);
    dispatch(addUserPet(formData));
    resetForm();
  };

  return (
    <Container>
      <Title>Add my pet</Title>
      {!isFirstStepComplete ? (
        <FirstStepAdd state={info} handleSubmit={handleSubmitFirstStep} />
      ) : (
        <>
          <SecondStepAdd
            state={info}
            handleSubmit={handleSubmitSecondStep}
            onBack={() => setIsFirstStepComplete(false)}
          />
        </>
      )}
    </Container>
  );
};
export default ModalAddNotice;
