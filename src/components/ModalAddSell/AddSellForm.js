import { Formik } from 'formik';
import styles from '../ModalAddSell/ModalAddSell.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { GiMale, GiFemale } from 'react-icons/gi';
import * as Yup from 'yup';
import { useState } from 'react';

const {
  Forma,
  Input,
  InputBox,
  BtnBox,
  Btn,
  AddPhoto,
  CategoriesBox,
  RadioLabel,
  RadioInput,
  Text,
  Label,
  SexRadioInput,
  SexLabel,
  TextBox,
  AvatarInput,
  ErrorMsg,
} = styles;

const firstStepSchema = Yup.object().shape({
  category: Yup.string()
    .oneOf(['lostfound', 'ingoodhands', 'sell'])
    .required('Category is required'),
  title: Yup.string().required('Title is required').min(2).max(48),
  name: Yup.string().required('Name is required').min(2).max(16),
  birthdate: Yup.date().required('Birthdate is required'),
  breed: Yup.string().required('Breed is required').min(2).max(24),
});

const FirstStepAdd = ({ state, handleSubmit, onCancel }) => {
  return (
    <div>
      <TextBox>
        <Text>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur{' '}
        </Text>
      </TextBox>

      <Formik initialValues={state} onSubmit={handleSubmit} validationSchema={firstStepSchema}>
        {({ errors, touched }) => (
          <Forma autoComplete="off">
            <div style={{ position: 'relative' }}>
              <CategoriesBox>
                <RadioInput id="category-1" type="radio" name="category" value="lostfound" />
                <RadioLabel htmlFor="category-1">lost/found</RadioLabel>

                <RadioInput id="category-2" type="radio" name="category" value="ingoodhands" />
                <RadioLabel htmlFor="category-2">in good hands</RadioLabel>

                <RadioInput id="category-3" type="radio" name="category" value="sell" />
                <RadioLabel htmlFor="category-3">sell</RadioLabel>
              </CategoriesBox>
              {errors.category && touched.category ? <ErrorMsg>{errors.category}</ErrorMsg> : null}
            </div>
            <InputBox>
              <Label htmlFor="title">
                Title of ad <span style={{ color: '#F59256' }}>*</span>
              </Label>
              <Input type="text" name="title" placeholder="Type name" />
              {errors.title && touched.title ? <ErrorMsg>{errors.title}</ErrorMsg> : null}
            </InputBox>
            <InputBox>
              <Label htmlFor="name">
                Pet's name <span style={{ color: '#F59256' }}>*</span>
              </Label>
              <Input type="text" name="name" placeholder="Type the pet's name" />
              {errors.name && touched.name ? <ErrorMsg>{errors.name}</ErrorMsg> : null}
            </InputBox>
            <InputBox>
              <Label htmlFor="birthdate">
                Date of birth <span style={{ color: '#F59256' }}>*</span>
              </Label>
              <Input type="date" name="birthdate" placeholder="Type date of birth" />
              {errors.birthdate && touched.birthdate ? (
                <ErrorMsg>{errors.birthdate}</ErrorMsg>
              ) : null}
            </InputBox>
            <InputBox>
              <Label htmlFor="breed">
                Breed <span style={{ color: '#F59256' }}>*</span>
              </Label>
              <Input type="text" name="breed" placeholder="Type breed" />
              {errors.breed && touched.breed ? <ErrorMsg>{errors.breed}</ErrorMsg> : null}
            </InputBox>
            <BtnBox>
              <Btn type="button" onClick={onCancel}>
                Cancel
              </Btn>
              <Btn type="submit">Next</Btn>
            </BtnBox>
          </Forma>
        )}
      </Formik>
    </div>
  );
};

