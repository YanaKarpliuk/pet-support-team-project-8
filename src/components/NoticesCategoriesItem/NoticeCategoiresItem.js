import elements from "./NoticesCategoriesItem.styled";

const { Item, BtnCont, NoticeBtn, Title, AddToFav, InfoList, Info, TextContainer, Category, ImageContainer, Heart } = elements

const NoticesCategoriesItem = ({ info }) => {
    const { img, category, title, breed, place, age, price = 0 } = info;

    const capitalizedCategory = () => {
        return category.charAt(0).toUpperCase() + category.slice(1)
    }
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt="a pet" />
                <Category>{capitalizedCategory()}</Category>
                <AddToFav type="button"><Heart /></AddToFav>
            </ImageContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Info category={category}>
                    <InfoList>
                        <li><span>Breed:</span></li>
                        <li><span>Place:</span></li>
                        <li><span>Age:</span></li>
                        {category === "sell" ? <li><span>Price:</span></li> : ''}
                    </InfoList>
                    <InfoList>
                        <li><span>{breed}</span></li>
                        <li><span>{place}</span></li>
                        <li><span>{age} year(s)</span></li>
                        {category === "sell" ? <li><span>{price} $</span></li> : ''}
                    </InfoList>
                </Info>
                <BtnCont>
                    <NoticeBtn type="button">Lear more</NoticeBtn>
                    {/* <NoticeBtn type="button">Delete</NoticeBtn> */}
                </BtnCont>
            </TextContainer>
        </Item>
    )
}

export default NoticesCategoriesItem