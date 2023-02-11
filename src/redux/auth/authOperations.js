import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-project.onrender.com/api';

const authHeader = {
  setAuthHeader: token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  clearAuthHeader: () => (axios.defaults.headers.common.Authorization = ''),
};

const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/register', userData);
    return data.data.user;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', userData);
    console.log('DATA', data);
    authHeader.setAuthHeader(data.data.token);
    return { token: data.data.token, id: data.data.user.id };
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const authOperations = { register, login };
export default authOperations;
