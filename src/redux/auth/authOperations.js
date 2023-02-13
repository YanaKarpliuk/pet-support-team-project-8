import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-project.onrender.com/api';

const authHeader = {
  setAuthHeader: token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
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
    authHeader.setAuthHeader(data.data.result.token);
    return data.data.result;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const logOut = createAsyncThunk('auth/logOut', async (credential, { rejectWithValue }) => {
  try {
    await axios.post('/auth/signout', credential);
    authHeader.clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authOperations = { register, login, logOut };
export default authOperations;
