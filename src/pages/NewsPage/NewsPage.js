import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../../components/SearchBar/SearchBar'
import NewsList from '../../components/NewsList/NewsList'
import elements from './NewsPage.styled';
import { Helmet } from 'react-helmet';

const { Section, Header, Container } = elements

const NewsPage = () => {
    return (
        <Section >
            <Helmet>
                <title>News</title>
            </Helmet>
            <Container>
                <Header>News</Header>
                <SearchBar />
                <NewsList />
            </Container>
        </Section>
    )
};
export default NewsPage;
