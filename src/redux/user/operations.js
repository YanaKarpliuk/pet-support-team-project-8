import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-project.onrender.com/api';

const authHeader = {
  setAuthHeader: token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  clearAuthHeader: () => (axios.defaults.headers.common.Authorization = ''),
};

export const getUserData = createAsyncThunk('user/getUserData', async (_, { rejectWithValue }) => {
  try {
    const result = await axios.get('/user/current');
    return result.data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return rejectWithValue(error.message);
  }
});

export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (data, { rejectWithValue }) => {
    try {
      //   const result = await axios.updateUserData(data);
      const result = await axios.put('/auth/update', data);
      return result.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error.message);
    }
  }
);

export const getPets = createAsyncThunk(
  'pets/getAllCurrentUserPets',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    // console.log(persistedToken);
    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch users pets');
    }
    authHeader.setAuthHeader(persistedToken);
    try {
      const result = await axios.get('/pet/current');
      // console.log(result);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUserPet = createAsyncThunk('user/addUserPet', async (data, { rejectWithValue }) => {
  try {
    const result = await axios.post('/pet/add', data);
    return result.data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return rejectWithValue(error.message);
  }
});

export const removeUserPet = createAsyncThunk(
  'user/removeUserPet',
  async (id, { rejectWithValue }) => {
    try {
      //   const result = await axios.removeUserPet(id);
      const result = await axios.delete(`/pet/${id}`);
      return result.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error.message);
    }
  }
);
