import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer.js';

export const store = configureStore({
    reducer: rootReducer,
});
