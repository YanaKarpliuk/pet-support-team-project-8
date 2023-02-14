import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

=======
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
>>>>>>> main
import authStore from './auth/authReducer';
import userReducer from './user/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authStore.authReducer),
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
<<<<<<< HEAD
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
=======
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
>>>>>>> main
      },
    }),
});

<<<<<<< HEAD
// export const persistor = persistStore(store);
export default store;

// {
//   "email": "auser@example.com",
//   "password": "qwerty123",
//   "name": "Auser",
//   "city": "Odesa, Odesa",
//   "phone": "+380631234567"
// }
=======
let persistor = persistStore(store);
const appStore = { store, persistor };
export default appStore;
>>>>>>> main
