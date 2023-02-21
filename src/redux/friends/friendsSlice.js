import { createSlice } from "@reduxjs/toolkit";
import operations from "./friendsOperation";

const { fetchFriends } = operations

const friendsInitialState = {
    items: [],
    error: null,
    isLoading: false
}

const friendsSlice = createSlice({
    name: 'friends',
    initialState: friendsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFriends.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchFriends.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload
            })
            .addCase(fetchFriends.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const friendsReducer = friendsSlice.reducer;