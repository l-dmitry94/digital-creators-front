import { createAsyncThunk } from '@reduxjs/toolkit';

import * as tasksInstance from '../../api/api-tasks.js';

export const fetchCards = createAsyncThunk(
    'tasks/fetchCards',
    async (data, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.getCards(
                data.boardId,
                data.columnId
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const addCard = createAsyncThunk(
    'tasks/addCard',
    async (data, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.addCard(
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

export const removeCard = createAsyncThunk(
    'tasks/removeCard',
    async (data, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.removeCard(
                data.boardId,
                data.columnId,
                data.cardId
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const editCard = createAsyncThunk(
    'tasks/editCard',
    async (data, { rejectWithValue }) => {
        try {
            const { data } = await tasksInstance.editCard(
                data.boardId,
                data.columnId,
                data.cardId,
                data.body
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
