import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalNotice from '../../components/ModalNotice/ModalNotice';
import elements from './NoticesCategoriesItem.styled';
import CATEGORIES from '../../utils/categories';
import { useSelector, useDispatch } from 'react-redux';
import noticesOperations from '../../redux/notices/noticesOperations';
import authSelectors from "../../redux/auth/authSelectors";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastAuthNeeded from '../../utils/toastAuthNeeded';
import defaultPhoto from '../../images/default.jpg'

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

const { selectIsLoggedIn, selectFavorite, selectUser } = authSelectors
const { addToFavorite, deleteFromFavorite, deleteOwnNotice, fetchSingleNotice } = noticesOperations;

const NoticesCategoriesItem = ({ info }) => {
  const dispatch = useDispatch()
  let favorite = false
  let favoriteEls = useSelector(selectFavorite)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const { userId = null } = useSelector(selectUser)
  const [active, setActive] = useState(false);
  const { _id, avatar, category, title, breed, location, birthdate, price = 0, owner } = info;

  const capitalizedCategory = () => {
    if (category === CATEGORIES.sell) {
      return 'Sell'
    }

    if (category === CATEGORIES.lostFound) {
      return 'Lost/found'
    }

    if (category === CATEGORIES.inGoodHands) {
      return 'In good hands'
    }
  };

  const calculateAge = (dob) => {
    if (dob === null) return "?"
    const diffMs = Date.now() - new Date(dob);
    const ageDt = new Date(diffMs);

    return Math.abs(ageDt.getUTCFullYear() - 1970);
  }

  const addToFav = () => {
    if (!isLoggedIn) {
      return toast.info("For this operation registration or login needed", toastAuthNeeded)
    }
    if (!favorite) {
      toast("Added to favorite", toastAuthNeeded)
      return dispatch(addToFavorite(_id))
    }
    if (favorite) {
      toast("Removed from favorite", toastAuthNeeded)
      return dispatch(deleteFromFavorite(_id))
    }
  }

  const selectedFav = () => {
    if (!isLoggedIn) {
      return favorite = false
    }
    const inFavs = favoriteEls?.find(element => element === _id)
    if (inFavs) return favorite = true

    return favorite = false
  }

  const deleteNotice = () => {
    dispatch(deleteOwnNotice(_id))
  }

  const handleLearMore = () => {
    setActive(true)
    dispatch(fetchSingleNotice(_id));
  }

  return (
    <Item>
      <ToastContainer />
      <ImageContainer>
        <img src={avatar.url ? avatar.url : defaultPhoto} alt="a pet" />
        <Category>{capitalizedCategory()}</Category>
        <AddToFav type="button" onClick={addToFav}>
          <Heart selected={selectedFav()} />
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
          <NoticeBtn type="button" onClick={handleLearMore}>
            Learn more
          </NoticeBtn>
          {owner === userId ? (
            <NoticeBtn type="button" onClick={deleteNotice}>
              Delete
            </NoticeBtn>
          ) : (
            ''
          )}
        </BtnCont>
      </TextContainer>
      <Modal active={active} setActive={setActive}>
        <ModalNotice id={_id} capitalizedCategory={capitalizedCategory} addToFav={ addToFav} />
      </Modal>
    </Item>
  );
};

export default NoticesCategoriesItem;
