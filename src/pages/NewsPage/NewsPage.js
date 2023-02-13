import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../../components/SearchBar/SearchBar'
import NewsList from '../../components/NewsList/NewsList'
import elements from './NewsPage.styled';

const { Section, Header, Container } = elements

const newsEx = [{
    id: '1',
    title: 'Обережно, кліщі! Як уберегти улюбленця',
    text: 'Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.',
    date: '2022/01/20',
    link: 'https://www.youtube.com/'

}, {
    id: '2',
    title: 'В День ветеринара в столиці пройде захід',
    text: 'В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини»,',
    date: '2022/11/10',
    link: 'https://www.youtube.com/'
}, {
    id: '3',
    title: 'У Телеграмі запрацював чат-бот',
    text: 'У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні ветеринарні консультації щодо догляду та лікування тварин. Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot.',
    date: '2022/02/20',
    link: 'https://www.youtube.com/'
},
{
    id: '4',
    title: 'Обережно, кліщі! Як уберегти улюбленця',
    text: 'Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.',
    date: '2022/01/20',
    link: 'https://www.youtube.com/'
}, {
    id: '5',
    title: 'В День ветеринара в столиці пройде...',
    text: 'В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини»,',
    date: '2022/11/10',
    link: 'https://www.youtube.com/'
}, {
    id: '6',
    title: 'У Телеграмі запрацював чат-бот',
    text: 'У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні ветеринарні консультації щодо догляду та лікування тварин. Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot.',
    date: '2022/02/20',
    link: 'https://www.youtube.com/'
}]

const NewsPage = () => {
    const [query, setQuery] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const [news, setNews] = useState(newsEx)

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
        <Section >
            <Container>
                <Header>News</Header>
                <SearchBar handleQuery={obtainQuery} value={query} clearQuery={clearQuery} />
                <NewsList query={query} contents={news} />
            </Container>
        </Section>
    )
};
export default NewsPage;
