import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import authOperations from './authOperations';
const { register, login, verifyEmail, logOut, updateUserData, refreshUserData } = authOperations;

const initialState = {
  id: '',
  name: '',
  email: '',
  phone: '',
  city: '',
  avatarURL: '',
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
  IsRefreshing: false,
  error: null,
};

const onAuthRegisterSuccess = (s, { payload }) => ({
  ...s,
  isLoading: false,
  isLoggedIn: true,
  error: null,
  accessToken: payload.accessToken,
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
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
});

const onUpdateUserDataSuccess = (s, { payload }) => ({
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
//   ...payload,
// });

const onRefreshUserDataSuccess = (s, { payload }) => ({
  ...s,
  // id: payload._id,
  avatarURL: payload.avatarURL,
  name: payload.name,
  email: payload.email,
  birthday: payload.birthday,
  phone: payload.phone,
  city: payload.city,
  isLoggedIn: true,
  IsRefreshing: false,
  isLoading: false,
});

const onRefreshUserDataReject = (s, { payload }) => ({
  ...s,
  isLoading: false,
  IsRefreshing: false,
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
      .addCase(updateUserData.fulfilled, onUpdateUserDataSuccess)
      .addCase(refreshUserData.fulfilled, onRefreshUserDataSuccess)
      .addCase(refreshUserData.rejected, onRefreshUserDataReject)
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          verifyEmail.rejected,
          logOut.rejected,
          updateUserData.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(register.pending, login.pending, verifyEmail.pending, logOut.pending),
        handlePending
      );
  },
});

const authReducer = authSlice.reducer;
const { removeError } = authSlice.actions;
const authStore = { authReducer, removeError };
export default authStore;
