import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/auth-slice.js';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
