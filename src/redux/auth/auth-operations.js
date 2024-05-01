import * as authInstance from '../../api/auth-api.js';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
    'auth/signup',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await authInstance.signupRequest(body);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await authInstance.loginRequest(body);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
