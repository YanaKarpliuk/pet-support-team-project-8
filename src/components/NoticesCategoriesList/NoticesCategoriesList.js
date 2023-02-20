import NoticesCategoriesItem from "../NoticesCategoriesItem/NoticeCategoiresItem"
import elements from "./NoticesCategoriesList.styled"
import NotFound from "../NotFound/NotFound"
import { useSelector } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import searchSelectors from "../../redux/search/searchSelectors";
import noticesSelectors from "../../redux/notices/noticesSelectors";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import PaginationEl from "../Pagination/Pagination";

const { selectSearchState } = searchSelectors
const { selectNotices, selectFavoriteNotices, selectOwnNotices, selectNoticeIsLoading, selectNoticeError, } = noticesSelectors
const { List } = elements
let contentsNeeded = null

const NoticesCategoriesList = () => {
    const location = useLocation()
    const [, setSearchParams] = useSearchParams();
    const searchValue = useSelector(selectSearchState).trim().toLowerCase()
    const notices = useSelector(selectNotices)
    const favorite = useSelector(selectFavoriteNotices)
    const own = useSelector(selectOwnNotices)
    const loading = useSelector(selectNoticeIsLoading)
    const error = useSelector(selectNoticeError)

    useEffect(() => {
        const params = searchValue !== '' ? { search: searchValue } : {};
        setSearchParams(params);
    }, [setSearchParams, searchValue])

    if (location.pathname.includes("favorite")) {
        contentsNeeded = favorite ? favorite : []
    } else if (location.pathname.includes("own")) {
        contentsNeeded = own ? own : []
    } else { contentsNeeded = notices.result ? notices.result : [] }

    if (searchValue) {
        contentsNeeded = contentsNeeded.filter(({ title }) => title.includes(searchValue))
    }

    const items = contentsNeeded.map((itemData) => {
        return <NoticesCategoriesItem key={itemData._id} info={itemData} />
    })

    if (loading) {
        return <Loader />
    } else if ((items.length === 0 && !loading) || error) {
        return <NotFound />
    } else {
        return <><List items={items.length}>{items} </List>
            {(location.pathname.includes("favorite") || location.pathname.includes("own")) ? '' : <PaginationEl />}</>
    }
}

export default NoticesCategoriesList