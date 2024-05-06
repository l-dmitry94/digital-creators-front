import { useSelector } from 'react-redux';
import {
    selectIsRefreshing,
    selectLogin,
    selectUser,
} from '../redux/auth/auth-selectors';
import { login } from '../redux/auth/auth-operations';

export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLogin = useSelector(selectLogin);
    login(isLogin);
    const isRefreshing = useSelector(selectIsRefreshing);

    return { user, isLogin, isRefreshing };
};
