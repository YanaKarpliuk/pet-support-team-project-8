import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pets-project.onrender.com/api';

const fetchNoticesByCategory = createAsyncThunk('notices/fetchByGategory', async (category, { rejectWithValue }) => {
    try {
        const response = await axios.get(`/notices/${category}`);
        return response.data;
    } catch ({ response }) {
        const { status, data } = response;
        const error = {
            status,
            message: data.message,
        };
        return rejectWithValue(error);
    }
})

const fetchSingleNotice = createAsyncThunk('notices/fetchSingle', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.get(`/notices/id/${noticeId}`);
        return response.data;
    } catch ({ response }) {
        const { status, data } = response;
        const error = {
            status,
            message: data.message,
        };
        return rejectWithValue(error);
    }
})

const addToFavorite = createAsyncThunk('notices/addFavorite', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.patch(`/notices/favorite/${noticeId}`);
        return response.data;
    } catch ({ response }) {
        const { status, data } = response;
        const error = {
            status,
            message: data.message,
        };
        return rejectWithValue(error);
    }
})

const fetchFavorite = createAsyncThunk('notices/fetchFavorite', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("/notices/notice/favorite");
        return response.data;
    } catch ({ response }) {
        const { status, data } = response;
        const error = {
            status,
            message: data.message,
        };
        return rejectWithValue(error);
    }
})

const deleteFromFavorite = createAsyncThunk('notices/deleteFavorite', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`/notices/favorite/${noticeId}`);
        return response.data;
    } catch ({ response }) {
        const { status, data } = response;
        const error = {
            status,
            message: data.message,
        };
        return rejectWithValue(error);
    }
})

const addNotice = createAsyncThunk('notices/addNotice', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("/notices/notice");
        return response.data;
    } catch ({ response }) {
        const { status, data } = response;
        const error = {
            status,
            message: data.message,
        };
        return rejectWithValue(error);
    }
})

const fetchOwnNotices = createAsyncThunk('notices/fetchOwn', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("/notices/user/ads");
        return response.data;
    } catch ({ response }) {
        const { status, data } = response;
        const error = {
            status,
            message: data.message,
        };
        return rejectWithValue(error);
    }
})

const deleteOwnNotice = createAsyncThunk('notices/deleteOwn', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`/notices/user/${noticeId}`);
        return response.data;
    } catch ({ response }) {
        const { status, data } = response;
        const error = {
            status,
            message: data.message,
        };
        return rejectWithValue(error);
    }
})

const noticesOperations = { fetchNoticesByCategory, fetchSingleNotice, fetchOwnNotices, fetchFavorite, addToFavorite, deleteFromFavorite, addNotice, deleteOwnNotice }

export default noticesOperations