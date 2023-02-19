import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import forms from './AddForms';
import { addUserPet } from '../../redux/user/operations';
import styles from '../ModalAddNotice/ModalAddNotice.styled';
const { Container, Title } = styles;
const { FirstStepAdd, SecondStepAdd } = forms;
const firstStepInitialState = {
  name: '',
  birthday: '',
  breed: '',
};

const secondStepInitialState = {
  comments: '',
};

const ModalAddNotice = () => {
  const [firstStep, setFirstStep] = useState(firstStepInitialState);
  const [secondStep, setSecondStep] = useState(secondStepInitialState);
  const [photoPet, setPhotoPet] = useState(null)
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitFirstStep = async ({ name, birthday, breed }) => {
    //   const { error } = await dispatch(verifyEmail({ email: userEmail.trim() }));
    // if (error) return;
    setFirstStep({ name, birthday: new Date(birthday).toISOString(), breed });
    setIsFirstStepComplete(true);
    console.log(name, birthday, breed);
  };

  const handleSubmitSecondStep = async (values, { resetForm }) => {
    const { photoPet, comments } = values;
    console.log(values);
    setSecondStep({
      // photoPet,
      comments,
    });
      // const formData = new FormData();
      // formData.append('photoPet', avatar);
      // console.log(formData);
      // dispatch(addUserPet(formData));
    const { name, birthday, breed } = firstStep;


    setSecondStep({ ...secondStepInitialState });
    setFirstStep({ ...firstStepInitialState });

    const formData = new FormData()
    formData.append("name", name)
    formData.append('birthday', birthday);
    formData.append('breed', breed);
    formData.append('comments', comments);
    formData.append('photoPet', photoPet);
    dispatch(addUserPet(formData));
    resetForm();
  };

  return (
    <Container>
      <Title>Add my pet</Title>
      {!isFirstStepComplete ? (
        <FirstStepAdd state={firstStep} handleSubmit={handleSubmitFirstStep} />
      ) : (
        <>
          {/* <InputF state={photoPet} setState={setPhotoPet} /> */}
          <SecondStepAdd
              state={secondStep}
              photoPet={photoPet}
              setPhotoPet = {setPhotoPet}
            setState={setSecondStep}
            handleSubmit={handleSubmitSecondStep}
            setIsFirstStepComplete={setIsFirstStepComplete}
          />
        </>
      )}
    </Container>
  );
};
export default ModalAddNotice;
