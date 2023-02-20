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
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  authHeader.setAuthHeader(persistedToken);
  try {
    const res = await axios.patch('auth/update', credentials);
    return res.data.data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshUserData = createAsyncThunk('auth/refresh', async (credentials, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  authHeader.setAuthHeader(persistedToken);
  try {
    const res = await axios.get('/users/user/current', credentials);
    return res.data.userList;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk(
  'auth/logout',
  async (credential, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;
    authHeader.setAuthHeader(persistedToken);

    try {
      await axios.post('/auth/logout', credential);
      authHeader.clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authOperations = { register, login, verifyEmail, logOut, updateUserData, refreshUserData };
export default authOperations;
