import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import forms from './AddSellForm';
import styles from '../ModalAddSell/ModalAddSell.styled';
import noticesOperations from '../../redux/notices/noticesOperations';
const {addNotice} = noticesOperations;

const { FirstStepAdd, SecondStepAdd } = forms;
const { Container, Title } = styles;
const firstStepInitialState = {
  category: 'sell',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
};

const secondStepInitialState = {
  sex: '',
  location: '',
  price: '',
  // avatar: null,
  comments: '',
};
const ModalAddSell = () => {
  const [firstStep, setFirstStep] = useState(firstStepInitialState);
  const [secondStep, setSecondStep] = useState(secondStepInitialState);
  const [avatar, setAvatar] = useState(null);
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const dispatch = useDispatch();
  const handleSubmitFirstStep = ({name, birthdate, breed, category, title}) => {
    setFirstStep({ title, name, birthdate: new Date(birthdate).toISOString(), category, breed });
    console.log(title, name, birthdate,category, breed);
    setIsFirstStepComplete(true);
  };
  
  const handleSubmitSecondStep = async (values, {resetForm }) => {
   console.log(values)
    setIsFirstStepComplete(true);
  
    const { sex, location, price, avatar, comments } = values;
    setSecondStep({
      sex,
      location,
      price,
    // avatar,
      comments,
    });
setAvatar({avatar})
    
    setSecondStep({ ...secondStepInitialState });
    setFirstStep({ ...firstStepInitialState });
    setAvatar({avatar})
    const { name, birthdate, breed, title, category } = firstStep;
    console.log(avatar);
    const formData = new FormData();
    formData.append('category', category);
     formData.append('name', name);
    formData.append('birthdate', birthdate);
    formData.append('breed', breed);
    formData.append('title', title);
    formData.append('sex', sex);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('avatar', avatar);
    formData.append('comments', comments);
    console.log(formData);
    dispatch(addNotice(formData));
    console.log(name, title, birthdate, breed, sex, location, price, avatar, comments);
    resetForm();
  };
  return (
    <>
      <Container>
        <Title>Add pet</Title>
        {!isFirstStepComplete ? (
          <FirstStepAdd state={firstStep} handleSubmit={handleSubmitFirstStep} />
        ) : (
          <SecondStepAdd
              state={secondStep}
              avatar={avatar}
              setAvatar = {setAvatar}
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
