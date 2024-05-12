import { toast } from 'react-toastify';

export const pendingBoard = state => {
    state.boards.isLoading = true;
    state.boards.error = null;
};

export const rejectedBoard = (state, { payload }) => {
    toast.error(`${payload}`);
    state.boards.isLoading = false;
    state.boards.error = payload;
};

export const pendingColumn = state => {
    state.columns.isLoading = true;
    state.columns.error = null;
};

export const rejectedColumn = (state, { payload }) => {
    toast.error(`${payload}`);
    state.columns.isLoading = false;
    state.columns.error = payload;
};

export const pendingCard = state => {
    state.cards.isLoading = true;
    state.cards.error = null;
};

export const rejectedCard = (state, { payload }) => {
    toast.error(`${payload}`);
    state.cards.isLoading = false;
    state.cards.error = payload;
};
