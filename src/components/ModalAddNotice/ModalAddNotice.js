import styles from "../ModalAddNotice/ModalAddNotice.styled"
import { Formik} from 'formik';
const ModalAddNotice = () => {
    const {Forma, Title, Input, Label, InputBox, BtnBox, Btn } = styles;
    return (
      <>
        <Title>Add pet</Title>
        <Formik>
          <Forma>
            <InputBox>
              <Label htmlFor="name">Name pet</Label>
              <Input type="text" name="name" placeholder="Type name pet" />
            </InputBox>
            <InputBox>
              <Label htmlFor="name">Date of birth</Label>
              <Input type="text" name="date" placeholder="Type date of birth" />
            </InputBox>
            <InputBox>
              <Label htmlFor="name">Breed</Label>
              <Input type="text" name="breed" placeholder="Type breed" />
            </InputBox>
            <BtnBox>
              <Btn type="submit">Cancel</Btn>
              <Btn type="submit">Next</Btn>
            </BtnBox>
          </Forma>
        </Formik>
      </>
    );
    
}
export default ModalAddNotice;