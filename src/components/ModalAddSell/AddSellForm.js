import { Field, Formik } from 'formik';
import styles from '../ModalAddSell/ModalAddSell.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { GiMale, GiFemale } from 'react-icons/gi';
const {
  Forma,
  Input,
  Label,
  InputBox,
  BtnBox,
  Btn,
  AddPhoto,
  CategoriesBox,
  Option,
  Text,
  LabelMale,
  TextBox,
} = styles;
const FirstStepAdd = ({ state, handleSubmit }) => {
  return (
    <div>
      <TextBox>
        <Text>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur{' '}
        </Text>
      </TextBox>
      <CategoriesBox>
        <li>
          <Option type="button">lost/found</Option>
        </li>
        <li>
          <Option type="button">in good hands</Option>
        </li>
        <li>
          <Option type="button">sell</Option>
        </li>
      </CategoriesBox>
      <Formik initialValues={state} onSubmit={handleSubmit}>
        <Forma autoComplete="off">
          <InputBox>
            <Label htmlFor="title">
              Tittle of ad <span style={{color:'#F59256'}}>*</span>
            </Label>
            <Input type="text" name="title" placeholder="Type name" />
          </InputBox>
          <InputBox>
            <Label htmlFor="name">Name pet</Label>
            <Input type="text" name="name" placeholder="Type name pet" />
          </InputBox>
          <InputBox>
            <Label htmlFor="date">Date of birth</Label>
            <Input type="text" name="date" placeholder="Type date of birth" />
          </InputBox>
          <InputBox>
            <Label htmlFor="breed">Breed</Label>
            <Input type="text" name="breed" placeholder="Type breed" />
          </InputBox>
          <BtnBox>
            <Btn type="submit">Cancel</Btn>
            <Btn type="submit">Next</Btn>
          </BtnBox>
        </Forma>
      </Formik>
    </div>
  );
};

const SecondStepAdd = ({ state, handleSubmit, setState, setIsFirstStepComplete }) => {
  return (
    <>
      <Formik initialValues={state} onSubmit={handleSubmit}>
        <Forma autoComplete="off">
          <InputBox>
            <Label htmlFor="sex">
              The sex<span style={{ color: '#F59256' }}>*</span>:
            </Label>
            <div style={{ display: 'flex', gap: 80 }}>
              <LabelMale htmlFor="sex" style={{ position: 'relative' }}>
                <GiMale size={60} style={{ position: 'absolute', color: '23C2EF' }} />
                <Field
                  type="radio"
                  name="sex"
                  value="male"
                  style={{
                    width: 60,
                    height: 60,
                    opacity: 0,
                  }}
                />
                Male
              </LabelMale>
              <LabelMale htmlFor="sex" style={{ position: 'relative' }}>
                <GiFemale size={60} style={{ position: 'absolute', color: 'FF8787' }} />
                <Field
                  type="radio"
                  name="sex"
                  value="female"
                  style={{
                    width: 60,
                    height: 60,
                    opacity: 0,
                  }}
                />
                Female
              </LabelMale>
            </div>
          </InputBox>
          <InputBox>
            <Label htmlFor="location">
              Location<span style={{ color: '#F59256' }}>*</span>:
            </Label>
            <Input type="text" name="location" placeholder="Type location" />
          </InputBox>
          <InputBox>
            <Label htmlFor="price">
              Price
              <span style={{ color: '#F59256' }}>*</span>:
            </Label>
            <Input type="text" name="price" placeholder="Type price" />
          </InputBox>
          <InputBox
            style={{
              display: 'flex',
              position: 'relative',
              marginBottom: 28,
            }}
          >
            <Label htmlFor="photo">Load the pet’s image:</Label>
            <div
              style={{
                width: 140,
                height: 140,
              }}
            >
              <AddPhoto>
                <AiOutlinePlus size={71} color={'rgba(17, 17, 17, 0.6'} />
              </AddPhoto>
              <Input
                type="file"
                name="photo"
                accept=".png, .jpg, .jpeg"
                style={{
                  width: 140,
                  height: 140,
                  opacity: 0,
                }}
              />
            </div>
          </InputBox>
          <InputBox>
            <Label htmlFor="coments">Comments</Label>
            <Input
              component="textarea"
              type="text"
              name="coments"
              placeholder="Type comments"
              style={{
                height: 116,
                borderRadius: 20,
                display: 'block',
              }}
            >
            </Input>
          </InputBox>
          <BtnBox>
            <Btn
              type="submit"
              onClick={() => {
                setIsFirstStepComplete(false);
              }}
            >
              Back
            </Btn>
            <Btn type="submit">Done</Btn>
          </BtnBox>
        </Forma>
      </Formik>
    </>
  );
};

const forms = { FirstStepAdd, SecondStepAdd };
export default forms;
