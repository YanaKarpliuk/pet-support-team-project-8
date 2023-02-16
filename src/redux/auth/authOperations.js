import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-project.onrender.com/api';

const authHeader = {
  setAuthHeader: accessToken =>
    (axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`),
  clearAuthHeader: () => (axios.defaults.headers.common.Authorization = ''),
};

const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    await axios.post('/auth/register', userData);
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', userData);
    authHeader.setAuthHeader(data.data.result.accessToken);
    console.log(data.data.result);
    return data.data.result;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const verifyEmail = createAsyncThunk('auth/verifyEmail', async (email, { rejectWithValue }) => {
  try {
    await axios.post('/auth/verification', email);
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const updateUserData = createAsyncThunk('auth/update', async (credentials, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;
  // console.log(persistedToken);
  authHeader.setAuthHeader(persistedToken);

  console.log(persistedToken);
  console.log('this is update 0');

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  console.log('this is update 1');
  try {
    // authHeader.setAuthHeader(persistedToken);
    const res = await axios.patch('auth/update', credentials);
    console.log('this is update 2');
    console.log(res.data);

    return res.data.data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshUserData = createAsyncThunk('auth/refresh', async (credentials, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;
  // console.log(persistedToken);
  authHeader.setAuthHeader(persistedToken);

  // console.log(persistedToken);
  console.log('this is refresh 0');

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  console.log('this is refresh 1');
  try {
    // authHeader.setAuthHeader(persistedToken);
    // axios.get we need here at backend
    const res = await axios.post('/auth/refresh', credentials);
    console.log('this is refresh 2');
    console.log(res.data);

    return res.data.data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk(
  'auth/logout',
  async (credential, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;
    // console.log(persistedToken);
    authHeader.setAuthHeader(persistedToken);

    try {
      await axios.post('/auth/logout', credential);
      authHeader.clearAuthHeader();
      console.log('this is logout');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authOperations = { register, login, verifyEmail, logOut, updateUserData, refreshUserData };
export default authOperations;
