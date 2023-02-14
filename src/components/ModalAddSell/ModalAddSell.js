import React, { useState } from 'react';
import forms from './AddSellForm';
import styles from '../ModalAddSell/ModalAddSell.styled';
const { FirstStepAdd, SecondStepAdd } = forms;
const { Container, Title } = styles;
const firstStepInitialState = {
  title: '',
  name: '',
  date: '',
  breed: '',
};

const secondStepInitialState = {
  sex: '',
  location: '',
  price: '',
  photo: '',
  coments: '',
};
const ModalAddSell = () => {
  const [firstStep, setFirstStep] = useState(firstStepInitialState);
  const [secondStep, setSecondStep] = useState(secondStepInitialState);
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const handleSubmitFirstStep = (name, date, breed, title) => {
    setFirstStep(title, name, date, breed);
    setIsFirstStepComplete(true);
  };
  const handleSubmitSecondStep = ({ photo, coments }) => {};
  return (
    <>
      <Container>
        <Title>Add pet</Title>
        {!isFirstStepComplete ? (
          <FirstStepAdd state={firstStep} handleSubmit={handleSubmitFirstStep} />
        ) : (
          <SecondStepAdd
            state={secondStep}
            setState={setSecondStep}
            handleSubmit={handleSubmitSecondStep}
            setIsFirstStepComplete={setIsFirstStepComplete}
          />
        )}
      </Container>
    </>
  );
};
export default ModalAddSell;
