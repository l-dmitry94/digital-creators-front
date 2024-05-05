import { useSelector } from 'react-redux';
import {
    selectIsRefreshing,
    selectLogin,
    selectUser,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLogin = useSelector(selectLogin);
    const isRefreshing = useSelector(selectIsRefreshing);

    return { user, isLogin, isRefreshing };
};
