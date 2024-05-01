import * as instance from '../../api/auth-api.js';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
    'auth/signup',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await instance.signupRequest(body);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
