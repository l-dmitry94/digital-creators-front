// import { LoginForm } from '../../components/Auth/LoginForm/LoginForm';

export const selectLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;

export const selectLogin = state => state.auth.isLogin;

export const selectUser = state => state.auth.user;

export const selectThema = state => state.auth.user.thema;

export const selectToken = state => state.auth.token;

export const selectIsRefreshing = state => state.auth.isRefreshing;
// export default LoginForm;
