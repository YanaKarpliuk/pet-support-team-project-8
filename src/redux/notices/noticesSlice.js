import { createSlice } from "@reduxjs/toolkit";
import operations from "./noticesOperations";
import doggo from '../../images/example.jpg';

const { fetchNoticesByCategory, fetchSingleNotice, addToFavorite, deleteFromFavorite, addNotice, deleteOwnNotice } = operations

const noticesInitialState = {
    notices: [{
        id: 1,
        title: "Сute dog looking for a home",
        category: "in good hands",
        img: doggo,
        breed: 'Pomeranian',
        age: 'one',
        place: 'Lviv'
    },
    {
        id: 2,
        title: "Сute not dog looking for a home",
        category: "sell",
        price: 13,
        img: doggo,
        breed: 'Pomeranian',
        age: 'one',
        place: 'Lviv'
    },
    {
        id: 3,
        title: "Сute dog looking for a home",
        category: "lost/found",
        img: doggo,
        breed: 'Pomeranian',
        age: 'one',
        place: 'Lviv'
    },
    {
        id: 4,
        title: "Сute not dog looking for a home",
        category: "in good hands",
        img: doggo,
        breed: 'Pomeranian',
        age: 'one',
        place: 'Lviv'
    },
    {
        id: 5,
        title: "Сute dog looking for a house",
        category: "sell",
        price: 13,
        img: doggo,
        breed: 'Pomeranian',
        age: 'one',
        place: 'Lviv'
    },
    {
        id: 6,
        title: "Сute dog looking for a home",
        category: "lost/found",
        img: doggo,
        breed: 'Pomeranian',
        age: 'one',
        place: 'Lviv'
    }],
    singleNotice: {},
    error: null,
    isLoading: false
}

const handlePending = (state) => {
    state.isLoading = true;
}

const handleReject = (state, action) => {
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
                state.notices = [...state.notices, ...action.payload]
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