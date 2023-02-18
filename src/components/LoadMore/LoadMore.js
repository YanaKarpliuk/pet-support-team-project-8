import elements from "./LoadMore.styled";
import { useDispatch, useSelector } from "react-redux";
import noticesOperations from "../../redux/notices/noticesOperations";
import { useLocation } from "react-router-dom";
import CATEGORIES from "../../utils/categories";
import noticesSelectors from "../../redux/notices/noticesSelectors";

const { fetchNoticesByCategory } = noticesOperations
const { selectNotices } = noticesSelectors
const { Container, LoadMore } = elements


const LoadMoreBtn = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { page, totalPages } = useSelector(selectNotices)

    let category = null;

    if (location.pathname.includes('lost-found')) {
        category = CATEGORIES.lostFound
    } else if (location.pathname.includes('sell')) {
        category = CATEGORIES.sell
    } else if (location.pathname.includes('for-free')) {
        category = CATEGORIES.inGoodHands
    }

    const handleLoadMore = () => {
        dispatch(fetchNoticesByCategory({ category, page: page + 1 }))
    }

    return (
        <Container page={page} totalPages={totalPages}>
            <LoadMore type="button" onClick={handleLoadMore}>
                Load more
            </LoadMore>
        </Container>
    );
};

export default LoadMoreBtn