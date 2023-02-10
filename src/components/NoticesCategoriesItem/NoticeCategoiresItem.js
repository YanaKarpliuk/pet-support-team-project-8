import elements from "./NoticesCategoriesItem.styled";

const { Item, Title, AddToFav, InfoList, Info, TextContainer, Category, ImageContainer, Heart } = elements

const NoticesCategoriesItem = ({ info }) => {
    const { img, category, title, breed, place, age } = info;

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
                    </InfoList>
                    <InfoList>
                        <span>{breed}</span>
                        <span>{place}</span>
                        <span>{age} year(s)</span>
                    </InfoList>
                </Info>

                <button type="button">Lear more</button>
            </TextContainer>
        </Item>
    )
}

export default NoticesCategoriesItem