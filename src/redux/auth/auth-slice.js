import { createSlice } from '@reduxjs/toolkit';

import { pending, rejected } from '../redux-constants.js';

import { signup, login, current, logout } from './auth-operations.js';

const initialState = {
    user: {},
    token: '',
    isLogin: false,
    isLoading: false,
    error: null,
    isRefreshing: false,
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
            .addCase(login.rejected, rejected)
            .addCase(current.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(current.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLogin = true;
                state.isLoading = false;
                state.error = null;
                state.isRefreshing = false;
            })
            .addCase(current.rejected, state => {
                state.isLoading = false;
                state.isRefreshing = false;
            })
            .addCase(logout.pending, pending)
            .addCase(logout.fulfilled, state => {
                state.user = {};
                state.token = '';
                state.isLogin = false;
                state.isLoading = false;
            })
            .addCase(logout.rejected, rejected);
    },
});

export default authSlice.reducer;
