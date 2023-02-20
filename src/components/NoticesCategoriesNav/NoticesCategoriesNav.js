import elements from "./NoticesCategoriesNav.styled"
import authSelectors from "../../redux/auth/authSelectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import noticesOperations from "../../redux/notices/noticesOperations";
import CATEGORIES from "../../utils/categories";
import { getUserData } from "../../redux/user/operations";

const { fetchNoticesByCategory, fetchOwnNotices, fetchFavorite } = noticesOperations
const { Option, Container } = elements;

const NoticesCategoriesNav = () => {
    const { pathname } = useLocation()
    const { selectIsLoggedIn } = authSelectors
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        dispatch(getUserData())
        if (pathname.includes("favorite")) {
            dispatch(fetchFavorite())
        } else if (pathname.includes("own")) {
            dispatch(fetchOwnNotices())
        } else {
            if (pathname.includes("sell")) {
                dispatch(fetchNoticesByCategory({ category: CATEGORIES.sell }))
            } else if (pathname.includes("for-free")) {
                dispatch(fetchNoticesByCategory({ category: CATEGORIES.inGoodHands }))
            } else if (pathname.includes("lost-found")) {
                dispatch(fetchNoticesByCategory({ category: CATEGORIES.lostFound }))
            }
        }
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
        <Option to="lost-found" onClick={() => handleCategoryFetch({ category: CATEGORIES.lostFound })}>lost/found</Option>
        <Option to="for-free" onClick={() => handleCategoryFetch({ category: CATEGORIES.inGoodHands })}>in good hands</Option>
        <Option to="sell" onClick={() => handleCategoryFetch({ category: CATEGORIES.sell })}>sell</Option>
        {isLoggedIn ? <><Option to="favorite" onClick={handleFavoriteFetch}>favorite ads</Option>
            <Option to="own" onClick={handleOwnFetch}>my ads</Option></> : ''}
    </Container>)
}

export default NoticesCategoriesNav