import { createSlice } from '@reduxjs/toolkit';
import { getUserData, updateUserData, addUserPet, removeUserPet, getPets } from './operations';

const initialState = {
  user: { avatarURL: null, userInfo: {} },
  pets: [],
  isDeletePetLoading: false,
  loading: false,
  userLoading: false,
  error: null,
  addPetError: null,
  isLoadingUpdate: false,
  isDisabledFields: false,
  isAddedPetSuccess: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetIsAddedPetSuccess: state => {
      state.isAddedPetSuccess = false;
    },
    resetError: state => {
      state.error = null;
    },
  },
  extraReducers: {
    [getUserData.pending]: store => {
      store.loading = true;
      store.userLoading = true;
      store.error = null;
    },
    [getUserData.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.userLoading = false;
      store.user = payload.userList;
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
      store.isDisabledFields = false;
    },
    [updateUserData.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = { ...store.user, ...payload.user };
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
      store.user.pets = [payload, ...store.user.pets];
      store.isAddedPetSuccess = true;
    },
    [addUserPet.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.addPetError = true;
    },
    [removeUserPet.pending]: store => {
      store.isDeletePetLoading = true;
      store.error = null;
    },
    [removeUserPet.fulfilled]: (s, { payload }) => ({
      ...s,
      isDeletePetLoading: false,
      error: null,
      pets: s.pets.filter(({ _id }) => _id !== payload.id),
    }),
    [removeUserPet.rejected]: (store, { payload }) => {
      store.isDeletePetLoading = false;
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

export const { toggleIsDisablet, resetIsAddedPetSuccess, resetError, deletePet } =
  userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
