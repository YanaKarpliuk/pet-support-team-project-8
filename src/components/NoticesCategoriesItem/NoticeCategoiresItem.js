import elements from "./NoticesCategoriesItem.styled";

const { Item, LearMore, Title, AddToFav, InfoList, Info, TextContainer, Category, ImageContainer, Heart } = elements

const NoticesCategoriesItem = ({ info }) => {
    const { img, category, title, breed, place, age, price = 0 } = info;

    return (
        <Item>
            <ImageContainer>
                <img src={img} alt="a pet" />
                <Category>{category}</Category>
                <AddToFav type="button"><Heart /></AddToFav>
            </ImageContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Info>
                    <InfoList>
                        <span>Breed:</span>
                        <span>Place:</span>
                        <span>Age:</span>
                        {category === "cell" ? <span>Price:</span> : ''}
                    </InfoList>
                    <InfoList>
                        <span>{breed}</span>
                        <span>{place}</span>
                        <span>{age} year(s)</span>
                        {category === "cell" ? <span>{price} $</span> : ''}
                    </InfoList>
                </Info>

                <LearMore type="button">Lear more</LearMore>
            </TextContainer>
        </Item>
    )
}

export default NoticesCategoriesItem