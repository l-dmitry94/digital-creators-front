import { useSelector } from 'react-redux';
import {
    selectIsRefreshing,
    selectLogin,
    selectToken,
    selectUser,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLogin = useSelector(selectLogin);
    const isRefreshing = useSelector(selectIsRefreshing);
    const isToken = useSelector(selectToken)

    return { user, isLogin, isRefreshing, isToken };
};
