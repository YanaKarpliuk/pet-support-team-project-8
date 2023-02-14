import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pets-project.onrender.com/api';

const fetchNews = createAsyncThunk('news/fetchAll', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("/news");
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const newsOperations = { fetchNews }

export default newsOperations