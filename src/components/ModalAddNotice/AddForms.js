import { Formik } from 'formik';
import styles from '../ModalAddNotice/ModalAddNotice.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { addUserPet } from '../../redux/user/operations';
// import { getUserPets } from '../../redux/user/selectors';
// import { AiOutlinePlus } from 'react-icons/ai';
const { Forma, Input, Label, InputBox, BtnBox, Btn, InputFile } = styles;
const FirstStepAdd = ({ state, handleSubmit }) => {
  return (
    <Formik initialValues={state} onSubmit={handleSubmit}>
      <Forma autoComplete="off">
        <InputBox>
          <Label htmlFor="name">Name pet</Label>
          <Input type="text" name="name" placeholder="Type name pet" />
        </InputBox>
        <InputBox>
          <Label htmlFor="birthday">Date of birth</Label>
          <Input type="date" name="birthday" placeholder="Type date of birth" />
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
  );
};

const SecondStepAdd = ({ state, handleSubmit, setState, photoPet, setPhotoPet, setIsFirstStepComplete }) => {
  // const pet = useSelector(getUserPets);
  // console.log(pet);

  // const handleChange = e => {
  
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setState({ photoPet: reader.result });
  //       // console.log(photoPet);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);

  //   const formData = new FormData();
  //   formData.append('photoPet', e.target.files[0]);
  //     setState({photoPet: formData.result});
  //   console.log(state.photoPet);
  //   // setState({photoPet: formData})
  //   // console.log(photoPet);

  //   // setState({ photoPet: formData });
  //   // console.log(state.photoPet);
  // };
  const handleChange = e => {
    const avatar =e.currentTarget.files[0];
    console.log(avatar)
    // const formData = new FormData();
    // formData.append('avatar', avatar);
    setPhotoPet({ photoPet: avatar });
    // dispatch(addUserPet(formData));
  };
  return (
    <>
      <div
      style={{
        width: 200,
        height: 200,
      }}
    >
      <InputBox
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Label
          htmlFor="photoPet"
          // onChange={handleChange}
        >
          Add photo and some comments
          <div
            style={{
              width: 182,
              height: 182,
              margin: '0 auto',
            }}
          >
            {/* <img src={state.photoPet} alt="" id="img" className="img" /> */}
            {/* <img
                src={
                  !pets.photoPet ? (
                    <AddPhoto>
                      <AiOutlinePlus size={48} color={'rgba(17, 17, 17, 0.6'} />
                    </AddPhoto>
                  ) : (
                    { pets.photoPet }
                  )
                }
                alt="photoPet"
                style={{ width: 182, height: 182 }}
              /> */}
            <InputFile
              type="file"
              name="photoPet"
              onChange={handleChange}
                accept=".png, .jpg, .jpeg"
    
              style={{
                width: 182,
                height: 182,
                opacity: 0,
              }}
            />
          </div>
        </Label>
      </InputBox>
    </div>
      <Formik initialValues={state} onSubmit={handleSubmit}>
        <Forma autoComplete="off">
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
          </InputBox>
          <BtnBox>
            <Btn
              type="button"
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
    </>
  );
};

const forms = { FirstStepAdd, SecondStepAdd };
export default forms;
