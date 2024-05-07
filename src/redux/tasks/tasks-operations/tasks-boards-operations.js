import { createAsyncThunk } from '@reduxjs/toolkit';

import * as tasksInstance from '../../api/api-tasks.js';

export const fetchBoards = createAsyncThunk(
    'tasks/fetchBoards',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.getBoards();
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
            const { data } = await tasksInstance.addBoard(body);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const removeBoard = createAsyncThunk(
    'tasks/removeBoard',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.removeBoard(body.id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const editBoard = createAsyncThunk(
    'tasks/editBoard',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.editBoard(body.id, body);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
