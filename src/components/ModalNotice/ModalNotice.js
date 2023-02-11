import steyles from './ModalNotice.styled';

const ModalNotice = () => {
  const {
    Container,
    Box,
    ImgBox,
    InfoBox,
    Title,
    List,
    ComentsBox,
    Coments,
    ComentsContent,
    BtnBox,
    AddBtn,
    IconHeart,
    ContactLink,
  } = steyles;
  return (
    <Container>
      <Box>
        <ImgBox></ImgBox>
        <InfoBox>
          <Title>Сute dog looking for a home</Title>
          <List>
            <li>Name: </li>
          </List>
        </InfoBox>
      </Box>
      <ComentsBox>
        <ComentsContent>
          <Coments>Coments: </Coments>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
          ipsum dolor sit amet, consectetur Lorem Lorem ipsum dolor sit amet, consectetur Lorem
          ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
        </ComentsContent>
      </ComentsBox>
      <BtnBox>
        <AddBtn>
          Add to
          <IconHeart />
        </AddBtn>
        <ContactLink>Contact</ContactLink>
      </BtnBox>
    </Container>
  );
};
export default ModalNotice;
