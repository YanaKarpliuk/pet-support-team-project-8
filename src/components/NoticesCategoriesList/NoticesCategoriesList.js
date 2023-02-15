import NoticesCategoriesItem from "../NoticesCategoriesItem/NoticeCategoiresItem"
import elements from "./NoticesCategoriesList.styled"
import NotFound from "../NotFound/NotFound"
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import searchSelectors from "../../redux/search/searchSelectors";
import noticesSelectors from "../../redux/notices/noticesSelectors";
import { useEffect } from "react";

const { selectSearchState } = searchSelectors
const { selectNotices, selectFavoriteNotices, selectOwnNotices } = noticesSelectors
const { List } = elements

const NoticesCategoriesList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = useSelector(selectSearchState)
    const notices = useSelector(selectNotices)
    const favorite = useSelector(selectFavoriteNotices)
    const own = useSelector(selectOwnNotices)

    useEffect(() => {
        const params = searchValue !== '' ? { search: searchValue } : {};
        setSearchParams(params);
    }, [setSearchParams, searchValue])

    let contentsNeeded = notices
    if (searchValue) {
        contentsNeeded = notices.filter(({ title }) => title.toLowerCase().includes(searchValue))
    }

    const items = contentsNeeded.map((itemData) => {
        return <NoticesCategoriesItem key={itemData._id} info={itemData} />
    })

    if (items.length === 0) {
        return <NotFound />
    } else {
        return <List>{items}</List>
    }
}

export default NoticesCategoriesList