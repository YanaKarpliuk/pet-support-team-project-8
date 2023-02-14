import { configureStore } from '@reduxjs/toolkit';
import authStore from './auth/authReducer';
import userReducer from './user/slice';
import { searchReducer } from './search/searchSlice';
import { newsReducer } from './news/newsSlice';
import { noticesReducer } from './notices/noticesSlice';

const store = configureStore({
  reducer: {
    auth: authStore.authReducer,
    user: userReducer,
    search: searchReducer,
    news: newsReducer,
    notices: noticesReducer,
  },
});

export default store;
