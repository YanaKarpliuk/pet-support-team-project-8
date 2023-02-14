import { createSlice } from '@reduxjs/toolkit';
import { getUserData, updateUserData, addUserPet, removeUserPet, getPets } from './operations';

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
  pets: [],
  loading: false,
  userLoading: false,
  error: null,
  addPetError: null,
  isLoadingUpdate: false,
  isAddedPetSuccess: false,
};

const clearError = s => ({ ...s, error: null });

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: { removeError: clearError },
  extraReducers: {
    [getUserData.pending]: store => {
      store.loading = true;
      store.userLoading = true;
      store.error = null;
    },
    [getUserData.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.userLoading = false;
      store = payload;
    },
    [getUserData.rejected]: (store, { payload }) => {
      store.loading = false;
      store.userLoading = false;
      store.error = payload;
    },
    [updateUserData.pending]: store => {
      store.loading = true;
      store.error = null;
      store.isLoadingUpdate = true;
    },
    [updateUserData.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store = { ...store, ...payload };
      store.isLoadingUpdate = false;
    },
    [updateUserData.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.isLoadingUpdate = false;
    },
    [addUserPet.pending]: store => {
      store.loading = true;
      store.error = null;
      store.addPetError = null;
    },
    [addUserPet.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.addPetError = null;
      store.pets = [payload, ...store.pets];
      store.isAddedPetSuccess = true;
    },
    [addUserPet.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.addPetError = true;
    },
    [removeUserPet.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeUserPet.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.pets = store.pets.filter(({ _id }) => _id !== payload.id);
    },
    [removeUserPet.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [getPets.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getPets.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.pets = [...payload];
      store.error = null;
    },
    [getPets.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const { removeError } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
