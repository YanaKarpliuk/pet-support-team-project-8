import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserData = createAsyncThunk('user/getUserData', async (_, { rejectWithValue }) => {
  try {
    const result = await axios.get('/user/get');
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
    return rejectWithValue(error);
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
      return rejectWithValue(error);
    }
  }
);
