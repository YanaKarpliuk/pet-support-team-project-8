import elements from "./NoticesCategoriesNav.styled"
import authSelectors from "../../redux/auth/authSelectors";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import noticesOperations from "../../redux/notices/noticesOperations";
import CATEGORIES from "../../utils/categories";

const { fetchNoticesByCategory, fetchOwnNotices, fetchFavorite } = noticesOperations
const { Option, Container } = elements;

const NoticesCategoriesNav = () => {
    const navigate = useNavigate();
    const { selectIsLoggedIn } = authSelectors
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        navigate("/notices/sell", { replace: true });
        dispatch(fetchNoticesByCategory(CATEGORIES.sell))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCategoryFetch = (filter) => {
        dispatch(fetchNoticesByCategory(filter))
    }

    const handleFavoriteFetch = () => {
        dispatch(fetchFavorite())
    }

    const handleOwnFetch = () => {
        dispatch(fetchOwnNotices())
    }

    return (<Container>
        <Option to="lost-found" onClick={() => handleCategoryFetch(CATEGORIES.lostFound)}>lost/found</Option>
        <Option to="for-free" onClick={() => handleCategoryFetch(CATEGORIES.inGoodHands)}>in good hands</Option>
        <Option to="sell" onClick={() => handleCategoryFetch(CATEGORIES.sell)}>sell</Option>
        {isLoggedIn ? <><Option to="favorite" onClick={handleFavoriteFetch}>favorite ads</Option>
            <Option to="own" onClick={handleOwnFetch}>my ads</Option></> : ''}
    </Container>)
}

export default NoticesCategoriesNav