import elements from "./Pagination.styled";
import { useDispatch, useSelector } from "react-redux";
import noticesOperations from "../../redux/notices/noticesOperations";
import { useLocation } from "react-router-dom";
import CATEGORIES from "../../utils/categories";
import noticesSelectors from "../../redux/notices/noticesSelectors";
import { Pagination } from "@mui/material";

const { fetchNoticesByCategory } = noticesOperations
const { selectNotices } = noticesSelectors
const { Container, LoadItem } = elements


const PaginationEl = () => {
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

    const handleLoadMore = (_, value) => {
        dispatch(fetchNoticesByCategory({ category, page: value }))
    }

    return (
        <Container totalPages={totalPages}>
            <Pagination count={totalPages} size="large" page={page} onChange={handleLoadMore} renderItem={item => <LoadItem {...item} />} />
        </Container>
    );
};

export default PaginationEl