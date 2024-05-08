import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const setToken = token => {
    if (token) {
        axios.defaults.headers.authorization = `Bearer ${token}`;
    } else axios.defaults.headers.authorization = '';
};

export const signup = createAsyncThunk(
    'auth/signup',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseURL}/auth/signup`, body);
            setToken(response.data.token);
            console.log(response);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseURL}/auth/signin`, body);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const current = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const persistedToken = auth.token;

            if (persistedToken === '') {
                return rejectWithValue('Unable to fetch user');
            }

            setToken(persistedToken);
            const response = await axios.get(`${baseURL}/auth/current`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        },
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post(`${baseURL}/auth/logout`);
            setToken();
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    'auth/updateUser',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.patch(
                `${baseURL}/auth/editProfile`,
                body
            );
            setToken(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
