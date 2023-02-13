import SearchBar from "../../components/SearchBar/SearchBar";
import AddNoticeButton from "../../components/AddNoticeButton/AddNoticeButton";
import NoticesCategoriesNav from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import elements from "./NoticesPage.styled";
import doggo from '../../images/example.jpg';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NoticesCategoriesList from "../../components/NoticesCategoriesList/NoticesCategoriesList";

const { Section, Header, Container, CategoriesCont } = elements;

const adsEx = [{
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
    title: "Сute not dog looking for a home",
    category: "sell",
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
    title: "Сute not dog looking for a home",
    category: "in good hands",
    img: doggo,
    breed: 'Pomeranian',
    age: 'one',
    place: 'Lviv'
},
{
    id: 5,
    title: "Сute dog looking for a house",
    category: "sell",
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
    const [query, setQuery] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const [ads, setAds] = useState(adsEx)

    useEffect(() => {
        const params = query !== '' ? { query } : {};
        setSearchParams(params);
    }, [setSearchParams, query])

    const obtainQuery = (e) => {
        const value = e.currentTarget.value;

        setQuery(value)
    }

    const clearQuery = () => {
        setQuery('')
    }
    return (
        <Section>
            <Container>
                <Header style={{ textAlign: "center" }}>Find your favorite pet</Header>
                <SearchBar handleQuery={obtainQuery} value={query} clearQuery={clearQuery} />
                <CategoriesCont>
                    <NoticesCategoriesNav />
                    <AddNoticeButton />
                </CategoriesCont>
                <Outlet />
            </Container>
        </Section>
    );
};
export default NoticesPage;