const SecondStepAdd = ({ state, handleSubmit, onBack }) => {
  const [avatar, setAvatar] = useState(state.avatar);

  const secondStepSchema = Yup.object().shape({
    sex: Yup.string().oneOf(['male', 'female']).required('Sex is required'),
    location: Yup.string()
      .required('Location is required')
      .matches(
        /^[A-Z][\w\s-]+,\s[A-Z][\w\s-]+$/,
        'Please, match this format: City, Region'
      ),
    price: state.category === 'sell' ? Yup.number().required('Price is required') : undefined,
    comments: Yup.string().required('Comments are required').min(8).max(120),
  });

  const handleAvatarChange = e => {
    setAvatar(e.target.files?.[0]);
  };

  const handleSubmitWithAvatar = (values, formikHelpers) => {
    handleSubmit({ ...values, avatar }, formikHelpers);
  };

  return (
    <>
      <Formik
        initialValues={state}
        onSubmit={handleSubmitWithAvatar}
        validationSchema={secondStepSchema}
      >
        {({ values, errors, touched }) => (
          <Forma autoComplete="off">
            <InputBox>
              <Label htmlFor="sex">
                The sex <span style={{ color: '#F59256' }}>*</span>
              </Label>
              <div style={{ display: 'flex', gap: 80 }}>
                <SexRadioInput
                  id="sex-male"
                  type="radio"
                  name="sex"
                  value="male"
                  style={{
                    width: 60,
                    height: 60,
                    opacity: 0,
                  }}
                />
                <SexLabel htmlFor="sex-male" style={{ position: 'relative' }}>
                  <GiMale size={60} style={{ color: '23C2EF' }} />
                  <span>Male</span>
                </SexLabel>
                <SexRadioInput
                  id="sex-female"
                  type="radio"
                  name="sex"
                  value="female"
                  style={{
                    width: 60,
                    height: 60,
                    opacity: 0,
                  }}
                />
                <SexLabel htmlFor="sex-female" style={{ position: 'relative' }}>
                  <GiFemale size={60} style={{ color: 'FF8787' }} />
                  <span>Female</span>
                </SexLabel>
              </div>
              {errors.sex && touched.sex ? <ErrorMsg>{errors.sex}</ErrorMsg> : null}
            </InputBox>
            <InputBox>
              <Label htmlFor="location">
                Location <span style={{ color: '#F59256' }}>*</span>
              </Label>
              <Input type="text" name="location" placeholder="Type location" />
              {errors.location && touched.location ? <ErrorMsg style={{bottom: '-35px'}}>{errors.location}</ErrorMsg> : null}
            </InputBox>
            {state.category === 'sell' && (
              <InputBox>
                <Label htmlFor="price">
                  Price <span style={{ color: '#F59256' }}>*</span>
                </Label>
                <Input type="number" name="price" placeholder="Type price" />
                {errors.price && touched.price ? <ErrorMsg>{errors.price}</ErrorMsg> : null}
              </InputBox>
            )}
            <InputBox
              style={{
                display: 'flex',
                position: 'relative',
                marginBottom: 28,
              }}
            >
              <Label htmlFor="avatar">Load the pet’s image</Label>
              <div
                style={{
                  width: 140,
                  height: 140,
                }}
              >
                <AvatarInput
                  id="avatar"
                  as="input"
                  type="file"
                  name="avatar"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleAvatarChange}
                />
                <AddPhoto
                  htmlFor="avatar"
                  preview={avatar ? URL.createObjectURL(avatar) : undefined}
                >
                  {avatar ? null : <AiOutlinePlus size={71} color={'rgba(17, 17, 17, 0.6'} />}
                </AddPhoto>
              </div>
            </InputBox>
            <InputBox>
              <Label htmlFor="comments">
                Comments <span style={{ color: '#F59256' }}>*</span>
              </Label>
              <Input
                component="textarea"
                type="text"
                name="comments"
                placeholder="Type comments"
                style={{
                  height: 116,
                  borderRadius: 20,
                  display: 'block',
                }}
              ></Input>
              {errors.comments && touched.comments ? <ErrorMsg style={{bottom: '-35px'}}>{errors.comments}</ErrorMsg> : null}
            </InputBox>
            <BtnBox>
              <Btn type="button" onClick={() => onBack({ ...values, avatar })}>
                Back
              </Btn>
              <Btn type="submit" secondStep={true}>
                Done
              </Btn>
            </BtnBox>
          </Forma>
        )}
      </Formik>
    </>
  );
};

const forms = { FirstStepAdd, SecondStepAdd };
export default forms;
