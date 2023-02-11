import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authOperations from './authOperations';
const { register, login } = authOperations;

const initialState = {
  id: '',
  name: '',
  email: '',
  phone: '',
  city: '',
  avatarURL: '',
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const onAuthRegisterSuccess = (s, { payload }) => ({
  ...s,
  name: payload.name,
  email: payload.email,
  phone: payload.phone,
  city: payload.city,
  avatarURL: payload.avatarURL,
  isLoading: false,
  error: null,
});

const onAuthLogInSuccess = (s, { payload }) => ({
  ...s,
  token: payload.token,
  id: payload.id,
  isLoggedIn: true,
  isLoading: false,
  error: null,
});

const handleRejected = (s, { payload }) => ({
  ...s,
  isLoading: false,
  error: payload,
});

const handlePending = s => ({
  ...s,
  isLoading: true,
});

const clearError = s => ({ ...s, error: null });

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    removeError: clearError,
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, onAuthLogInSuccess)
      .addCase(register.fulfilled, onAuthRegisterSuccess)
      .addMatcher(isAnyOf(register.rejected, login.rejected), handleRejected)
      .addMatcher(isAnyOf(register.pending, login.pending), handlePending);
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authReducer = persistReducer(persistConfig, authSlice.reducer);
const { removeError } = authSlice.actions;
const authStore = { authReducer, removeError };
export default authStore;
