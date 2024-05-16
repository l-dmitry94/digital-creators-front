import { createSlice } from '@reduxjs/toolkit';
import {
    // ToastContainer,
    toast,
} from 'react-toastify';
import { pending, rejected } from './auth-constants.js';

import {
    signup,
    login,
    current,
    logout,
    updateUser,
    updateThema,
} from './auth-operations.js';

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
                toast.dismiss();
                toast.success(
                    `User ${payload.user.username} registered success `
                );
                state.user = payload.user;
                state.isLoading = false;
                state.token = payload.token;
                state.isLogin = true;
                state.error = null;
            })
            .addCase(signup.rejected, rejected)
            .addCase(login.pending, pending)
            .addCase(login.fulfilled, (state, { payload }) => {
                toast.dismiss();
                toast.success(`Login success`);
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
                state.token = '';
            })
            .addCase(logout.pending, pending)
            .addCase(logout.fulfilled, state => {
                toast.dismiss();
                toast.success('Logout success');
                state.user = {};
                state.token = '';
                state.isLogin = false;
                state.isLoading = false;
            })
            .addCase(logout.rejected, rejected)
            .addCase(updateUser.pending, pending)
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                toast.dismiss();
                toast.success(`Edit success`);
                state.user = payload;
                state.isLoading = false;
                state.token = payload.token;
                state.isLogin = true;
                state.error = null;
            })
            .addCase(updateUser.rejected, rejected)
            .addCase(updateThema.pending, pending)
            .addCase(updateThema.fulfilled, (state, { payload }) => {
                state.isLogin = false;
                state.error = null;
                state.user.thema = payload;
            })
            .addCase(updateThema.rejected, rejected);
    },
});

export default authSlice.reducer;
