import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalNotice from '../../components/ModalNotice/ModalNotice';
import elements from './NoticesCategoriesItem.styled';
import CATEGORIES from '../../utils/categories';
import { useSelector, useDispatch } from 'react-redux';
import noticesOperations from '../../redux/notices/noticesOperations';
import authSelectors from "../../redux/auth/authSelectors";
import { useNavigate } from 'react-router-dom';

const {
  Item,
  BtnCont,
  NoticeBtn,
  Title,
  AddToFav,
  InfoList,
  Info,
  TextContainer,
  Category,
  ImageContainer,
  Heart,
} = elements;

const { selectIsLoggedIn } = authSelectors
const { addToFavorite, deleteFromFavorite } = noticesOperations

const NoticesCategoriesItem = ({ info }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const [active, setActive] = useState(false);
  let { _id, avatar, category, title, breed, location, birthdate, price = 0, favorite = null } = info;

  const capitalizedCategory = () => {
    if (category === CATEGORIES.sell) {
      category = 'sell'
    }

    if (category === CATEGORIES.lostFound) {
      category = 'lost/found'
    }

    if (category === CATEGORIES.inGoodHands) {
      category = 'in good hands'
    }
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const calculateAge = (dob) => {
    if (dob === null) return "?"
    const diffMs = Date.now() - new Date(dob);
    const ageDt = new Date(diffMs);

    return Math.abs(ageDt.getUTCFullYear() - 1970);
  }

  const addToFav = () => {
    if (!isLoggedIn) {
      return navigate('/register')
    }
    if (!favorite) {
      return dispatch(addToFavorite(_id))
    }
    if (!favorite) {
      return dispatch(deleteFromFavorite(_id))
    }
  }

  return (
    <Item>
      <ImageContainer>
        <img src={avatar.url} alt="a pet" />
        <Category>{capitalizedCategory()}</Category>
        <AddToFav type="button" active={favorite} onClick={addToFav}>
          <Heart />
        </AddToFav>
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Info category={category}>
          <InfoList>
            <li>
              <span>Breed:</span>
            </li>
            <li>
              <span>Place:</span>
            </li>
            <li>
              <span>Age:</span>
            </li>
            {category === 'sell' ? (
              <li>
                <span>Price:</span>
              </li>
            ) : (
              ''
            )}
          </InfoList>
          <InfoList>
            <li>
              <span>{breed}</span>
            </li>
            <li>
              <span>{location}</span>
            </li>
            <li>
              <span>{calculateAge(birthdate)} year(s)</span>
            </li>
            {category === 'sell' ? (
              <li>
                <span>{price} $</span>
              </li>
            ) : (
              ''
            )}
          </InfoList>
        </Info>
        <BtnCont>
          <NoticeBtn type="button" onClick={() => setActive(true)}>
            Lear more
          </NoticeBtn>
          {/* <NoticeBtn type="button">Delete</NoticeBtn> */}
        </BtnCont>
      </TextContainer>
      <Modal active={active} setActive={setActive}>
        <ModalNotice info={info} capitalizedCategory={capitalizedCategory} />
      </Modal>
    </Item>
  );
};

export default NoticesCategoriesItem;
