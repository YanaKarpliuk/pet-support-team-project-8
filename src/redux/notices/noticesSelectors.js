const selectNotices = state => state.notices.notices;
const selectSingleNotice = state => state.notices.singleNotice;
const selectFavoriteNotices = state => state.notices.favorite;
const selectOwnNotices = state => state.notices.own;
const selectNoticeError = state => state.notices.error;
const selectNoticeIsLoading = state => state.notices.isLoading;

const noticesSelectors = { selectNoticeIsLoading, selectNoticeError, selectNotices, selectSingleNotice, selectFavoriteNotices, selectOwnNotices }

export default noticesSelectors