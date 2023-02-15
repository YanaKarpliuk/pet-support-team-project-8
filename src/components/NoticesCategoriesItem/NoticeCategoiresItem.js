import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalNotice from '../../components/ModalNotice/ModalNotice';
import elements from './NoticesCategoriesItem.styled';

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

const NoticesCategoriesItem = ({ info }) => {
  const [active, setActive] = useState(false);
  const { avatar, category, title, breed, location, birthdate, price = 0 } = info;

  const capitalizedCategory = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const calculateAge = (dob) => {
    if (dob === null) return "?"
    const diffMs = Date.now() - new Date(dob);
    const ageDt = new Date(diffMs);

    return Math.abs(ageDt.getUTCFullYear() - 1970);
  }

  return (
    <Item>
      <ImageContainer>
        <img src={avatar.url} alt="a pet" />
        <Category>{capitalizedCategory()}</Category>
        <AddToFav type="button">
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
