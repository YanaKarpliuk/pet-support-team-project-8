import React, { useState } from 'react';
import forms from './AddForms';
const {FirstStepAdd, SecondStepAdd} = forms

const firstStepInitialState = {
  name: "",
  date: "",
  breed: "",
};

const secondStepInitialState = {
  photo: "",
  coments: "",
};
const ModalAddNotice = () => {
const [firstStep, setFirstStep] = useState(firstStepInitialState);
const [secondStep, setSecondStep] = useState(secondStepInitialState);
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const handleSubmitFirstStep = (name, date, breed ) => {
    setFirstStep(name, date, breed);
    setIsFirstStepComplete(true);
    console.log(name, date,breed)
  };
  const handleSubmitSecondStep = ({photo, coments}) => {
 
    console.log(photo, coments)
  };
  return (
    <>
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
</>
  );
};
export default ModalAddNotice;
