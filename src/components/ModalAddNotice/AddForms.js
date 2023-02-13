
import { Formik } from 'formik';
import styles from '../ModalAddNotice/ModalAddNotice.styled';
import { AiOutlinePlus } from 'react-icons/ai';
const { Container, Forma, Title, Input, Label, InputBox, BtnBox, Btn, AddPhoto } = styles;
const FirstStepAdd = ({ state, handleSubmit }) => {
  return (
    <Container>
      <Title>Add pet</Title>
          <Formik initialValues={ state} onSubmit={handleSubmit}>
        <Forma autoComplete="off">
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
    </Container>
  );
};

const SecondStepAdd = ({ state, handleSubmit, setState, setIsFirstStepComplete }) => {
  return (
    <Container>
      <Title>Add pet</Title>
      <Formik initialValues={state} onSubmit={handleSubmit}>
        <Forma autoComplete="off">
          <InputBox
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Label htmlFor="photo">Add photo and some comments</Label>
            <div
              style={{
                width: 182,
                height: 182,
                margin: '0 auto',
              }}
            >
              <AddPhoto>
                <AiOutlinePlus size={48} color={'rgba(17, 17, 17, 0.6'} />
              </AddPhoto>
              <Input
                type="file"
                name="photo"
                accept=".png, .jpg, .jpeg"
                style={{
                  width: 182,
                  height: 182,
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
              }}
            />
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
            <Btn type="submit" secondStep={true}>
              Done
            </Btn>
          </BtnBox>
        </Forma>
      </Formik>
    </Container>
  );
};

const forms = {FirstStepAdd, SecondStepAdd };
export default forms;