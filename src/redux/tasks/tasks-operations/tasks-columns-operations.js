import { createAsyncThunk } from '@reduxjs/toolkit';

import * as tasksInstance from '../../api/api-tasks.js';

import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const fetchColumns = createAsyncThunk(
    'tasks/fetchColumns',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `${baseURL}/boards/${body.boardId}/columns`
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const addColumn = createAsyncThunk(
    'tasks/addColumn',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `${baseURL}/boards/${body.boardId}/columns`,
                body.data
            );

            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const removeColumn = createAsyncThunk(
    'tasks/removeColumn',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(
                `${baseURL}/boards/${body.boardId}/columns/${body.columnId}`
            );
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const editColumn = createAsyncThunk(
    'tasks/editColumn',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.patch(
                `${baseURL}/boards/${body.boardId}/columns/${body.columnId}`,
                body.data
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
