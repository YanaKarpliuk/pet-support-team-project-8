const selectNotices = state => state.notices.notices;
const selectSingleNotice = state => state.notices.singleNotice;

const noticesSelectors = { selectNotices, selectSingleNotice }

export default noticesSelectors