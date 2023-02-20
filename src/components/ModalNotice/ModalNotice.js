import steyles from './ModalNotice.styled';
import { useSelector } from 'react-redux';
import noticesSelectors from '../../redux/notices/noticesSelectors';
import defaultPhoto from '../../images/default.jpg';

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

const { selectSingleNotice } = noticesSelectors;

const ModalNotice = ({ id, capitalizedCategory, addToFav }) => {
  const singleNotice = useSelector(selectSingleNotice);

  const transformDate = date => {
    const dateString = new Date(date);
    const day = dateString.getDate().toString().padStart(2, '0');
    const month = (dateString.getMonth() + 1).toString().padStart(2, '0');
    const year = dateString.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const { notice = {}, user={} } = singleNotice

  const {
    avatar = {},
    category,
    title,
    breed,
    name,
    birthdate,
    sex,
    comments,
    location,
    price = 0,
  } = notice;

  return (
    <Container>
      <Box>
        <ImgBox>
          <img src={avatar.url ? avatar.url : defaultPhoto} alt="a pet" />
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
                <Value>{transformDate(birthdate)} </Value>
              </Item>
              <Item>
                <Key>Breed: </Key>
                <Value>{breed} </Value>
              </Item>
              <Item>
                <Key>Place: </Key>
                <Value>{location} </Value>
              </Item>
              <Item>
                <Key>The sex: </Key>
                <Value>{sex} </Value>
              </Item>
              <Item>
                <Key>Email: </Key>
                <Value>
                  <a href="mailto:{user.email}">{user.email}</a>{' '}
                </Value>
              </Item>
              <Item>
                <Key>Phone: </Key>
                <Value>
                  <a href="tel:{user.phone}">{user.phone}</a>
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
          {comments}
        </ComentsContent>
      </ComentsBox>
      <BtnBox>
        <AddBtn type="button" onClick={() => addToFav()}>
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
