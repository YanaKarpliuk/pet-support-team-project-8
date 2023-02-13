import elements from "./NoticesCategoriesNav.styled"
import authSelectors from "../../redux/auth/authSelectors";
import { useSelector } from 'react-redux';

const { Option, Container } = elements;
const { selectIsLoggedIn } = authSelectors

const NoticesCategoriesNav = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (<Container>
        <Option to="lost-found">lost/found</Option>
        <Option to="for-free">in good hands</Option>
        <Option to="sell">sell</Option>
        {isLoggedIn ? <><Option to="favorite">favorite ads</Option>
            <Option to="own">my ads</Option></> : ''}
    </Container>)
}

export default NoticesCategoriesNav