import SearchBar from "../../components/SearchBar/SearchBar";
import AddNoticeButton from "../../components/AddNoticeButton/AddNoticeButton";
import NoticesCategoriesNav from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import elements from "./NoticesPage.styled";
import doggo from '../../img/example.jpg'
import NoticesCategoriesList from "../../components/NoticesCategoriesList/NoticesCategoriesList";

const { Header, Container, CategoriesCont } = elements;

const ads = [{
    id: 1,
    title: "Сute dog looking for a home",
    category: "in good hands",
    img: doggo,
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
},
{
    id: 2,
    title: "Сute dog looking for a home",
    category: "cell",
    price: 13,
    img: doggo,
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
},
{
    id: 3,
    title: "Сute dog looking for a home",
    category: "lost/found",
    img: doggo,
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
},
{
    id: 4,
    title: "Сute dog looking for a home",
    category: "in good hands",
    img: doggo,
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
},
{
    id: 5,
    title: "Сute dog looking for a home",
    category: "cell",
    price: 13,
    img: doggo,
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
},
{
    id: 6,
    title: "Сute dog looking for a home",
    category: "lost/found",
    img: doggo,
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
