import { configureStore } from '@reduxjs/toolkit';
import authStore from './auth/authReducer';

const store = configureStore({
  reducer: {
    auth: authStore.authReducer,
  },
});

export default store;
