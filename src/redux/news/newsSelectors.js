const selectNews = state => state.news.items;
const selectNewsError = state => state.news.error;
const selectIsNewsLoading = state => state.news.isLoading;

const newsSelectors = { selectNews, selectNewsError, selectIsNewsLoading }

export default newsSelectors