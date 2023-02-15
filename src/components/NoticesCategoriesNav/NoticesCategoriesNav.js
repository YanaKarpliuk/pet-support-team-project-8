import elements from "./NoticesCategoriesNav.styled"
import authSelectors from "../../redux/auth/authSelectors";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import noticesOperations from "../../redux/notices/noticesOperations";
import CATEGORIES from "../../utils/categories";

const { fetchNoticesByCategory } = noticesOperations
const { Option, Container } = elements;

const NoticesCategoriesNav = () => {
    const navigate = useNavigate();
    const { selectIsLoggedIn } = authSelectors
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        console.log("=====")
        navigate("/notices/sell", { replace: true });
    }, [navigate])

    const handleClick = (filter) => {
        dispatch(fetchNoticesByCategory(filter))
    }

    return (<Container>
        <Option to="lost-found" onClick={() => handleClick(CATEGORIES.lostFound)}>lost/found</Option>
        <Option to="for-free" onClick={() => handleClick(CATEGORIES.inGoodHands)}>in good hands</Option>
        <Option to="sell" onClick={() => handleClick(CATEGORIES.sell)}>sell</Option>
        {isLoggedIn ? <><Option to="favorite" onClick={() => handleClick(CATEGORIES.favoriteAds)}>favorite ads</Option>
            <Option to="own" onClick={() => handleClick(CATEGORIES.myAds)}>my ads</Option></> : ''}
    </Container>)
}

export default NoticesCategoriesNav