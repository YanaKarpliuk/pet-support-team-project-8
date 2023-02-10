import SearchBar from "../../components/SearchBar/SearchBar";
import AddNoticeButton from "../../components/AddNoticeButton/AddNoticeButton";
import NoticesCategoriesNav from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import elements from "./NoticesPage.styled";
import NoticesCategoriesList from "../../components/NoticesCategoriesList/NoticesCategoriesList";

const { Header, Container, CategoriesCont } = elements;

const ads = [{
    id: 1,
    title: "Сute dog looking for a home",
    category: "in good hands",
    img: "https://www.shutterstock.com/image-photo/big-light-brown-bitch-purebred-breeding-1742682791",
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
},
{
    id: 2,
    title: "Сute dog looking for a home",
    category: "cell",
    img: "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/",
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
},
{
    id: 3,
    title: "Сute dog looking for a home",
    category: "lost/found",
    img: "https://www.shutterstock.com/image-photo/hungry-jack-russell-dog-empty-bowl-1484307701",
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
}]

const NoticesPage = () => {
    return (
        <Container>
            <Header style={{ textAlign: "center" }}>Find your favorite pet</Header>
            <SearchBar />
            <CategoriesCont>
                <NoticesCategoriesNav />
                <AddNoticeButton />
            </CategoriesCont>
            <NoticesCategoriesList contents={ads} />
        </Container>
    );
};
export default NoticesPage;
