import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authStore from './auth/authReducer';
import userReducer from './user/slice';
import { searchReducer } from './search/searchSlice';
import { newsReducer } from './news/newsSlice';
import { noticesReducer } from './notices/noticesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authStore.authReducer),
    user: userReducer,
    search: searchReducer,
    news: newsReducer,
    notices: noticesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
const appStore = { store, persistor };
export default appStore;
