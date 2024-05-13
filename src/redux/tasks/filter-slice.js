import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFitler: (_, { payload }) => payload,
    },
});

export const { changeFitler } = filterSlice.actions;

export default filterSlice.reducer;
