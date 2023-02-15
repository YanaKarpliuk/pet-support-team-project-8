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

const verifyEmail = createAsyncThunk('auth/verifyEmail', async (email, { rejectWithValue }) => {
  try {
    await axios.post('/auth/verification', email);
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const updateUserInformation = createAsyncThunk('auth/update', async (credentials, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  // console.log(persistedToken);
  authHeader.setAuthHeader(persistedToken);
  console.log('this is update 0');

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  console.log('this is update 1');
  try {
    authHeader.setAuthHeader(persistedToken);
    const res = await axios.patch('/auth/update', credentials);
    console.log('this is update 2');
    console.log(res.data);

    return res.data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// const updateUserInformation = createAsyncThunk(
//   'auth/update',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       authHeader.setAuthHeader(data.data.result.token);
//       console.log('this is update 1');
//       const { data } = await axios.patch('/auth/update', credentials);
//       console.log('this is update 2');

//       if (data.data.result.token === null) {
//         return rejectWithValue('Unable to fetch user');
//       }
//       console.log('this is update 3');
//       // authHeader.setAuthHeader(data.data.result.token);

//       return data.data.result;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

const logOut = createAsyncThunk('auth/logout', async (credential, { rejectWithValue }) => {
  try {
    await axios.post('/auth/logout', credential);
    authHeader.clearAuthHeader();
    console.log('this is logout');
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authOperations = { register, login, verifyEmail, logOut, updateUserInformation };
export default authOperations;
