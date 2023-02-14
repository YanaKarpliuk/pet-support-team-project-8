import SearchBar from "../../components/SearchBar/SearchBar";
import AddNoticeButton from "../../components/AddNoticeButton/AddNoticeButton";
import NoticesCategoriesNav from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import elements from "./NoticesPage.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const { Section, Header, Container, CategoriesCont } = elements;

// const ads = [
//   {
//     id: 1,
//     title: 'Сute dog looking for a home',
//     category: 'in good hands',
//     img: doggo,
//     name: 'Rich',
//     birthday: '12.05.2022',
//     breed: 'Pomeranian',
//     age: 'one',
//     place: 'Lviv',
//     sex: 'male',
//     email: 'test1@u.com',
//     phone: '+380968475263',
//     coments: 'this is a wonderful dog',
//   },
//   {
//     id: 2,
//     title: 'Сute dog looking for a home',
//     category: 'sell',
//     price: 13,
//     img: doggo,
//     breed: 'Pomeranian',
//     age: 'one',
//     place: 'Lviv',
//   },
//   {
//     id: 3,
//     title: 'Сute dog looking for a home',
//     category: 'lost/found',
//     img: doggo,
//     breed: 'Pomeranian',
//     age: 'one',
//     place: 'Lviv',
//   },
//   {
//     id: 4,
//     title: 'Сute dog looking for a home',
//     category: 'in good hands',
//     img: doggo,
//     breed: 'Pomeranian',
//     age: 'one',
//     place: 'Lviv',
//   },
//   {
//     id: 5,
//     title: 'Сute dog looking for a home',
//     category: 'sell',
//     price: 13,
//     img: doggo,
//     breed: 'Pomeranian',
//     age: 'one',
//     place: 'Lviv',
//   },
//   {
//     id: 6,
//     title: 'Сute dog looking for a home',
//     category: 'lost/found',
//     img: doggo,
//     breed: 'Pomeranian',
//     age: 'one',
//     place: 'Lviv',
//   },
// ];

const NoticesPage = () => {
    return (
        <Section>
            <Container>
                <Header style={{ textAlign: "center" }}>Find your favorite pet</Header>
                <SearchBar />
                <CategoriesCont>
                    <NoticesCategoriesNav />
                    <AddNoticeButton />
                </CategoriesCont>
                <Suspense><Outlet /></Suspense>
            </Container>
        </Section>
    );
};
export default NoticesPage;
