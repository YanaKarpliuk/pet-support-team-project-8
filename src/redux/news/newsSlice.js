import { createSlice } from "@reduxjs/toolkit";
import operations from "./newsOperation";

const { fetchNews } = operations

const newsInitialState = {
    items: [],
    error: null,
    isLoading: false
}

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const newsReducer = newsSlice.reducer;