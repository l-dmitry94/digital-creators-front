import { createAsyncThunk } from '@reduxjs/toolkit';

import * as tasksInstance from '../../api/api-tasks.js';

export const fetchColumns = createAsyncThunk(
    'tasks/fetchColumns',
    async (data, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.getColumns(data.boardId);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const addColumn = createAsyncThunk(
    'tasks/addColumn',
    async (data, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.addColumn(
                data.boardId,
                data.body
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const removeColumn = createAsyncThunk(
    'tasks/removeColumn',
    async (data, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.removeColumn(
                data.boardId,
                data.columnId
            );
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const editColumn = createAsyncThunk(
    'tasks/editColumn',
    async (data, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.editColumn(
                data.boardId,
                data.columnId,
                data.body
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
