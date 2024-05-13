export const pendingBoard = state => {
    state.boards.isLoading = true;
    state.boards.error = null;
};

export const rejectedBoard = (state, { payload }) => {
    state.boards.isLoading = false;
    state.boards.error = payload;
};

export const pendingColumn = state => {
    state.columns.isLoading = true;
    state.columns.error = null;
};

export const rejectedColumn = (state, { payload }) => {
    state.columns.isLoading = false;
    state.columns.error = payload;
};

export const pendingCard = state => {
    state.cards.isLoading = true;
    state.cards.error = null;
};

export const rejectedCard = (state, { payload }) => {
    state.cards.isLoading = false;
    state.cards.error = payload;
};
