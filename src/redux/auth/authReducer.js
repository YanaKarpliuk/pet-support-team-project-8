import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authOperations from './authOperations';
const { register, login, logOut, updateUserData } = authOperations;

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

const onAuthRegisterSuccess = s => ({
  ...s,
  isLoading: false,
  error: null,
});

const onAuthLogInSuccess = (s, { payload }) => ({
  ...s,
  name: payload.name,
  email: payload.email,
  phone: payload.phone,
  city: payload.city,
  avatarURL: payload.avatarURL,
  birthday: payload.birthday,
  token: payload.token,
  id: payload._id,
  isLoggedIn: true,
  isLoading: false,
  error: null,
});

const onLogOutSuccess = s => ({
  name: null,
  email: null,
  phone: null,
  city: null,
  avatarURL: null,
  birthday: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
});

const onUpdateUserData = (s, { payload }) => ({
  ...s,
  // id: payload._id,
  avatarURL: payload.avatarURL,
  name: payload.name,
  email: payload.email,
  birthday: payload.birthday,
  phone: payload.phone,
  city: payload.city,
  isLoggedIn: true,
});

// const onUpdateUserData = (s, { payload }) => ({
//   ...s,
//   // id: payload._id,
//   ...payload.avatarURL,
//   ...payload.name,
//   ...payload.email,
//   ...payload.birthday,
//   ...payload.phone,
//   ...payload.city,
//   ...true,
// });

// const onUpdateUserData = (s, { payload }) => ({
//   ...s,
//   ...payload,
// });

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
      .addCase(logOut.fulfilled, onLogOutSuccess)
      .addCase(updateUserData.fulfilled, onUpdateUserData)
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logOut.rejected, updateUserData.rejected),
        handleRejected
      )
      .addMatcher(isAnyOf(register.pending, login.pending, logOut.pending), handlePending);
  },
});

// const persistConfig = {
//   key: 'token',
//   storage,
//   whitelist: ['token'],
// };

// const authReducer = persistReducer(persistConfig, authSlice.reducer);
const authReducer = authSlice.reducer;
const { removeError } = authSlice.actions;
const authStore = { authReducer, removeError };
export default authStore;
