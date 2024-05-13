import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// import { initialState } from './tasks-initialState.js';

import * as boardsOperations from './tasks-operations/tasks-boards-operations.js';
import * as columnsOperations from './tasks-operations/tasks-columns-operations.js';
import * as cardsOperations from './tasks-operations/tasks-cards-operations.js';
import * as status from './tasks-constants.js';

const initialState = {
    boards: {
        items: [],
        isLoading: false,
        error: null,
    },
    columns: {
        items: [],
        isLoading: false,
        error: null,
    },
    cards: {
        items: [],
        isLoading: false,
        error: null,
    },
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(boardsOperations.fetchBoards.pending, status.pendingBoard)
            .addCase(
                boardsOperations.fetchBoards.fulfilled,
                (state, { payload }) => {
                    state.boards.items = payload;
                    state.boards.isLoading = false;
                    state.boards.error = null;
                    toast.success(`Operation success`);
                }
            )
            .addCase(
                boardsOperations.fetchBoards.rejected,
                status.rejectedBoard
            )
            .addCase(
                boardsOperations.fetchBoardById.pending,
                status.pendingBoard
            )
            .addCase(
                boardsOperations.fetchBoardById.fulfilled,
                (state, { payload }) => {
                    state.boards.error = null;
                    state.boards.isLoading = false;
                    state.boards.items = payload;
                    toast.success(`Operation success`);
                }
            )
            .addCase(
                boardsOperations.fetchBoardById.rejected,
                status.rejectedBoard
            )
            .addCase(boardsOperations.addBoard.pending, status.pendingBoard)
            .addCase(
                boardsOperations.addBoard.fulfilled,
                (state, { payload }) => {
                    state.boards.isLoading = false;
                    state.boards.items.push(payload);
                    state.boards.error = null;
                    toast.success(`Operation success`);
                }
            )
            .addCase(boardsOperations.addBoard.rejected, status.rejectedBoard)
            .addCase(boardsOperations.removeBoard.pending, status.pendingBoard)
            .addCase(
                boardsOperations.removeBoard.fulfilled,
                (state, { payload }) => {
                    state.boards.isLoading = false;
                    state.boards.items.filter(({ _id }) => _id !== payload);
                    toast.success(`Operation success`);
                }
            )
            .addCase(
                boardsOperations.removeBoard.rejected,
                status.rejectedBoard
            )
            .addCase(boardsOperations.editBoard.pending, status.pendingBoard)
            .addCase(
                boardsOperations.editBoard.fulfilled,
                (state, { payload }) => {
                    state.boards.isLoading = false;

                    const index = state.boards.items.findIndex(
                        board => board._id === payload._id
                    );
                    state.boards.items.splice(index, 1, payload);
                    toast.success(`Operation success`);
                }
            )
            .addCase(boardsOperations.editBoard.rejected, status.rejectedBoard)
            .addCase(
                columnsOperations.fetchColumns.pending,
                status.pendingColumn
            )
            .addCase(
                columnsOperations.fetchColumns.fulfilled,
                (state, { payload }) => {
                    state.columns.isLoading = false;
                    state.columns.error = null;
                    state.columns.items = payload;
                    toast.success(`Operation success`);
                }
            )
            .addCase(
                columnsOperations.fetchColumns.rejected,
                status.rejectedColumn
            )
            .addCase(columnsOperations.addColumn.pending, status.pendingColumn)
            .addCase(
                columnsOperations.addColumn.fulfilled,
                (state, { payload }) => {
                    state.columns.isLoading = false;
                    state.columns.error = null;
                    state.columns.items.push(payload);
                    toast.success(`Operation success`);
                }
            )
            .addCase(
                columnsOperations.addColumn.rejected,
                status.rejectedColumn
            )
            .addCase(
                columnsOperations.removeColumn.pending,
                status.pendingColumn
            )
            .addCase(
                columnsOperations.removeColumn.fulfilled,
                (state, { payload }) => {
                    state.columns.isLoading = false;
                    state.columns.error = null;
                    state.columns.items.filter(({ _id }) => _id !== payload);
                    toast.success(`Operation success`);
                }
            )
            .addCase(
                columnsOperations.removeColumn.rejected,
                status.rejectedColumn
            )
            .addCase(columnsOperations.editColumn.pending, status.pendingColumn)
            .addCase(
                columnsOperations.editColumn.fulfilled,
                (state, { payload }) => {
                    state.columns.isLoading = false;
                    state.columns.error = null;
                    const index = state.columns.items.findIndex(
                        column => column._id === payload._id
                    );
                    state.columns.items.splice(index, 1, payload);
                    toast.success(`Operation success`);
                }
            )
            .addCase(
                columnsOperations.editColumn.rejected,
                status.rejectedColumn
            )
            .addCase(cardsOperations.fetchCards.pending, status.pendingCard)
            .addCase(
                cardsOperations.fetchCards.fulfilled,
                (state, { payload }) => {
                    state.cards.isLoading = false;
                    state.cards.error = null;
                    state.cards.items = payload;
                    toast.success(`Operation success`);
                }
            )
            .addCase(cardsOperations.fetchCards.rejected, status.rejectedCard)
            .addCase(cardsOperations.addCard.pending, status.pendingCard)
            .addCase(
                cardsOperations.addCard.fulfilled,
                (state, { payload }) => {
                    state.cards.items.push(payload);
                    state.cards.isLoading = false;
                    state.cards.error = null;
                    toast.success(`Operation success`);
                }
            )
            .addCase(cardsOperations.addCard.rejected, status.rejectedCard)
            .addCase(cardsOperations.removeCard.pending, status.pendingCard)
            .addCase(
                cardsOperations.removeCard.fulfilled,
                (state, { payload }) => {
                    state.cards.isLoading = false;
                    state.cards.error = null;
                    state.cards.items.filter(({ _id }) => _id !== payload._id);
                    toast.success(`Operation success`);
                }
            )
            .addCase(cardsOperations.removeCard.rejected, status.rejectedCard)
            .addCase(cardsOperations.editCard.pending, status.pendingCard)
            .addCase(
                cardsOperations.editCard.fulfilled,
                (state, { payload }) => {
                    state.cards.isLoading = false;
                    state.cards.error = null;
                    const index = state.cards.items.findIndex(
                        card => card._id === payload._id
                    );
                    state.cards.items.splice(index, 1, payload);
                    toast.success(`Operation success`);
                    state.cards.items[index] = payload;
                }
            );
    },
});

export default tasksSlice.reducer;
