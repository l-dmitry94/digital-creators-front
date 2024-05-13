import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// import * as tasksInstance from '../../api/api-tasks.js';

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const fetchCards = createAsyncThunk(
    'tasks/fetchCards',
    async ({ boardId, columnId }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `${baseURL}/boards/${boardId}/columns/${columnId}/cards`
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const addCard = createAsyncThunk(
    'tasks/addCard',
    async ({ id, columnId, values }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `${baseURL}/boards/${id}/columns/${columnId}/cards`,
                values
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const removeCard = createAsyncThunk(
    'tasks/removeCard',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(
                `${baseURL}/boards/${body.boardId}/columns/${body.columnId}/cards/${body.cardId}`
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const editCard = createAsyncThunk(
    'tasks/editCard',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.patch(
                `${baseURL}/boards/${body.boardId}/columns/${body.columnId}/cards/${body.cardId}`,
                body.values
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const changeCardColumnById = createAsyncThunk(
    'tasks/changeColumn',
    async (body, { rejectWithValue }) => {
        try {
            const { data } = await axios.patch(
                `${baseURL}/boards/${body.boardId}/columns/${body.columnId}/cards`,
                body.values
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
