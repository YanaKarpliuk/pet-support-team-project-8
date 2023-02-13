import { configureStore } from '@reduxjs/toolkit';
import authStore from './auth/authReducer';
import userReducer from './user/slice';

const store = configureStore({
  reducer: {
    auth: authStore.authReducer,
    user: userReducer,
  },
});

export default store;
