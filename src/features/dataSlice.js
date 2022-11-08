import { createSlice } from "@reduxjs/toolkit";
import getLorem from './dataThunk';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        isSuccess: false,
        message: '',
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getLorem.pending]: (state, {payload}) => {
            state.loading = true;
        },
        [getLorem.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getLorem.rejected]: (state, {payload}) => {
            state.loading = false;
            state.data = null;
            state.message = "awdwad";
            state.isSuccess = false;
        }
    },
});



export default dataSlice;