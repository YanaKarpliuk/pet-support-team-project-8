import NewsEl from "../NewsEl/NewsEl"
import elements from "./NewsList.styled"
import NotFound from '../../components/NotFound/NotFound';
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import searchSelectors from "../../redux/search/searchSelectors";
import newsSelectors from "../../redux/news/newsSelectors";
import { useEffect } from "react";
import newsOperations from "../../redux/news/newsOperation";
import Loader from "../Loader/Loader";

const { List } = elements
const { selectSearchState } = searchSelectors
const { selectNews, selectNewsError, selectIsNewsLoading } = newsSelectors
const { fetchNews } = newsOperations

const NewsList = () => {
    const dispatch = useDispatch()
    const [_, setSearchParams] = useSearchParams();
    const searchValue = useSelector(selectSearchState).trim().toLowerCase()
    const news = useSelector(selectNews)
    const error = useSelector(selectNewsError)
    const loading = useSelector(selectIsNewsLoading)

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    useEffect(() => {
        const params = searchValue !== '' ? { search: searchValue } : {};
        setSearchParams(params);
    }, [setSearchParams, searchValue])

    let contentsNeeded = news
    if (searchValue) {
        contentsNeeded = contentsNeeded.filter(({ title }) => title.includes(searchValue))
    }

    const items = [...contentsNeeded]
        .sort((a, b) => {
            const aDate = new Date(a.date)
            const bDate = new Date(b.date)
            return bDate.getTime() - aDate.getTime()
        })
        .map((itemData) => {
            return <NewsEl key={itemData._id} info={itemData} />
        })

    if (loading) {
        return <Loader />
    } else if ((items.length === 0 && !loading) || error) {
        return <NotFound />
    } else {
        return <List items={items.length}>{items}</List>
    }
}

export default NewsList