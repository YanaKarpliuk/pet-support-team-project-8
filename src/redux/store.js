import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

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
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
// export default store;

// {
//   "email": "auser@example.com",
//   "password": "qwerty123",
//   "name": "Auser",
//   "city": "Odesa, Odesa",
//   "phone": "+380631234567"
// }
let persistor = persistStore(store);
const appStore = { store, persistor };
export default appStore;
