const selectNotices = state => state.notices.notices;
const selectSingleNotice = state => state.notices.singleNotice;
const selectFavoriteNotices = state => state.notices.favorite;
const selectOwnNotices = state => state.notices.own;

const noticesSelectors = { selectNotices, selectSingleNotice, selectFavoriteNotices, selectOwnNotices }

export default noticesSelectors