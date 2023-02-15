import NewsEl from "../NewsEl/NewsEl"
import elements from "./NewsList.styled"
import NotFound from '../../components/NotFound/NotFound';
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import searchSelectors from "../../redux/search/searchSelectors";
import newsSelectors from "../../redux/news/newsSelectors";
import { useEffect } from "react";
import newsOperations from "../../redux/news/newsOperation";

const { List } = elements
const { selectSearchState } = searchSelectors
const { selectNews } = newsSelectors
const { fetchNews } = newsOperations

const NewsList = () => {
    const dispatch = useDispatch()
    const [_, setSearchParams] = useSearchParams();
    const searchValue = useSelector(selectSearchState)
    const news = useSelector(selectNews)

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    useEffect(() => {
        const params = searchValue !== '' ? { search: searchValue } : {};
        setSearchParams(params);
    }, [setSearchParams, searchValue])

    let contentsNeeded = news
    if (searchValue) {
        contentsNeeded = news.filter(({ title }) => title.toLowerCase().includes(searchValue))
    }

    const items = contentsNeeded.map((itemData) => {
        return <NewsEl key={itemData._id} info={itemData} />
    })
    if (items.length === 0) {
        return <NotFound />
    } else {
        return <List items={items.length}>{items}</List>
    }
}

export default NewsList