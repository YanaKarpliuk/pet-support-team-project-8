import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import forms from './AddSellForm';
import styles from '../ModalAddSell/ModalAddSell.styled';
import noticesOperations from '../../redux/notices/noticesOperations';

const { addNotice } = noticesOperations;
const { FirstStepAdd, SecondStepAdd } = forms;
const { Container, Title } = styles;

const infoInitialState = {
  category: '',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: '',
  location: '',
  price: '',
  comments: '',
};

const ModalAddSell = () => {
  const [info, setInfo] = useState(infoInitialState);
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const dispatch = useDispatch();
  const handleSubmitFirstStep = ({ name, birthdate, breed, category, title }) => {
    setInfo(info => ({
      ...info,
      title,
      name,
      birthdate,
      category,
      breed,
    }));

    setIsFirstStepComplete(true);
  };

  const handleSubmitSecondStep = async (values, { resetForm }) => {
    const { sex, location, price, avatar, comments } = values;

    setInfo(info => ({
      ...info,
      sex,
      location,
      price,
      avatar,
      comments,
    }));

    const formData = new FormData();
    formData.append('category', info.category);
    formData.append('name', info.name);
    formData.append('birthdate', new Date(info.birthdate).toISOString());
    formData.append('breed', info.breed);
    formData.append('title', info.title);
    formData.append('sex', sex);
    formData.append('location', location);
    if (price) formData.append('price', price);
    if (avatar) formData.append('avatar', avatar);
    formData.append('comments', comments);
    dispatch(addNotice(formData));
    resetForm();
  };
  
  return (
    <>
      <Container>
        <Title>Add pet</Title>
        {!isFirstStepComplete ? (
          <FirstStepAdd state={info} handleSubmit={handleSubmitFirstStep} />
        ) : (
          <SecondStepAdd
            state={info}
            handleSubmit={handleSubmitSecondStep}
            onBack={() => setIsFirstStepComplete(false)}
          />
        )}
      </Container>
    </>
  );
};
export default ModalAddSell;
