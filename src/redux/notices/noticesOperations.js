import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pets-project.onrender.com/api';


const fetchNoticesByCategory = createAsyncThunk('notices/fetchByGategory', async (category, { rejectWithValue }) => {
    try {
        const response = await axios.get(`/notices/${category}`);
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const fetchSingleNotice = createAsyncThunk('notices/fetchSingle', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.get(`/notices/*/${noticeId}`);
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const addToFavorite = createAsyncThunk('notices/addFavorite', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.post("/notices");
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const fetchFavorite = createAsyncThunk('notices/fetchFavorite', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("/notices");
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const deleteFromFavorite = createAsyncThunk('notices/deleteFavorite', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.delete("/notices");
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const addNotice = createAsyncThunk('notices/addNotice', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.post("/notices");
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const fetchOwnNotices = createAsyncThunk('notices/fetchOwn', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("/notices");
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const deleteOwnNotice = createAsyncThunk('notices/deleteOwn', async (noticeId, { rejectWithValue }) => {
    try {
        const response = await axios.delete("/notices");
        // return response.data;
        return []
    } catch (error) {
        rejectWithValue(error)
    }
})

const noticesOperations = { fetchNoticesByCategory, fetchSingleNotice, fetchOwnNotices, fetchFavorite, addToFavorite, deleteFromFavorite, addNotice, deleteOwnNotice }

export default noticesOperations