import steyles from './ModalNotice.styled';

const ModalNotice = ({ info, capitalizedCategory }) => {
  const {
    img,
    category,
    title,
    breed,
    name,
    birthday,
    sex,
    email,
    phone,
    coments,
    place,
    price = 0,
  } = info;
  const {
    Container,
    Box,
    ImgBox,
    InfoBox,
    Title,
    List,
    Item,
    ComentsBox,
    Coments,
    ComentsContent,
    BtnBox,
    AddBtn,
    IconHeart,
    ContactLink,
    Key,
    Value,
    Category,
  } = steyles;
  return (
    <Container>
      <Box>
        <ImgBox>
          <img src={img} alt="a pet" />
          <Category>{capitalizedCategory()}</Category>
        </ImgBox>
        <InfoBox>
          <Title>{title}</Title>
          <List>
            <tbody>
              <Item>
                <Key>Name: </Key>
                <Value>{name} </Value>
              </Item>
              <Item>
                <Key>Birthday: </Key>
                <Value>{birthday} </Value>
              </Item>
              <Item>
                <Key>Breed: </Key>
                <Value>{breed} </Value>
              </Item>
              <Item>
                <Key>Place: </Key>
                <Value>{place} </Value>
              </Item>
              <Item>
                <Key>The sex: </Key>
                <Value>{sex} </Value>
              </Item>
              <Item>
                <Key>Email: </Key>
                <Value>
                  <a href="mailto:{email}">{email}</a>{' '}
                </Value>
              </Item>
              <Item>
                <Key>Phone: </Key>
                <Value>
                  <a href="tel:{phone}">{phone}</a>
                </Value>
              </Item>
              {category === 'sell' ? (
                <Item>
                  <Key>Price: </Key>
                  <Value>{price} </Value>
                </Item>
              ) : (
                ''
              )}
            </tbody>
          </List>
        </InfoBox>
      </Box>
      <ComentsBox>
        <ComentsContent>
          <Coments>Comments: </Coments>
          {coments}
        </ComentsContent>
      </ComentsBox>
      <BtnBox>
        <AddBtn type="button">
          Add to
          <IconHeart />
        </AddBtn>
        <a href="tel:{phone}">
          <ContactLink>Contact</ContactLink>
        </a>
      </BtnBox>
    </Container>
  );
};
export default ModalNotice;
