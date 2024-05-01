import { createSlice } from '@reduxjs/toolkit';

import { pending, rejected } from '../redux-constants.js';

import { signup, login } from './auth-operations.js';

const initialState = {
    user: {},
    token: '',
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
                state.token = payload.token;
                state.isLogin = true;
                state.error = null;
            })
            .addCase(signup.rejected, rejected)
            .addCase(login.pending, pending)
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.user = payload.user;
                state.token = payload.token;
                state.isLogin = true;
            })
            .addCase(login.rejected, rejected);
    },
});

export default authSlice.reducer;
