import noticesOperations from "../redux/notices/noticesOperations";
import CATEGORIES from "./categories";
import { getUserData } from "../redux/user/operations";

const { fetchNoticesByCategory, fetchOwnNotices, fetchFavorite } = noticesOperations

const chooseWhatToLoad = ({ dispatch, pathname }) => {
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
}

export default chooseWhatToLoad