import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as tasksInstance from '../../api/api-tasks.js';

const baseURL = import.meta.env.VITE_BACKEND_URL;

import axios from 'axios';

export const fetchBoards = createAsyncThunk(
    'tasks/fetchBoards',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${baseURL}/boards`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const addBoard = createAsyncThunk(
    'tasks/addBoard',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${baseURL}/boards`, body);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const removeBoard = createAsyncThunk(
    'tasks/removeBoard',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`${baseURL}/boards/${id}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const editBoard = createAsyncThunk(
    'tasks/editBoard',
    async ({ id, body }, { rejectWithValue }) => {
        console.log(body);
        try {
            const { data } = await axios.patch(`${baseURL}/boards/${id}`, body);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
