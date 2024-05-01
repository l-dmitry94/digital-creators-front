export const selectLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;

export const selectLogin = state => state.auth.isLogin;

export const selectUser = state => state.auth.user;
