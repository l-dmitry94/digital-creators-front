//! BOARDS

export const selectBoardItems = state => state.tasks.boards.items;

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

export const selectFilteredCards = store => {
    const { tasks, filter } = store;
    const { items } = tasks.cards;
    if (!filter) {
        return items;
    }
    const filteredCards = items.filter(item => item.priority === filter);
    console.log(filteredCards);
    // const filteredCards = items.filter(({ priority }) => {
    //     card => card.priority === selectedPriority;
    //     console.log(priority);
    //     // const normalizedName = name.toLowerCase();
    //     // return normalizedName.includes(normalizedFilter);
    // });
    return filteredCards;
};
