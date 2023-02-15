import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authOperations from './authOperations';
const { register, login, verifyEmail, logOut, updateUserInformation } = authOperations;

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
  token: payload.accessToken,
  id: payload._id,
  isLoggedIn: true,
  isLoading: false,
  error: null,
});

const onVerifyEmailSuccess = s => ({
  ...s,
  isLoading: false,
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

// const onUpdateUserInformation = (s, { payload }) => ({
//   ...s,
//   // id: payload._id,
//   avatarURL: payload.avatarURL,
//   name: payload.name,
//   email: payload.email,
//   birthday: payload.birthday,
//   phone: payload.phone,
//   city: payload.city,
//   isLoggedIn: true,
// });

// const onUpdateUserInformation = (s, { payload }) => ({
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

const onUpdateUserInformation = (s, { payload }) => ({
  ...s,
  ...payload,
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
      .addCase(verifyEmail.fulfilled, onVerifyEmailSuccess)
      .addCase(login.fulfilled, onAuthLogInSuccess)
      .addCase(register.fulfilled, onAuthRegisterSuccess)
      .addCase(logOut.fulfilled, onLogOutSuccess)
      .addCase(updateUserInformation.fulfilled, onUpdateUserInformation)
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          verifyEmail.rejected,
          logOut.rejected,
          updateUserInformation.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(register.pending, login.pending, verifyEmail.pending, logOut.pending),
        handlePending
      );
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
