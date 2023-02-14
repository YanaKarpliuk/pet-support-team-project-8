import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = { query: "" };

const searchSlice = createSlice({
    name: 'search',
    initialState: searchInitialState,
    reducers: {
        setSearch(state, action) {
            state.query = action.payload;
        }
    }
})

export const { setSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;