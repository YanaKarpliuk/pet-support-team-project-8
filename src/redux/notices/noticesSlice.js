import { createSlice } from "@reduxjs/toolkit";
import operations from "./noticesOperations";

const { fetchNoticesByCategory, fetchSingleNotice, addToFavorite, deleteFromFavorite, addNotice, deleteOwnNotice, fetchOwnNotices, fetchFavorite } = operations

const noticesInitialState = {
    notices: { result: [] },
    singleNotice: {},
    favorite: [],
    own: [],
    error: null,
    isLoading: false
}

const handlePending = (state) => {
    state.isLoading = true;
}

const handleReject = (state, action) => {
    state.notices = { result: [] }
    state.isLoading = false;
    state.error = action.payload
}

const noticesSlice = createSlice({
    name: 'notices',
    initialState: noticesInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchNoticesByCategory.pending, state => {
                handlePending(state)
            })
            .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.notices = action.payload
            })
            .addCase(fetchNoticesByCategory.rejected, (state, action) => {
                handleReject(state, action)
            })
            .addCase(fetchSingleNotice.pending, state => {
                handlePending(state)
            })
            .addCase(fetchSingleNotice.fulfilled, (state, action) => {
                state.isLoading = false;
                state.singleNotice = action.payload
            })
            .addCase(fetchSingleNotice.rejected, (state, action) => {
                handleReject(state, action)
            })
            .addCase(addToFavorite.pending, state => {
                handlePending(state)
            })
            .addCase(addToFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(addToFavorite.rejected, (state, action) => {
                handleReject(state, action)
            })
            .addCase(fetchFavorite.pending, state => {
                handlePending(state)
            })
            .addCase(fetchFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                state.favorite = action.payload
            })
            .addCase(fetchFavorite.rejected, (state, action) => {
                handleReject(state, action)
            })
            .addCase(deleteFromFavorite.pending, state => {
                handlePending(state)
            })
            .addCase(deleteFromFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(deleteFromFavorite.rejected, (state, action) => {
                handleReject(state, action)
            })
            .addCase(addNotice.pending, state => {
                handlePending(state)
            })
            .addCase(addNotice.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(addNotice.rejected, (state, action) => {
                handleReject(state, action)
            })
            .addCase(fetchOwnNotices.pending, state => {
                handlePending(state)
            })
            .addCase(fetchOwnNotices.fulfilled, (state, action) => {
                state.isLoading = false;
                state.own = action.payload
            })
            .addCase(fetchOwnNotices.rejected, (state, action) => {
                handleReject(state, action)
            })
            .addCase(deleteOwnNotice.pending, state => {
                handlePending(state)
            })
            .addCase(deleteOwnNotice.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(deleteOwnNotice.rejected, (state, action) => {
                handleReject(state, action)
            })
    }
})

export const noticesReducer = noticesSlice.reducer;