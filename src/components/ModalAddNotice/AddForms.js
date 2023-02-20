import { Formik } from 'formik';
import styles from '../ModalAddNotice/ModalAddNotice.styled';
import * as Yup from 'yup';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
const { Forma, Input, Label, InputBox, BtnBox, Btn, InputFile, ErrorMsg, AddPhoto } = styles;

const firstStepSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  birthday: Yup.date().required('Birthday is required'),
  breed: Yup.string().required('Breed is required'),
});

const FirstStepAdd = ({ state, handleSubmit, onCancel }) => {
  return (
    <Formik initialValues={state} onSubmit={handleSubmit} validationSchema={firstStepSchema}>
      {({ errors, touched }) => (
        <Forma autoComplete="off">
          <InputBox>
            <Label htmlFor="name">Pet's name</Label>
            <Input type="text" name="name" placeholder="Type your pet's name" />
            {errors.name && touched.name ? <ErrorMsg>{errors.name}</ErrorMsg> : null}
          </InputBox>
          <InputBox>
            <Label htmlFor="birthday">Date of birth</Label>
            <Input type="date" name="birthday" placeholder="Type date of birth" />
            {errors.birthday && touched.birthday ? <ErrorMsg>{errors.birthday}</ErrorMsg> : null}
          </InputBox>
          <InputBox>
            <Label htmlFor="breed">Breed</Label>
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
  );
};

const SecondStepAdd = ({ state, handleSubmit, onBack }) => {
  const [photoPet, setPhotoPet] = useState(state.photoPet);

  const secondStepSchema = Yup.object().shape({
    comments: Yup.string().required('Comments are required').min(10).max(120),
  });

  const handlePhotoPetChange = e => {
    setPhotoPet(e.target.files?.[0]);
  };

  const handleSubmitWithPhotoPet = (values, formikHelpers) => {
    handleSubmit({ ...values, photoPet }, formikHelpers);
  };

  return (
    <Formik
      initialValues={state}
      onSubmit={handleSubmitWithPhotoPet}
      validationSchema={secondStepSchema}
    >
      {({ values, errors, touched }) => (
        <Forma autoComplete="off">
          <InputBox
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Label htmlFor="photoPet">
              Add photo and some comments
              <div
                style={{
                  width: 182,
                  height: 182,
                  margin: '20px auto 0',
                }}
              >
                <InputFile
                  id="photoPet"
                  as="input"
                  type="file"
                  name="photoPet"
                  accept=".png, .jpg, .jpeg"
                  onChange={handlePhotoPetChange}
                />
                <AddPhoto
                  htmlFor="photoPet"
                  preview={photoPet ? URL.createObjectURL(photoPet) : undefined}
                >
                  {photoPet ? null : <AiOutlinePlus size={71} color={'rgba(17, 17, 17, 0.6'} />}
                </AddPhoto>
              </div>
            </Label>
          </InputBox>
          <InputBox>
            <Label htmlFor="comments">Comments</Label>
            <Input
              component="textarea"
              type="text"
              name="comments"
              placeholder="Type comments"
              style={{
                height: 116,
                borderRadius: 20,
              }}
            />
            {errors.comments && touched.comments ? <ErrorMsg>{errors.comments}</ErrorMsg> : null}
          </InputBox>
          <BtnBox>
            <Btn type="button" onClick={() => onBack({ ...values, photoPet })}>
              Back
            </Btn>
            <Btn type="submit" secondStep={true}>
              Done
            </Btn>
          </BtnBox>
        </Forma>
      )}
    </Formik>
  );
};

const forms = { FirstStepAdd, SecondStepAdd };
export default forms;
