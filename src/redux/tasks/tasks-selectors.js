//! BOARDS

import { createSelector } from '@reduxjs/toolkit';

export const selectBoardItems = state => state.tasks.boards.items;

// export const selectBoardById = createSelector(
//     [selectBoardItems],
//     (items, _id) => items.find(item => item._id === _id)
// );

export const selectBoardIsLoading = state => state.tasks.boards.isLoading;

export const selectBoardError = state => state.tasks.boards.error;

//! COLUMNS

export const selectColumnItems = state => state.tasks.columns.items;

export const selectColumnIsLoading = state => state.tasks.columns.isLoading;

export const selectColumnError = state => state.tasks.columns.error;



//! CARDS

export const selectCardItems = state => state.tasks.cards.items;

export const selectCardIsLoading = state => state.tasks.cards.isLoading;

export const selectCardError = state => state.tasks.cards.error;
