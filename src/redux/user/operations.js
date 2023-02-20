import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-project.onrender.com/api';

const authHeader = {
  setAuthHeader: token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  clearAuthHeader: () => (axios.defaults.headers.common.Authorization = ''),
};

export const getUserData = createAsyncThunk('user/getUserData', async (_, { rejectWithValue }) => {
  try {
    const result = await axios.get('users/user/current');
    return result.data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return rejectWithValue(error);
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
      return rejectWithValue(error);
    }
  }
);

export const getPets = createAsyncThunk(
  'pets/getAllCurrentUserPets',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.accessToken;
      if (token === null) {
        return rejectWithValue('Unable to fetch user');
      }
      authHeader.setAuthHeader(token);
      const { data } = await axios.get('/users/pet/current');
      return data.userPetsList;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addUserPet = createAsyncThunk(
  'user/addUserPet',
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const result = await axios.post('/users/pet/add', data);
      return result.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const removeUserPet = createAsyncThunk(
  'user/removeUserPet',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/pet/${id}`);
      return { id };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
