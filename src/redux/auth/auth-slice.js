import { createSlice } from '@reduxjs/toolkit';

import { pending, rejected } from '../redux-constants.js';

import { signup } from './auth-operations.js';

const initialState = {
    user: {},
    isLogin: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signup.pending, pending)
            .addCase(signup.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.isLoading = false;
                state.isLogin = true;
                state.error = null;
            })
            .addCase(signup.rejected, rejected);
    },
});

export default authSlice.reducer;
